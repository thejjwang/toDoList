let button = document.getElementById('button');
let input = document.getElementById('input');
let ul = document.getElementById('ul');
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
        ul.innerHTML += `<li>${newArr[i]}</li>`
        
    }
}

