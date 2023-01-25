const {Tasks} = require('../models/index');

class TaskRepository {
    async createTask(data) {
        try {
            const task = await Tasks.create(data);
            return task;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }

    async updateTask(taskId, data) {
        try {
            const updatedTask = await Tasks.findByPk(taskId);
            if (data.task) {
                updatedTask.task = data.task;
            }
            if (data.priority) {
                updatedTask.priority = data.priority;
            }

            await updatedTask.save();
            return updatedTask;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    async deleteTask(taskId) {
        try {
            await Tasks.destroy({
                where: {
                    id: taskId,
                },
            });
            return true;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
    
    async fetchAll() {
        try {
            const tasks = await Tasks.findAll();
            return tasks;
        } catch (error) {
            console.log("Something went wrong in the repository layer");
            throw error;
        }
    }
}

module.exports = TaskRepository;