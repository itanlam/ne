/**
 * User model as defined in Strapi
 */

class UserModel {
    constructor(identifier, password) {
        this.identifier = identifier;
        this.password = password;
    }
}

export default UserModel;