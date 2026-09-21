export function createDesktop() {
  const desktop = document.createElement("main");

  desktop.className = "desktop";

  desktop.innerHTML = `
    <div class="desktop-content">
      <h1>DuoMarst OS</h1>
      <p>System initialized.</p>
    </div>
  `;

  return desktop;
}
