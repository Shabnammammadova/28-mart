let list=document.querySelector("#to do");
let input=document.querySelector("#input");
let form=document.querySelector("#form");
form.addEventListener("submit",(e)=>{
e.preventDefault();
const task_=input.value;
const task=document.createElement("div");
task.innerText=task;
list.appendChild(task);
input.value="";

})
