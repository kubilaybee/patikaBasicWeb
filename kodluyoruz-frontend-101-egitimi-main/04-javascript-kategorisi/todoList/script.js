const textDom = document.getElementById("task");
const ulDom = document.querySelector("ul#list");

let mainList = new Array();
checkLocalStorage();

// check local storage
function checkLocalStorage() {
  // is empty
  if (localStorage.getItem("todolist") == null) {
    localStorage.setItem("todolist", JSON.stringify(mainList));
  } else {
    mainList = JSON.parse(localStorage.getItem("todolist"));
    showList();
  }
}

// btn click
function newElement() {
  if (isInvalid(textDom.value)) {
    addToList(textDom.value);
  } else {
    $(document).ready(function () {
      $("attentionToast").toast("show");
    });
    textDom.value = "";
  }
}
function addToList(taskName) {
  mainList.push(String(taskName));
  console.log(mainList);
  localStorage.setItem("todolist", JSON.stringify(mainList));
  showList();
  $(document).ready(function () {
    $("#successToast").toast("show");
  });
  textDom.value = "";
}
function deleteItem(index) {
  mainList.splice(index, 1);
  localStorage.setItem("todoList", JSON.stringify(mainList));
  showList();
  $(document).ready(function () {
    $("#deleteItemToast").toast("show");
  });
}
function showList() {
  ulDom.innerHTML = "";

  mainList.forEach((task, key) => {
    let liDom = document.createElement("li");
    liDom.addEventListener("click", taskDone);
    liDom.innerHTML = `$(task)<span id = "closeButton" class="deleteButton" onclick=deleteItem($(key))><i class="fas fa-trash"></i></span>`;
    ulDom.append(liDom);
  });
}
function isInvalid(task) {
  let res = task.trim ? true : false;
  return res;
}
function taskDone() {
  this.classList.toggle("bg-success");
}
