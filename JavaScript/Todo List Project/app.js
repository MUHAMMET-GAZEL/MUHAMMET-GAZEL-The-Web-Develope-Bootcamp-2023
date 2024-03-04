
let userChoice = prompt('What would you like to do?');

const todoList = [];

while (userChoice !== 'quite') {

    if (userChoice === 'new') {
        const newTodo = prompt('enter a new todo');
        todoList.push(newTodo);
        console.log(`${newTodo} added to list`);
    } else if (userChoice === 'list') {
        console.log('************');
        for (let i = 0; i < todoList.length; i++) {
            console.log(`${i}: ${todoList[i]}`);
        }
        console.log('************');
    } else if (userChoice === 'delete') {
        let Deleteindex = prompt('enter index of todo to delete');
        todoList.splice(Deleteindex, 1);
    }
    userChoice = prompt('What would you like to do?');

}


