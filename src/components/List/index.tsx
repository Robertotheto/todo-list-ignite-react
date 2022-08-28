import styles from './List.module.css';
import clipBoard from '../../assets/Clipboard.svg';

export function List(){
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