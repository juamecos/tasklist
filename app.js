// Define UI variables //

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners //

loadEventListeners();

// Load all event listeners function//

function loadEventListeners() {
  // Add task event
  form.addEventListener('submit', addTask);

  // Remove task event
  taskList.addEventListener('click', removeTask); 

  // Clear tasks event
  clearBtn.addEventListener('click', clearTasks);

  // Filter tasks event listener
  filter.addEventListener('keyup', filterTasks);
}

// Add Task

function addTask(e) {
  if(taskInput.value === ''){
    alert('Add a task');
  }

  if(taskInput.value !== ''){
  // Add li element
  const li = document.createElement('li');
  // Add class
  li.className = 'collection-item';
  // Create text node and append it to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // Create new link element
  const link = document.createElement('a');
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon HTML
  link.innerHTML = '<i class= "fa fa-remove" ></i>';
  // Append link to li
  li.appendChild(link);

  // Append li to ul

  taskList.appendChild(li);
  }

  //Clear the input
  taskInput.value = '';

  e.preventDefault();
}

// Remove task 

function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('Are you sure')){
    e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Tasks

function clearTasks(e){
  // My Funcion que funciona pero en el video aparece una más sencilla y otra mas rápida
  // if(e.target.className='.clear-tasks'){
  //   if(confirm('Are you sure to clear all tasks')){
  //     taskList.remove();
  //   }
  // }

  // mas corto código
  // taskList.innerHTML = '';

  while(taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

// Filter Tasks 
function filterTasks(e){
  const text = e.target.value.toLowerCase();
  document.querySelectorAll('.collection-item').forEach
  (function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else {
      task.style.display = 'none';
    }
  }
    

  );
}