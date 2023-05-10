import AddTask from './AddTask.js';
import TaskList from './TaskList.js';
import { TasksProvider } from './TasksContext.js';
import './styles.css';

export default function TaskApp() {

  
  return (
  

     <TasksProvider>
        <timeSet/>
      <h1>today's plan</h1>
       <h3>be stronger than your excuses</h3>

      <AddTask />
      <TaskList/>
       </TasksProvider>
  );
  }
