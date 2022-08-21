

document.querySelector('#button').addEventListener( 'click' , ()=> {

    getCompletedTodos();

})



document.getElementById('checked').addEventListener( 'click' , ()=> {
     let chked = document.querySelectorAll('input[type="checkbox"]')
     chked.forEach(function(checkbox) {
        checkbox.checked = true;
     })
})


document.getElementById('unchecked').addEventListener( 'click' , ()=> {
    let unchked = document.querySelectorAll('input[type="checkbox"]')
    unchked.forEach(function(checkbox) {
       checkbox.checked = false;
    })
})




function getCompletedTodos() {
    let values = []


    checked = document.querySelectorAll('input[type=checkbox]:checked')

    checked.forEach(chk => values.push(chk.value))
     console.log(values)
}

window.addEventListener('DOMContentLoaded', event => {



    div_todos = document.querySelector('#todos')

    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(todos => {

            todos.forEach(todo => {

                div_todos.innerHTML += ` <input type="checkbox" value='${todo.id}' id='${todo.id}' ${todo.completed ? "checked" : " "} /> 
        <label for='${todo.id}'> ${todo.title} </label> <br>`


            });

        })
        .catch(err => console.error(err));


    getCompletedTodos()


})