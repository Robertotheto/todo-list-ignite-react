import styles from './Task.module.css';

export function Task(){
    return(
        <div className={styles.task}>
            <div>
                <strong className={styles.taskCreated}>Tarefa criadas</strong>
                <span>0</span>
            </div>
            <div>
                <strong className={styles.taskCompleted}>Concluídas</strong>
                <span>0</span>
            </div>
        </div>
    )
}