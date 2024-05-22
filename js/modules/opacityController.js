const d = document;

const opacityController = (selector)=>{
    const target = document.querySelectorAll(selector);
    const observer = new IntersectionObserver(showContent, {root: null, rootMargin: "0px", threshold: 1});
 
     function showContent(entries){
         entries.map((entry)=>{
             if(entry.isIntersecting){
                 entry.target.classList.add("fade-in");
             }
         })
     }
 
     target.forEach(element => {
         observer.observe(element);
     });
     
     
 }
 
 export default opacityController;

