// Create a single todoContentBox outside of the updateTodoContent function
let todoContentBox = document.createElement("div");
todoContentBox.classList.add("todo_content");
todoContentBox.style.visibility = "visible";
todoContainer.appendChild(todoContentBox);

// SUBMITING TOTO LIST
function submitTodo() {
  // Clear the todoContentBox before populating it
  todoContentBox.innerHTML = "";

  for (let i = 0; i < inputToArr.length; i++) {
    let inputVal = inputToArr[i].value.trim();

    if (i === 0 && inputVal === "") {
      alert("input title is must");
      close_modal_popup();
      return; // Exit the function early
    }

    if (inputVal !== "") {
      itemsBox.push(inputToArr[i].value);
      inputToArr[i].value = "";
    }
  }

  // Populate the todoContentBox with the input values
  for (const selectTodoInput of itemsBox) {
    let todoTasks = document.createElement("p");
    let trashIcon = document.createElement("i");
    trashIcon.innerHTML = '<i class="fa fa-trash"></i>';
    todoTasks.textContent = selectTodoInput;
    todoContentBox.append(todoTasks, trashIcon);
  }

  // Clear the itemsBox array for the next submission
  itemsBox = [];

  // CLOSE MODALS INPUT SUBMISSIONS
  close_modal_popup();
}
