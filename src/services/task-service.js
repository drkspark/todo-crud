const { TaskRepository } = require("../repository/index");

class TaskService {
    constructor() {
        this.taskRepo = new TaskRepository();
    }

    async addTask(data) {
        try {
            const task = await this.taskRepo.createTask(data);
            return task;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async changeTask(taskId, data) {
        try {
            const task = await this.taskRepo.updateTask(taskId, data);
            return task;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw error;
        }
    }

    async removeTask(taskId) {
        try {
            const response = await this.taskRepo.deleteTask(taskId);
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }

    async getAll() {
        try {
            const response = await this.taskRepo.fetchAll();
            return response;
        } catch (error) {
            console.log("Something went wrong in service layer");
            throw { error };
        }
    }
}

module.exports = TaskService;
