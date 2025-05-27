//index.js
import { addTaskModal } from "./js/modal.js";
import { debouncing } from "./js/debounc.js";
const searchInput = document.querySelector(".searchInp");
const add_task = document.querySelector(".add_task");

const dialog = document.querySelector("dialog");
const close = document.querySelector(".dialogClose");

const form = document.querySelector("#form");
const input_task = document.getElementById("input_task");
const task_checkbox = document.querySelector(".checkbox-wrapper-10>input");

const display = document.querySelector("section");

const topbtn = document.querySelector(".top");
 

debouncing(searchInput,render)
addTaskModal(add_task, close, dialog, form, input_task, task_checkbox);
throttling(topbtn)

export function render(data) {
  display.innerHTML = "";
  const tasks_data = data || JSON.parse(localStorage.getItem("tasks"));

  let node = tasks_data.map((ele, i) => {
    const card = document.createElement("div");
    card.classList.add("card");
    const title = document.createElement("h3");
    title.innerText = ele.task;
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

    const wrapper = document.createElement("div");
    const span = document.createElement("span");
    span.innerText = ele.status ? "completed : " : "InComplete : ";
    wrapper.append(span, checkbox);

    const remove = document.createElement("button");
    remove.innerText = "Delete";
    remove.addEventListener("click", () => {
      let updatedList = tasks_data.filter((task) => {
        return task.id !== ele.id
      });

     localStorage.setItem("tasks", JSON.stringify(updatedList));
      render(updatedList);
    });


    card.append(title, wrapper, remove);
    return card;

  });
 
  display.append(...node);
  
}
render();

