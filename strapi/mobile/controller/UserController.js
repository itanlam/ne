
import { saveUser, deleteUser } from '../redux/UserActions';

export default {
    login: async (userId, password, url) => {
        console.log(`login called with userID ${userId} and passwd ${password}`);
        const requestConfig = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                identifier: userId.toLowerCase(),
                password: password,
            }),
        };

        try {
            const response = await fetch(url, requestConfig);
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

    getActiveUser: async (identifier) => {
        return getUser(identifier);
    }
}
