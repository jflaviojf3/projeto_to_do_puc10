const Todo = require("../models/Todo");

module.exports = class TodoService {
  static async getAllTodos() {
    try {
      const allTodos = await Todo.find();
      return allTodos;
    } catch (error) {
      console.log(`Could not fetch todos ${error}`);
    }
  }

  static async getTodo(id) {
    const title = { title: id };
    try {
      const ToDos = await Todo.findOne(title);
      return ToDos;
    } catch (error) {
      console.log(`Could not fetch todos ${error}`);
    }
  }

  static async addTodo(data) {
    try {
      const newTodo = {
        title: data.title,
        description: data.description,
        date: data.date,
        finished: data.finished,
      };
      const response = await new Todo(newTodo).save();
      return response;
    } catch (error) {
      console.log(`Could not fetch todos ${error}`);
    }
  }

  static async updateTodo(id, data) {
    const title = { title: id };

    try {
      const newTodo = {
        title: data.title,
        description: data.description,
        date: data.date,
        finished: data.finished,
      };

      const response = await Todo.where(title).updateOne(newTodo).exec();
      return response;
    } catch (error) {
      console.log(`Could not fetch todos ${error}`);
    }
  }

  static async deleteTodo(id) {
    const title = { title: id };
    try {
      const response = await Todo.deleteOne(title);
      return response;
    } catch (error) {
      console.log(`Could not fetch todos ${error}`);
    }
  }
};
