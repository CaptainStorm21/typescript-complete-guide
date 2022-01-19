import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}


axios.get(url).then(response => {
  // console.log(response.data)

  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  // console.log(`
  //     The todo with ID : ${id};
  //     Has a Title: ${title};
  //     Has it been finished? ${completed};
  // `)

  logToDo (id, title, completed)

});


const logToDo = (id: number, title: string, completed: boolean) => {
  console.log(`
      The todo with ID : ${id};
      Has a Title: ${title};
      Has it been finished? ${completed};
  `);
};