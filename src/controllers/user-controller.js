const { UserService } = require("../services/index");

const userService = new UserService();

const createU = async (req, res) => {
    try {
        const user = await userService.createUser(req.body);
        return res.status(201).json({
            data: user,
            success: true,
            message: "Successfully created a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a user",
            err: error,
        });
    }
};

const deleteU = async (req, res) => {
    try {
        const data = await userService.deleteUser(req.params.id);
        return res.status(201).json({
            data: data,
            success: true,
            message: "Successfully deleted a city",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a user",
            err: error,
        });
    }
};

module.exports = {
    createU,
    deleteU,
};
