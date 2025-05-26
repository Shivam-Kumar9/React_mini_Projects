//modal.js
import { render } from "../index.js"

export function addTaskModal(add_task,close,dialog,form,input_task,task_checkbox){
   
    let tasks = JSON.parse(localStorage.getItem('tasks')) || []

 form.addEventListener("submit" ,(e)=>{
   e.preventDefault()
  const  task = input_task.value.trim()
  const  status  = task_checkbox.checked
  const  id  = Date.now() 

   let data = {
    task, status,id
   }
   tasks.push(data)
    localStorage.setItem( "tasks" ,JSON.stringify(tasks) )
   console.log(tasks)
   form.reset()
   render(tasks)
})



 add_task.onclick =()=>    dialog.showModal()
 close.onclick = () => dialog.close() 
}