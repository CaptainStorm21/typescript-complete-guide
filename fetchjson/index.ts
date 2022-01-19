import axios from 'axios';

interface Todo {
  id: number;
  titler: string;
  finished: boolean;
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

axios.get(url).then(response => {
  // console.log(response.data)

  const todo = response.data;

  const ID = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  console.log(`
      The todo with ID : ${ID};
      Has a Title: ${title};
      Has it been finished? ${completed};
  `)

});