import { useState, useEffect } from 'react';
import api from './api/index.jsx';
import { Container, ToDoList, Input, Button, ListItem, Trash, Check } from './styles.js';

function App() {
  const [list, setList] = useState([]);
  const [inputTask, setInputTask] = useState('');

  // Pegando todas tarefas da API
  async function getAllTasks() {
    const { data } = await api.get('/todos')
    setList(data)
  }

  // Pegando o valor do Input
  function targetInput(event) {
    setInputTask(event.target.value);
  }

  // Postando a tarefa na nossa API e pegando todas tarefas novas
  async function targetTask() {
    if (inputTask) {
      await api.post('/todos', { task: inputTask })
      getAllTasks();
      setInputTask(''); // Limpa o campo de entrada  
    }
  }

  // Atualizando Tarefa
  async function finishedTask(id, finished) {
    await api.patch(`/todos/${id}`, {
      finished: !finished
    })

    getAllTasks()
  }

  // Deletando Tarefa, e atualizando tarefas restantes
  async function deletItem(id) {
    await api.delete(`/todos/${id}`)
    getAllTasks();
  }

  useEffect(() => {
    getAllTasks()
  }, [])

  return (
    <Container>
      <div className='title'>
        <h1>Lista de Tarefas</h1>
      </div>

      <ToDoList>
        <div className='content'>
          <Input
            onChange={targetInput}
            value={inputTask}
            placeholder="O que tenho para fazer..."
          />
          <Button onClick={targetTask}>Adicionar</Button>
        </div>

        <ul>
          {list.length > 0 ? (
            list.map((item) => (
              <ListItem isFinished={item.finished} key={item._id}>
                <Check onClick={() => finishedTask(item._id, item.finished)} />
                <li>{item.task}</li>
                <Trash onClick={() => deletItem(item._id)} />
              </ListItem>
            ))
          ) : (
            <h3>Não há itens na lista</h3>
          )}
        </ul>
      </ToDoList>
    </Container>
  );
}

export default App;