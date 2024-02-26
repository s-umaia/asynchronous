fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response =>{
        if (!response.ok) {
        throw new Error(response.statusText);
        }
        return response.json();
    })
    .then(data => {
        
     const fetchedTodos = document.querySelector('.fetched-data');

        data.forEach(todo => {
        const todoItem = document.createElement('div');
        todoItem.classList.add('todo-item');
        todoItem.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Completed: ${todo.completed ? 'Yes' : 'No'}</p>`;
        fetchedTodos.appendChild(todoItem);
        });
    })
    .catch(error => {
        console.log("An error occurred: Oops!!!!!", error);
    });

const clock = document.querySelector('#clock');
setInterval(() => {
    const now = new Date();
    const time = now.toLocaleTimeString();
    clock.textContent = time;
}, 1000);