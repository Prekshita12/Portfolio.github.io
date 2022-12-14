window.addEventListener("load",()=>{
    document.querySelector(".main").classList.remove("hidden");
    document.querySelector(".home-section").classList.add("active");
    // page loader 
    document.querySelector(".page-loader").classList.add("fade-out");
    setTimeout(()=>{
    document.querySelector(".page-loader").style.display="none";
    },700);
})

// toggle navbar 
const navToggler=document.querySelector(".nav-toggler");
navToggler.addEventListener("click",()=>{
    hideSection();
    toggleNavbar();
    document.body.classList.toggle("hide-scrolling");
})
function hideSection(){
    document.querySelector("section.active").classList.toggle("fade-out");
}
function toggleNavbar(){
    document.querySelector(".header").classList.toggle("active");
}

// this is active sections 
document.addEventListener('click',(e)=>{
    if(e.target.classList.contains("link-item") && e.target.hash !==""){
        // active the overlay 
        document.querySelector(".overlay").classList.add("active");
        navToggler.classList.add("hide");
        if(e.target.classList.contains("nav-item")){
            toggleNavbar();
        }
        else{
            hideSection();
            document.body.classList.add("hide-scrolling");

        }
        setTimeout(()=>{
            document.querySelector("section.active").classList.remove("active","fade-out");
            document.querySelector(e.target.hash).classList.add("active");
            window.scrollTo(0,0);
            document.body.classList.remove("hide-scrolling");
            navToggler.classList.remove("hide");
            document.querySelector(".overlay").classList.remove("active");   
        },500);
    }
})




// project item details popup 

document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("view-project-btn")){
        toggleProjectPopup();
        document.querySelector(".projects-popup").scrollTo(0,0);
        projectItemDetalis(e.target.parentElement);
    };
});
function toggleProjectPopup(){
    document.querySelector('.projects-popup').classList.toggle("open");
    document.body.classList.toggle("hide-scrolling");
    document.querySelector(".main").classList.toggle("fade-out");
}
document.querySelector(".pp-close").addEventListener("click",toggleProjectPopup);


document.addEventListener("click",(e)=>{
    if(e.target.classList.contains("pp-inner")){
        toggleProjectPopup();
    }
})

function projectItemDetalis(portfolioItem){
    document.querySelector(".pp-thumbnail img").src =
    portfolioItem.querySelector(".projects-item-thumbnail img").src;

    document.querySelector(".pp-header h3").innerHTML =
    portfolioItem.querySelector(".projects-item-title").innerHTML;

    document.querySelector(".pp-body").innerHTML =
    portfolioItem.querySelector(".projects-item-details").innerHTML;

}
const scriptURL = 'https://script.google.com/macros/s/AKfycbxYmAKjjHIuTxo-hRf6l_e6M6YWrANV08nje7iz9dMw-97kC1864aMuY6XmXp5J4EwI/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})
