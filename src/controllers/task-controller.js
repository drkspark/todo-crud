const {TaskService} = require("../services/index");

const taskService = new TaskService();

const createT = async (req, res) => {
    try {
        const task = await taskService.createTask(req.body);
        return res.status(201).json({
            data: task,
            success: true,
            message: "Successfully created a task",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to create a task",
            err: error,
        });
    }
};

const deleteT = async (req, res) => {
    try {
        const data = await taskService.deleteUser(req.params.id);
        return res.status(201).json({
            data: data,
            success: true,
            message: "Successfully deleted a task",
            err: {},
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a task",
            err: error,
        });
    }
};

module.exports = {
    createT,
    deleteT
}