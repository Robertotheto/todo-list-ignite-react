import {CheckCircle, Circle, Trash} from "phosphor-react";
import styles from './List.module.css';

interface ListProps{
    task: string;
    id: number;
    checked: boolean;
    onToggleChecked: (id: number) => void;
    onDeleteTask: (id: number) => void;
}

export function List({task,id,checked,onDeleteTask,onToggleChecked}: ListProps){

    function handleToggleChecked(){
        onToggleChecked(id)
    }

    function handleDeleteTask(){
        onDeleteTask(id);
    }

    return(
                <div className={styles.listContent}>
                    <button onClick={handleToggleChecked}>
                        {checked ? <CheckCircle weight="fill" size={24} className={styles.circleChecked}/> : <Circle size={24} className={styles.circle}/>}
                    </button>
                    <p className={checked ? styles.descriptionAllowed :styles.description}>{task}</p>
                    <button onClick={handleDeleteTask}>
                        <Trash size={24} className={styles.trash} />
                    </button>
                </div>
    )
}