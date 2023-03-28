const input = document.querySelector("input");
const addBtn = document.querySelector(".btn-add");
const ul = document.querySelector("ul");
const empty = document.querySelector(".empty");

const historyBtn = document.querySelector(".btn-history");
const historyModal = document.querySelector("#history-modal");
const historyList = document.querySelector("#history-list");
const closeBtn = document.querySelector("#close-btn");

let history = [];


addBtn.addEventListener("click", (e)=>{

e.preventDefault();

const text = input.value;

if (text !== ""){

  const li = document.createElement("li");
  const p = document.createElement("p");

  p.textContent = text;

  li.appendChild(p);
  ul.appendChild(li);
  li.appendChild(addDeleteBtn());

  input.value = "";
  empty.style.display = "none";

  history.push(text); //agregar tarea al historial

}

}); 

function addDeleteBtn () {

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "X";
  deleteBtn.className = "btn-delete";

  deleteBtn.addEventListener("click", (e)=>{
    
    const item = e.target.parentElement;

    ul.removeChild(item);

    const items = document.querySelectorAll("li");

    if (items.length === 0) {
      empty.style.display = "block";
    }

  });
  
    return deleteBtn;

} 

historyBtn.addEventListener("click", (e)=>{
  e.preventDefault();

  // limpiar historial anterior
  while (historyList.firstChild) {
    historyList.removeChild(historyList.firstChild);
  }

  // agregar las últimas 5 tareas al historial modal
  for (let i = history.length - 1; i >= Math.max(0, history.length - 5); i--) {
    const li = document.createElement("li");
    const p = document.createElement("p");

    p.textContent = history[i];
    li.appendChild(p);
    historyList.appendChild(li);

  }

  historyModal.style.display = "block"; // mostrar modal
  closeBtn.style.display = "block";

});
  
closeBtn.addEventListener("click", ()=>{
  historyModal.style.display = "none"; // ocultar modal
  closeBtn.style.display = "none";
  
});