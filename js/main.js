import burger from "./modules/burger.js";
import timer from "./modules/timer.js"
import headerScroll from "./modules/headerScroll.js";

const d =  document;

d.addEventListener("DOMContentLoaded", e=>{
    burger(".burger", ".menu")
    timer("#days", "#hours", "#minutes");
    headerScroll("header .burger", ".header .nav")
})