import { useState } from 'react'
import TaskList from './components/task-list/TaskList'
import AddTask from './components/add-task/AddTask'

interface Task {
  id: number;
  name: string;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (taskName: string) => {
    setTasks([...tasks, {id: tasks.length + 1, name: taskName}]);
  };

  return (
    <div className='app-container'>{/*pode add estilos ou classes quando necessário*/}
      <h1>Lista de Tarefas</h1>
      <AddTask onAddTask={addTask}/>
      <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;