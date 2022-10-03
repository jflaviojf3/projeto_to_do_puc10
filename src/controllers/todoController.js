const TodoService = require("../services/TodoService");

//tarefa 01
exports.get = async (req, res) => {
  const id = req.params.id;
  const todo = await TodoService.getTodo(id);

  try {
    if (!todo) {
      return res.status(404).json("There are no todos published yet!");
    }
    res.json(todo);
  } catch (error) {
    return res.status(500).json({ error: error });
  }

  console.log(`OK GET com o Title ${id}`);
};

exports.getAll = async (req, res) => {
  const todos = await TodoService.getAllTodos();
  try {
    if (!todos) {
      return res.status(404).json("There are no todos published yet!");
    }
    res.json(todos);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
  console.log("GET All Tarefas");
};

exports.add = async (req, res) => {
  try {
    const createdTodo = await TodoService.addTodo(req.body);
    res.status(201).json(createdTodo);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
  console.log(`OK ADD com title ${req.body.title}`);
};

//tarefa 02
exports.update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;
  const todo = await TodoService.updateTodo(id, data);

  try {
    if (!todo){
      return res.status(404).json("There are no todos published yet!");
    }
    res.json(todo);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
  console.log(`OK UPDATE com o Title ${id}`);
};

//tarefa 03
exports.delete = async (req, res) => {
  const id = req.params.id;
  const todo = await TodoService.deleteTodo(id);
  try {
    if (!todo){
      return res.status(404).json("There are no todos published yet!");
    }
    res.json(todo);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
  console.log(`Ok DELETE do Title ${id}`);

};
