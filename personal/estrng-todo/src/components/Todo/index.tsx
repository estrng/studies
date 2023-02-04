import { FaTrash,  } from "react-icons/fa";
import { FiCircle  } from "react-icons/fi";
import { BsCheck2Circle  } from "react-icons/bs";
import { ITodo } from "../../modules/App/data";
import styles from "./styles.module.css";

interface TodoProps {
  todo: ITodo;
  handleDelete: (id: any) => void;
  handleComplete: (id: string | number) => void;
}

export default function Todo({ todo, handleDelete, handleComplete }: TodoProps): JSX.Element {
  const { title, completed } = todo;
  const { container, iconCotainer, icon, checked } = styles;

  const handleCompleteTodo = () => {
    handleComplete(todo.id);
  }

  return (
    <div className={container}>
      <button className={iconCotainer} onClick={handleCompleteTodo} >
        {completed ? <BsCheck2Circle  className={checked} /> : <FiCircle className={checked}  />}  
      </button> 
      <span>{title}</span>
      <FaTrash onClick={() => handleDelete(todo.id)} className={icon} />
    </div>
  )
}
