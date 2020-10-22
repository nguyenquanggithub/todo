const list = document.querySelector('.list__ul');
const listToDo = [
  "Go to bed",
  "Go to school",
  "Eat dinner with marry"
]

const content = listToDo.map(item => {
  return '<li>' + item + '</li>';
})

list.innerHTML = content.join("");
