
import { saveUser, deleteUser } from '../redux/UserActions';

export default {
    login: async (user, password, url) => {
        const requestConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: 'guest@gmail.com',
                password: '123456',
            }),
        };

        try {
            const response = await fetch('http://hospedeiro.local:1337/auth/local', requestConfig);
            const json = await response.json();

            if (json.error) {
                return false;
            }

            saveUser(json.jwt, json.user);

            return true;
        } catch (err) {
            console.error(err);
            return false;
        }
    },

    logout: async () => {
        deleteUser();
    },
}
