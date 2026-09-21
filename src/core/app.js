import { createDesktop } from "../ui/desktop.js";
import { createTaskbar } from "../ui/taskbar.js";

const app = document.querySelector("#app");

app.innerHTML = "";

const desktop = createDesktop();
const taskbar = createTaskbar();

desktop.appendChild(taskbar);
app.appendChild(desktop);

console.log("DuoMarst OS initialized.");
