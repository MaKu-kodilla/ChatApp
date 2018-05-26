class UsersService {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }

    getUserById() {
        return this.users.find(user => user.id === userId);
    }

    addUser() {
        this.users = [user, ...this.users];
    }

    removeUser(userId) {
        this.users = this.users.filter(user => user.id !==userId);
    }
}

module.exports = UsersService;