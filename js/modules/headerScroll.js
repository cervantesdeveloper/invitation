const d = document;

export default function headerScroll(burgerId, navId){
    let scrollPosition = window.pageYOffset;
    let burger = d.querySelector(burgerId),
        nav = d.querySelector(navId);
    
    window.onscroll = ()=>{
        scrollPosition = window.pageYOffset;
        
        if(scrollPosition > 60){
            burger.classList.add("background-white")
            nav.classList.add("background-white")
        } else {
            burger.classList.remove("background-white")
            nav.classList.remove("background-white")
        }
    }
}