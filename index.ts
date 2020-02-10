import axios from 'axios';

const sourceUrl = 'http://jsonplaceholder.typicode.com/todos/4';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(sourceUrl).then(response => {
  const todo = response.data as Todo;
  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
        The Todo with ID: ${id}
        Has the title: ${title}
        Is it finished? ${completed ? 'yes' : 'no'}
    `);
};
