import clipBoard from "../../assets/Clipboard.svg";
import styles from './Clipboard.module.css';

export function Clipboard(){
    return(
        <div className={styles.list}>
            <div>
                <img src={clipBoard} alt="ClipBoard"/>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <p>Crie tarefas e organize seus itens a fazer</p>
            </div>
        </div>
    )
}