import {Header} from "./components/Header";
import './global.css'
import styles from './App.module.css'
import {NewTask} from "./components/NewTask";
import {Task} from "./components/Task";
import {List} from "./components/List";

function App() {

  return (
      <div>
        <Header />
          <section className={styles.container}>
              <aside className={styles.wrapper}>
                  <NewTask />
              </aside>
              <aside className={styles.content}>
                  <Task />
                  <List />
              </aside>
          </section>
      </div>
  )
}

export default App
