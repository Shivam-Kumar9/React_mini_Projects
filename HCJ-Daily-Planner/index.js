//index.js
import { addTaskModal } from "./js/modal.js";
import { debouncing } from "./js/debounc.js";
import {throttling} from './js/throttling.js'
const searchInput = document.querySelector(".searchInp");
const add_task = document.querySelector(".add_task");

const dialog = document.querySelector("dialog");
const close = document.querySelector(".dialogClose");

const form = document.querySelector("#form");
const input_task = document.getElementById("input_task");
const task_checkbox = document.querySelector(".checkbox-wrapper-10>input");
const category = document.getElementById("category");

const display = document.querySelector("section");
const topbtn = document.querySelector(".top");
 
const allClear = document.querySelector(".clear");
 
debouncing(searchInput,render)
addTaskModal(add_task, close, dialog, form, input_task, task_checkbox,category);
throttling(topbtn)

export function render(data) {
  display.innerHTML = "";
  const tasks_data = data || JSON.parse(localStorage.getItem("tasks"));

  let node = tasks_data.map((ele, i) => {

    const card = document.createElement("div");
    card.classList.add("card");

    const title = document.createElement("h3");
    title.innerText = ele.task;
    const  title_div =  document.createElement("div");
            title_div.append(title)
            title_div.classList.add('task_div')
    ele.status ? title.classList.add("done") : title.classList.remove("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = ele.status;
    checkbox.addEventListener("change", (e) => {
      
      let changedStatus = tasks_data.map((tick) => {
        if (ele.id === tick.id) {
          return { ...tick, status: !tick.status };
        }
        return tick;
      });
      localStorage.setItem("tasks", JSON.stringify(changedStatus));
      render(changedStatus);
    });

    const checkboxContainer = document.createElement("div");
    const span = document.createElement("span");
          span.innerText = ele.status ? "Closed : " : "Open : ";
          checkboxContainer.append(span, checkbox); 
    
    const  categoryCover = document.createElement("div");
    const  categoryType = document.createElement("span");
           categoryType.innerText = ele.tag
            categoryCover.classList.add('tag_box')

    const  microInfo = document.createElement("div");   
           categoryCover.appendChild(categoryType) 
           microInfo.classList.add('tag_status_div')
           
           const remove = document.createElement("button");
           remove.innerText = "Delete";
           remove.classList.add('remove_btn')
           remove.addEventListener("click", () => {
             let updatedList = tasks_data.filter((task) => {
               return task.id !== ele.id
              });
              
              localStorage.setItem("tasks", JSON.stringify(updatedList));
              render(updatedList);
            });
            
            microInfo.append(checkboxContainer, remove)

     const taskInfoWrapper =  document.createElement('div')
           taskInfoWrapper.classList.add('task_info')
           taskInfoWrapper.append(microInfo,categoryCover)         
  
    card.append(title_div,taskInfoWrapper);
    return card;

  });
 
  display.append(...node);
  
}
 let localstoragetask =JSON.parse(localStorage.getItem('tasks')) 
 if( localstoragetask==null )allClear.classList.toggle('vanish')
   
 allClear.addEventListener('click',()=>{
  //  localStorage.removeItem('tasks')
  localStorage.setItem('tasks',JSON.stringify([]))
   render()
 })





const refinedTasks = [
  { task: 'Email client updates', status: false, id: 1748379244812, tag: 'work' },
  { task: 'Buy groceries for dinner', status: false, id: 1748379269645, tag: 'personal' },
  { task: 'Prepare presentation deck', status: true, id: 1748382136361, tag: 'work' },
  { task: 'Call Mom', status: false, id: 1748382147263, tag: 'personal' },
  { task: 'Review project proposal', status: false, id: 1748382328401, tag: 'work' },
  { task: 'Go for a run', status: true, id: 1748382343797, tag: 'personal' },
  { task: 'Read chapter 3', status: false, id: 1748382359451, tag: 'study' },
  { task: 'Plan weekend trip', status: false, id: 1748382422749, tag: 'personal' },
  { task: 'Fix plumbing leak', status: false, id: 1748382435186, tag: 'home' },
  { task: 'Research new tech trends', status: true, id: 1748382607298, tag: 'study' },
  { task: 'Schedule doctor visit', status: false, id: 1748382612877, tag: 'personal' },
  { task: 'Develop new feature', status: false, id: 1748383599948, tag: 'work' },
  { task: 'Water plants', status: true, id: 1748383615987, tag: 'home' },
  { task: 'Practice coding daily', status: false, id: 1748392299380, tag: 'study' },
  { task: 'Organize files', status: false, id: 1748392300000, tag: 'home' },
  { task: 'Send invoice', status: true, id: 1748392301000, tag: 'work' },
  { task: 'Walk the dog', status: false, id: 1748392302000, tag: 'personal' },
  { task: 'Learn new recipe', status: false, id: 1748392303000, tag: 'personal' },
  { task: 'Update portfolio', status: true, id: 1748392304000, tag: 'work' },
  { task: 'Clean kitchen', status: false, id: 1748392305000, tag: 'home' },
  { task: 'Meditate', status: false, id: 1748392306000, tag: 'personal' },
  { task: 'Bike ride', status: true, id: 1748392307000, tag: 'personal' },
  { task: 'Budget review', status: false, id: 1748392308000, tag: 'personal' },
  { task: 'Write blog post', status: false, id: 1748392309000, tag: 'study' },
  { task: 'Mow lawn', status: true, id: 1748392310000, tag: 'home' },
  { task: 'Workout at gym', status: false, id: 1748392311000, tag: 'personal' },
  { task: 'Client meeting', status: false, id: 1748392312000, tag: 'work' },
  { task: 'Book flight tickets', status: true, id: 1748392313000, tag: 'personal' },
  { task: 'Attend webinar', status: false, id: 1748392314000, tag: 'study' },
  { task: 'Back up photos', status: false, id: 1748392315000, tag: 'home' }
];

//  render(refinedTasks);
 render();
