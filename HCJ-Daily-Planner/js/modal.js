//modal.js
import { render } from "../index.js"

export function addTaskModal(add_task,close,dialog,form,input_task,task_checkbox,category){
   
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

 let  tag 
  
    category.addEventListener("change",(e)=>{
   tag =  e.target.value; 
   console.log(e)
   console.log( e.target.value);
})



 form.addEventListener("submit" ,(e)=>{
   e.preventDefault()
  const  task = input_task.value.trim()
  const  status  = task_checkbox.checked
  const  id  = Date.now() 
  
  if(task.length<=0  || tag == undefined  ){
   alert('Attention : filling Task & category necessary ')
   return;
  }
   
   let data = {
    task,status,id,tag
   }
  console.log(data)
   tasks.push(data)
    localStorage.setItem( "tasks" ,JSON.stringify(tasks) )
   console.log(tasks)
   form.reset()
   render(tasks)
   return
})



 add_task.onclick =()=>    dialog.showModal()
 close.onclick = () => dialog.close() 
}