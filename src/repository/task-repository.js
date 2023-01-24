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
}

module.exports = TaskRepository;