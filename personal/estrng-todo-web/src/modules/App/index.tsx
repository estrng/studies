import { useEffect, useState } from 'react';
import Header from '../../components/Header'
import "../../styles/global.css"
import { v4 as uuidv4 } from 'uuid';
import styles from "./styles.module.css";
import { VscAdd } from "react-icons/vsc";
import { FaTrash } from 'react-icons/fa';
import { FiCircle } from 'react-icons/fi';
import { BsCheck2Circle } from 'react-icons/bs';

import { ITodo, Data, createTodo } from './Data';

export function App() {
  const [todos, setTodos] = useState<ITodo[]>([])
  const [value, setValue] = useState('');
  const { 
    wrapper,
    bodyHeader,
    inputSection,
    buttonContentContaier,
    input,
    container,
    icon,
    checked,
    completed
  } = styles

  useEffect(() => {(() => setTodos(Data.getInstance().getTodos()))()}, [])

  const handleAddTodo = (todo: ITodo) => {
    const todosInserteds = Data.getInstance().addTodo({todos, newTodo: todo})
    setTodos(todosInserteds)
  }

  const handleCreateNewTodo = () => {
    if (value.length > 3) {
      handleAddTodo({
        id: uuidv4(),
        title: value,
        completed: false
      })
      setValue('')
    }
  }
  
  const handleDelete = (id: string | number) => {
    setTodos(prevTodo => prevTodo.filter(todo => todo.id !== id))
  }

  const handleComplete = (id: string | number) => {
    const todosToupdate = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(todosToupdate)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setValue(e.target.value);
  }

  return (
    <div className="App">
      <Header/>
      <div className={wrapper}>
        <main>
          <section className={inputSection}>
            <input 
              className={input}
              type="text"
              id="fname"
              name="fname"
              placeholder="Digite o nome da tarefa"
              value={value}
              onChange={handleChange}
            />
            <button onClick={handleCreateNewTodo}>
              <div className={buttonContentContaier}>
                Bota aí!   <VscAdd size={15} color="white"/>
              </div>
            </button >
          </section>
          <section>
              <header className={bodyHeader}>
                <h4>Todas criadas {todos.length}</h4>
                <h4>Concluidas {todos.filter(todo => todo.completed).length}</h4>
              </header>
              <main>
                {
                  todos.map(todo => {
                    return <div key={todo.id} className={container}>
                      {
                        todo.completed 
                          ? <BsCheck2Circle  onClick={()=>handleComplete(todo.id)} className={checked} /> 
                          : <FiCircle className={checked} onClick={()=>handleComplete(todo.id)} />
                      }  
                      <span className={todo.completed ? completed : ''}>{todo.title}</span>
                      <FaTrash onClick={() => handleDelete(todo.id)} className={icon} />
                  </div>
                  })
                }
              </main>    
          </section>
        </main>
      </div>
    </div>
  )
}


