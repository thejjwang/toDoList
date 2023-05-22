let button = document.getElementById('button');
let input = document.getElementById('input');
let ul = document.getElementById('ul');
let li = document.getElementById('container');
newArr = []


input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    myFunction();
    renderTasks();
    input.value = "";
  }
});
function myFunction(){
    newArr.push(input.value);
    console.log(newArr)
}
function renderTasks(){
    ul.innerHTML = "";
    for (let i = 0; i < newArr.length; i++){
        let newLi = document.createElement('li');
        let newButton = document.createElement('button')
        newButton.addEventListener('click', deleteItem)
        newButton.textContent = "delete";
        newLi.textContent = newArr[i];
        newLi.addEventListener('click', deleteItem)
        ul.appendChild(newLi);
        newLi.appendChild(newButton);
        
    }
    
}
function changeAppearance(){
    this.style.color = 'blue';   
}
function deleteItem(){
    let itemText = this.textContent;
    let index = newArr.indexOf(itemText);
    if (index > -1) {
        newArr.splice(index, 1);
    }
    this.remove()
}

