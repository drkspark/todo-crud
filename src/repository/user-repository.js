const { Users } = require("../models/index");

class UserRepository {
    async createUser(data) {
        try {
            const user = await Users.create(data);
            return user;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            await Users.destroy({
                where: {
                    id: userId,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}

module.exports = UserRepository;
