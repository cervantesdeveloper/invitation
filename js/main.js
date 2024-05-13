import burger from "./modules/burger.js";
import timer from "./modules/timer.js"

const d =  document;

d.addEventListener("DOMContentLoaded", e=>{
    burger(".burger", ".menu")
    timer("#days", "#hours", "#minutes");
})