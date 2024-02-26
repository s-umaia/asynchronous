fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => {
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

            const checkbox = document.createElement('input');
            checkbox.type = "checkbox";
            checkbox.checked = todo.completed;
            checkbox.classList.add('checkbox'); 

            const title = document.createElement('h3');
            title.textContent = todo.title;

            todoItem.appendChild(checkbox);
            todoItem.appendChild(title);

            fetchedTodos.appendChild(todoItem);
        });
    })
    .catch(error => {
        console.log("An error occurred: Oops!!!!!", error);
    });
    
    const clock = document.querySelector('#clock');
    setInterval(() => {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0'); 
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0'); 
        const time = `${hours}:${minutes}:${seconds}`;
        clock.textContent = time;
    }, 1000);