export function createStartMenu() {
  const menu = document.createElement("div");

  menu.className = "start-menu";

  menu.innerHTML = `
    <div class="start-header">
      <strong>DuoMarst OS</strong>
    </div>

    <div class="start-apps">
      <button class="app-item">
        🖥️
        <span>Terminal</span>
      </button>

      <button class="app-item">
        📁
        <span>Files</span>
      </button>

      <button class="app-item">
        📝
        <span>Notes</span>
      </button>

      <button class="app-item">
        ⚙️
        <span>Settings</span>
      </button>
    </div>
  `;

  return menu;
}
