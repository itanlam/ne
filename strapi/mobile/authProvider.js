import Cookies from './helpers/Cookies'

export default {
    provider: (url, options = {}) => {
        if (!options.headers) {
            options.headers = new Headers({ Accept: 'application/json' });
        }
        const token = Cookies.getCookie('token')
        options.headers.set('Authorization', `Bearer ${token}`);
        return fetchUtils.fetchJson(url, options);
    },
    login: ({ username, password, url }) => {
        console.log('Teste!');
        const identifier = username // strapi expects 'identifier' and not 'username'
        const request = new Request(url, {
            method: 'POST',
            body: JSON.stringify({ identifier, password }),
            headers: new Headers({ 'Content-Type': 'application/json' })
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(response => {
                Cookies.setCookie('token', response.jwt, 1);
                Cookies.setCookie('role', response.user.role.name, 1);
            });
    },

    logout: () => {
        Cookies.deleteCookie('token');
        Cookies.deleteCookie('role');
        return Promise.resolve();
    },

    checkAuth: () => {
        return Cookies.getCookie('token') ? Promise.resolve() : Promise.reject();
    },

    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            Cookies.deleteCookie('token');
            Cookies.deleteCookie('role');
            return Promise.reject();
        }
        return Promise.resolve();
    },

    getPermissions: () => {
        const role = Cookies.getCookie('role');
        return role ? Promise.resolve(role) : Promise.reject();
    },
}
