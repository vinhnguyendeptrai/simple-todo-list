var taskService = new TaskService();

function renderTaskList() {
  taskService
    .getListTask()
    .then(function (res) {
      var dsTask = res.data;
      renderList(dsTask);
    })
    .catch(function (err) {
      console.log(err);
    });
}
function renderList(arr) {
  var todoID = document.getElementById("todo");
  var completedID = document.getElementById("completed");
  todoID.innerHTML = "";
  completedID.innerHTML = "";
  arr.forEach(function (task) {
    if (task.status === "Doing") {
      todoID.innerHTML += `
      <li>
      <span>${task.textTodo}</span>
      <div class="buttons">
        <button class="remove">
          <i class="fa fa-trash-alt" onclick='deleleTask(${task.id})'></i>
        </button>
        <button class="complete">
          <i class="far fa-check-circle" onclick='changeStt(${task.id})'></i>
          <i class="fas fa-check-circle" onclick='changeStt(${task.id})'></i>
        </button>
      </div>
    </li>
      `;
    } else {
      completedID.innerHTML += `
      <li>
      <span>${task.textTodo}</span>
      <div class="buttons">
        <button class="remove">
          <i class="fa fa-trash-alt" onclick='deleleTask(${task.id})'></i>
        </button>
        <button class="complete">
          <i class="far fa-check-circle" onclick='changeStt(${task.id})'></i>
          <i class="fas fa-check-circle" onclick='changeStt(${task.id})'></i>
        </button>
      </div>
    </li>
      `;
    }
  });
}
renderTaskList();
function deleleTask(id) {
  taskService
    .removeTask(id)
    .then(function (res) {
      res.status === 200
        ? alert("Đã xóa thành công")
        : alert("Hành động thất bại");
      location.reload();
    })
    .catch(function (err) {
      console.log(err);
    });
}
function getDetail(id) {
  return taskService
    .getTaskById(id)
    .then(function (res) {
      return res.data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
async function changeStt(id) {
  var task = await getDetail(id);
  if (task.status === "Doing") {
    task.status = "Done";
  } else {
    task.status = "Doing";
  }
  taskService
    .updateTask(id, task)
    .then(function (res) {
      res.status === 200
        ? alert("Thay đổi thành công")
        : alert("Hành động thất bại");
      location.reload();
    })
    .catch(function (err) {
      console.log(err);
    });
}
document.getElementById("addItem").addEventListener("click", function () {
  var textTodo = document.getElementById("newTask").value;
  var status = "Doing";
  var newTask = new Task({
    textTodo,
    status,
  });
  taskService
    .addTask(newTask)
    .then(function (res) {
      res.status === 201
        ? alert("Thêm mới thành công")
        : alert("Hành động thất bại");
        textTodo="";
      location.reload();
    })
    .catch(function (err) {
      console.log(err);
    });
});
