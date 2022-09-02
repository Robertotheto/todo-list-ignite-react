import styles from './Task.module.css';

interface Tasks {
    id: number;
    content: string;
    checked: boolean;
}
interface TaskProps{
    created: number;
    completed: Tasks[];
}
export function Task({created,completed}: TaskProps){

    return(
        <div className={styles.task}>
            <div>
                <strong className={styles.taskCreated}>Tarefa criadas</strong>
                <span>{created}</span>
            </div>
            <div>
                <strong className={styles.taskCompleted}>Concluídas</strong>
                <span>{completed.length} de {created}</span>
            </div>
        </div>
    )
}