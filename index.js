let button = document.getElementById('button');
let input = document.getElementById('input');
let ul = document.getElementById('ul');
newArr = []


input.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    myFunction();
  }
});
function myFunction(){
    console.log("hello world");
}