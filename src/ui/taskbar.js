export function createTaskbar() {
  const taskbar = document.createElement("footer");

  taskbar.className = "taskbar";

  taskbar.innerHTML = `
    <button class="start-button" id="startButton">
      ⊞
    </button>

    <div class="taskbar-center">
      <span>DuoMarst OS</span>
    </div>

    <div class="system-tray">
      <span id="clock">00:00</span>
    </div>
  `;

  startClock(taskbar);

  return taskbar;
}

function startClock(taskbar) {
  const clock = taskbar.querySelector("#clock");

  function updateClock() {
    const now = new Date();

    clock.textContent = now.toLocaleTimeString("ko-KR", {
      hour: "2-digit",
      minute: "2-digit"
    });
  }

  updateClock();
  setInterval(updateClock, 1000);
}
