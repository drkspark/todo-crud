const {TaskRepository} = require('../repository/index');

class TaskService {
    constructor () {
        this.taskRepo = new TaskRepository();
    }

    async createTask(data) {
        try {
            const task = await this.taskRepo.createTask(data);
            return task;
        }
        catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async deleteUser(taskId) {
        try {
            const response = await this.taskRepo.deleteTask(taskId);
            return response;
        } catch(error) {
            console.log("Something went wrong in service layer");
            throw {error};
        }
    }
}

module.exports = TaskService;