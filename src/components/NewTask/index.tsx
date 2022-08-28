import styles from './NewTask.module.css';
import {PlusCircle} from "phosphor-react";

export function NewTask(){
    return(
        <div className={styles.newTask}>
            <input
                type="text"
                placeholder="Adicione uma nova tarefa"
            />
            <button>
                Criar
                <PlusCircle size={16} />
            </button>
        </div>
    )
}