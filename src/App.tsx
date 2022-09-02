import {ChangeEvent, FormEvent, useState} from "react";
import {Header} from "./components/Header";
import {Task} from "./components/Task";
import {List} from "./components/List";
import {PlusCircle} from "phosphor-react";
import styles from './App.module.css'
import './global.css'
import {Clipboard} from "./components/Clipboard";

interface Tasks {
    id: number;
    content: string;
    checked: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Tasks[]>([]);
    const [newTaskText, setNewTaskText] = useState('');

    function handleCheckedTask(id: number){
        const taskIndex = tasks.findIndex(task => task.id === id);
        let newTaskArray = [...tasks];

        newTaskArray[taskIndex].checked = !newTaskArray[taskIndex].checked;

        setTasks(newTaskArray);
    }

    function handleCreateNewTask(event: FormEvent){
        event.preventDefault();
        setTasks([...tasks, {
            id: new Date().getTime(),
            content: newTaskText,
            checked: false
        }]);
        setNewTaskText('')
    }
    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setNewTaskText(event.target.value)
    }
    function deleteTask(id: number){
        const tasksWithoutDeleteOne = tasks.filter(task => {
            return task.id !== id
        })
        setTasks(tasksWithoutDeleteOne);
    }
    const created = tasks.length;
    const completed = tasks.filter(task => {
        return task.checked
    })
  return (
      <div>
        <Header />
          <section className={styles.container}>
              <aside className={styles.wrapper}>
                  <form onSubmit={handleCreateNewTask} className={styles.newTask}>
                      <input
                          value={newTaskText}
                          type="text"
                          placeholder="Adicione uma nova tarefa"
                          onChange={handleNewTaskChange}
                      />
                      <button>
                          Criar
                          <PlusCircle size={16} />
                      </button>
                  </form>
              </aside>
              <aside className={styles.content}>
                  <Task
                      created={created}
                      completed={completed}
                  />
                  {
                      tasks.length ? (
                          tasks.map(task => {
                              return(
                                  <List
                                      id={task.id}
                                      key={task.id}
                                      task={task.content}
                                      checked={task.checked}
                                      onToggleChecked={handleCheckedTask}
                                      onDeleteTask={deleteTask}
                                  />
                              )
                          })
                      ):(
                          <Clipboard />
                      )
                  }
              </aside>
          </section>
      </div>
  )
}

export default App
