export interface ITodo {
    id: number | string;
    title: string;
    completed: boolean;
}

export interface createTodo {
    todos: ITodo[];
    newTodo: ITodo;
}

export class Data {
  private static instance: Data;
  private todos: ITodo[] = [
    {
      id: 1,
      title: 'Learn Angular',
      completed: false
    },
    {
      id: 2,
      title: 'Learn TypeScript',
      completed: false
    },
  ];
  
  private constructor() {}

  static getInstance(): Data {
    if (!Data.instance) {
      Data.instance = new Data();
    }
    return Data.instance;
  }

  getTodos(): ITodo[] {
    return this.todos;
  }

  addTodo({todos, newTodo}:createTodo): ITodo[] {
    const updetedTodos =  [newTodo, ...todos]
    return updetedTodos;     
  }

  removeTodo(todo: ITodo): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  saveTodos(todos: ITodo[]): void {
    this.todos = todos;
  }

  updateTodo(todo: ITodo): void {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos[index] = todo;
    }
  }


  retrieveTodoFromLocalStorage(): ITodo[] {
    const todos = JSON.parse(localStorage.getItem('todos')!);
    return todos || [];
  }
}