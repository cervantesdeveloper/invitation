import burger from "./modules/burger.js";
import timer from "./modules/timer.js"
import headerScroll from "./modules/headerScroll.js";
import opacityController from "./modules/opacityController.js";

const d =  document;

d.addEventListener("DOMContentLoaded", e=>{
    burger(".burger", ".menu")
    timer("#days", "#hours", "#minutes");
    headerScroll("header .burger", ".header .nav")
    opacityController(".no-opacity")
})