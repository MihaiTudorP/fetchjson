import axios from "axios";

const sourceUrl = "http://jsonplaceholder.typicode.com/todos/4";

axios.get(sourceUrl).then(response => {
  const todo = response.data;
  const id = todo.id;
  const title = todo.title;
  const finished = todo.completed;

  console.log(`
        The Todo with ID: ${id}
        Has the title: ${title}
        Is it finished? ${finished ? "yes" : "no"}
    `);
});
