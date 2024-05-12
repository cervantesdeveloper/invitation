const d =  document;

export default function burger(burger){
    d.addEventListener("click", e=>{
        if(e.target.matches(burger) || e.target.matches(`${burger} *`)){
            d.querySelector(burger).classList.toggle("burger-open");
        }
    })

}