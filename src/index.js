document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById('create-task-form')
  let textField = document.getElementById('new-task-description')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildNewTasks(textField.value)
    form.reset()
  });
});

function buildNewTasks(task) {
  if (Boolean(task)) {
    let newTask = document.createElement('li')
    newTask.innerText = `${task} `
    document.getElementById('tasks').appendChild(newTask)

    let deleteBtn = document.createElement('button')
    deleteBtn.addEventListener('click', handleDelete)
    deleteBtn.innerHTML = 'Delete'
    deleteBtn.style.cursor = 'Pointer'
    deleteBtn.style.background='#DC143C'
    newTask.append(deleteBtn)
  }
}

function handleDelete(e) {
  e.target.parentNode.remove()
}