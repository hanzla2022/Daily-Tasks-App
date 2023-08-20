//
// FUCNTION TO CONVERT NODELIST TO ARRAY
function convertNodeToArr(nodelist) {
  return Array.from(nodelist);
}
//////////// VARIBALES SELECTIONS
// ASSIGINNG INPUT TO VARIABLES
let input = document.querySelectorAll("input");
let inputToArr = convertNodeToArr(input);
// // TODO CONTENT CONTAINER
let todoContainer = document.getElementById("todo_content_container");
// //////////////  Creating a single todoContentBox outside of the function  //////////////
// let todoContentBox = document.createElement("div");
// todoContentBox.classList.add("todo_content");
// todoContentBox.style.visibility = "visible";
// todoContainer.appendChild(todoContentBox);
////////////// CONTENBOX END //////////////
// let convertInputValToArr = Array.from(input);
// GETTTING MODEL CONTAINER DOM
let modalContainer = document.getElementById("model_container");

// ADDING TASK FUCNTION

function addTask() {
  modalContainer.classList.add("showModel");
}

// CLOSING POPUP MODAL FUCNTION
function close_modal_popup() {
  modalContainer.classList.remove("showModel");
}

//////////////////// TODO ITEMS EMPTY ARRAY

let itemsBox = [];

//////////////////// ADDING CONTENT TO THE DOM FROM AN ARRAY

function updateTodoContent() {}

//////////////////// DELEET TODO TASKS

// function trashTodo() {
//   if (itemsBox !== []) {
//     alert("not empty");
//     itemsBox = [];
//   }
// }

// SUBMITING TOTO LIST
function submitTodo() {
  // CLEARING CONTENTBOX INITIALLY
  // todoContentBox.innerHTML = "";
  for (let i = 0; i < inputToArr.length; i++) {
    let inputVal = inputToArr[i].value.trim();
    // APPLYING FUNCTIONALITY AT  ''0'' INDEX ITEM
    if (i === 0 && inputVal === "") {
      alert("input title is must");
      close_modal_popup();
      return;
    }
    if (inputVal !== "") {
      itemsBox.push(inputToArr[i].value);
      inputToArr[i].value = "";
    }
  }
  //////////////  Creating a single todoContentBox outside of the function  //////////////
  // innerContent.style.visibility = "visible";
  let todoContentBox = document.createElement("div");
  todoContentBox.classList.add("todo_content");
  todoContentBox.style.visibility = "visible";
  todoContainer.appendChild(todoContentBox);
  // TODO INNER CONTENT BOX
  let innerContent = document.createElement("div");
  innerContent.classList.add("innerContent");
  todoContentBox.appendChild(innerContent);
  // GO THROUGH INPUT VALUES ARRAY
  for (let i = 0; i < itemsBox.length; i++) {
    // SHOW ERROR MESSAGE WHEN THE 2ND INPUT FIELD IS SUBMITTED EMPTY
    if (itemsBox[1] === undefined) {
      let errMessage = "No summary was provided for this task";
      itemsBox.push(errMessage);
      // alert("2nd input is not defined");
    }
    let todoTasks = document.createElement("p");
    todoTasks.style.padding = "5px 0";
    todoTasks.textContent = itemsBox[i];

    // Apply bold font weight to the first element
    if (i === 0) {
      todoTasks.classList.add("title_text");
    }

    innerContent.appendChild(todoTasks);
  }

  // APPENDING TRASH ICON OUTSIDE THE LOOP FOR SINGLE TIME CREATION
  let trashIcon = document.createElement("i");
  trashIcon.addEventListener("click", removeTodoTasks);
  trashIcon.className = "iconStyle";
  trashIcon.innerHTML = '<i class="fa fa-trash"></i>';
  todoContentBox.appendChild(trashIcon);

  // TRASH FUCNTION FOR REMOVING TASK FROM ITEMBOX ARRAY
  function removeTodoTasks() {
    todoContentBox.innerHTML = "";
    todoContentBox.style.display = "none";
  }
  // Clear the itemsBox array for the next submission
  itemsBox = [];
  ////////////////// THIS CODE IS GOING TO USE INFUTURE  //////////////////
  // console.log(itemsBox);
  // CLOSE MODALS INPUT SUBMISSIONS
  close_modal_popup();
}
