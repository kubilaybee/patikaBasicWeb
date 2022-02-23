const TEXTDOM = document.getElementById("task");
const ULDOM = document.querySelector("ul#list");

let mainList = new Array();
if (localStorage.getItem("todolist") == null) {
  localStorage.setItem("todolist", JSON.stringify(mainList));
} else {
  mainList = JSON.parse(localStorage.getItem("todolist"));
  showList();
}

//Button on click
function newElement() {
  if (isInvalid(TEXTDOM.value)) {
    addToList(TEXTDOM.value);
  } else {
    $(document).ready(function () {
      $("#attentionToast").toast("show");
    });
    TEXTDOM.value = "";
  }
}
function addToList(taskName) {
  //Add to list
  mainList.push(String(taskName));
  console.log(mainList);
  //Save array to localstorage
  localStorage.setItem("todolist", JSON.stringify(mainList));
  //Show task list
  showList();
  // toast
  $(document).ready(function () {
    $("#successToast").toast("show");
  });
  //Clear the textbox
  TEXTDOM.value = "";
}
function deleteItem(index) {
  mainList.splice(index, 1);
  localStorage.setItem("todolist", JSON.stringify(mainList));
  showList();
  // toast
  $(document).ready(function () {
    $("#deleteItemToast").toast("show");
  });
}
function showList() {
  ULDOM.innerHTML = "";
  mainList.forEach((task, key) => {
    let liDOM = document.createElement("li");
    liDOM.addEventListener("click", taskDone);
    liDOM.innerHTML = `${task}<span id="closeButton" class="deleteButton" onclick=deleteItem(${key})><i class="fas fa-trash"></i></span>`;

    ULDOM.append(liDOM);
  });
}
function isInvalid(task) {
  let res = task.trim() ? true : false;
  return res;
}
function taskDone() {
  //Change with boostrap succes style
  this.classList.toggle("bg-success");
}
