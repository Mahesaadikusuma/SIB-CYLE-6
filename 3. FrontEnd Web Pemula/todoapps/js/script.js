document.addEventListener("DOMContentLoaded", function () {
  const todos = [];
  const RENDER_EVENT = "render-todo";

  const submitForm = document.getElementById("form");
  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    addTodo();
  });

  function addTodo() {
    console.log("add todo");

    const textTodo = document.getElementById("title").value;
    const timestamp = document.getElementById("date").value;

    console.log(textTodo, timestamp);
    const generatedID = generateId(); // ini function generate id
    console.log(generatedID);

    const todoObject = generateTodoObject(
      generatedID,
      textTodo,
      timestamp,
      false
    );

    todos.push(todoObject);

    //   ini custom event
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  // generate ID pada addTodo
  function generateId() {
    return +new Date();
    //  todos.length + 1
  }

  // Fungsi generateTodoObject() berfungsi untuk membuat object baru dari data yang sudah disediakan dari inputan (parameter function), diantaranya id, nama todo (task), waktu (timestamp), dan isCompleted (penanda todo apakah sudah selesai atau belum).
  function generateTodoObject(id, task, timestamp, isCompleted) {
    return {
      id,
      task,
      timestamp,
      isCompleted,
    };
  }

  //   buat todo list jika sudah di kejerjakan
  function makeTodo(todoObject) {
    const textTitle = document.createElement("h2");
    textTitle.innerText = todoObject.task;

    const textTimestamp = document.createElement("p");
    textTimestamp.innerText = todoObject.timestamp;

    const textContainer = document.createElement("div");
    textContainer.classList.add("inner");
    textContainer.append(textTitle, textTimestamp);

    const container = document.createElement("div");
    container.classList.add("item", "shadow");
    container.append(textContainer);
    container.setAttribute("id", `todo-${todoObject.id}`);

    // ini untuk ketika todo complete
    if (todoObject.isCompleted) {
      const undoButton = document.createElement("button");
      undoButton.classList.add("undo-button");
      undoButton.addEventListener("click", function () {
        undoTaskFromCompleted(todoObject.id);
      });

      const trashButton = document.createElement("button");
      trashButton.classList.add("trash-button");
      trashButton.addEventListener("click", function () {
        removeTaskFromCompleted(todoObject.id);
      });
      container.append(undoButton, trashButton);
    } else {
      console.log("ini check button");
      const checkButton = document.createElement("button");
      checkButton.classList.add("check-button");

      checkButton.addEventListener("click", function () {
        addTaskToCompleted(todoObject.id);
      });

      container.append(checkButton);
    }

    return container;
  }

  function addTaskToCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = true;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function findTodo(todoId) {
    for (const todoItem of todos) {
      if (todoItem.id === todoId) {
        return todoItem;
      }
    }
    return null;
  }

  function removeTaskFromCompleted(todoId) {
    const todoTarget = findTodoIndex(todoId);

    if (todoTarget === -1) return;

    todos.splice(todoTarget, 1);
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function undoTaskFromCompleted(todoId) {
    const todoTarget = findTodo(todoId);

    if (todoTarget == null) return;

    todoTarget.isCompleted = false;
    document.dispatchEvent(new Event(RENDER_EVENT));
  }

  function findTodoIndex(todoId) {
    for (const index in todos) {
      if (todos[index].id === todoId) {
        return index;
      }
    }

    return -1;
  }

  //   ini untuk memanggil event render todo yang berbasis object
  document.addEventListener(RENDER_EVENT, function () {
    console.log(todos);

    const uncompletedTODOList = document.getElementById("todos");
    uncompletedTODOList.innerHTML = "ss";

    const completedTODOList = document.getElementById("completed-todos");
    completedTODOList.innerHTML = "";

    for (const todoItem of todos) {
      const todoElement = makeTodo(todoItem);
      if (!todoItem.isCompleted) {
        uncompletedTODOList.append(todoElement);
      } else {
        completedTODOList.append(todoElement);
      }
    }
  });
});
