// for add buttons to certificate and projects
const category = [
    {
        
        category : "projects",
        img: "./assest/p1.webp",
        desc:"Project Source",
        link :"https://www.github.com",
    },
    {
       
        category : "projects",
        img:"./assest/p2.webp",
        desc:"Project Source",
        link :"https://www.github.com",
    },
    {
        
        category : "projects",
        img:"./assest/p3.png",
        desc:"Project Source",
        link :"https://www.github.com",
    },
    {
      
        category : "projects",
        img:'./assest/p4.jpeg',
        desc:"Project Source",
        link :"https://www.github.com",
    },
    {
       
        category : "Certificates",
        img:"./assest/c1.jpeg",
        desc:"HTML DEVELOPER",
        link :"https://www.github.com",
    },
    {
       
        category : "Certificates",
        img:"./assest/c2.png",
        desc:"FRONT-END DEVELOPER",
        link :"https://www.github.com",
    },
    {
        
        category : "Certificates",
        img:"./assest/c3.png",
        desc:"PESPONSIVE WEBSITE",
        link :"https://www.github.com",
    },
   

];

function setButtonCategories(){
    const categoryType=document.getElementById("button-wrapper")
    const categories = category.reduce(
        function (values, item){
            if(item && item.category && !values.includes(item.category) ){
                        values.push(item.category);
        }
        return values;
        },
    []
    );
    const buttoons=categories.map(function(category){
       return  ` <div class="pc-button" data-id=${category}> ${category}  </div>`
    })
categoryType.innerHTML=buttoons.join("")


document.querySelectorAll(".pc-button").forEach(function(item){
   const categoryTypes=item.getAttribute("data-id")
    item.addEventListener("click",function(){
        const filter =category.filter(function(item){
            return item.category===categoryTypes
        })
        displayItems(filter)
    })
})
}



function displayItems(items){
    const categoryWrapper=document.getElementById("project")
if(items){
    categoryWrapper.innerHTML=items.map(function(item){
        return ` <div class="project-container">
        <img class="img-proj" src="${item.img}" alt="">
        <div class="caption" id="caption">
            <p class="category">${item.desc}</p>
            <a href="#"><i class="fa-brands fa-github"></i></a>
        </div>
    </div>`
    })

    .join(" ");
}
}

document.addEventListener("DOMContentLoaded",function(){
    setButtonCategories();
    displayItems(category)
});
// --------------------------------------------------------------

// add class to buttons 
const buttons=document.querySelectorAll(".control")


buttons.forEach(Element => {
    Element.addEventListener("click", function(){
        buttons.forEach(item => item.classList.remove("active-icon"))

        this.classList.add("active-icon")
    })
})
// ----------------------------------------------------------




// click buttons and show the section
document.getElementById("about-btn").addEventListener("click",function(){
    document.getElementById("section2").style.display="block"
    document.getElementById("section1").style.display="none"
    document.getElementById("section3").style.display="none"
    document.getElementById("section4").style.display="none"

})

document.getElementById("home-btn").addEventListener("click",function(){
    document.getElementById("section2").style.display="none"
    document.getElementById("section1").style.display="block"
    document.getElementById("section3").style.display="none"
    document.getElementById("section4").style.display="none"

})
document.getElementById("timeline-btn").addEventListener("click",function(){
    document.getElementById("section2").style.display="none"
    document.getElementById("section1").style.display="none"
    document.getElementById("section3").style.display="block"
    document.getElementById("section4").style.display="none"

})
document.getElementById("project-btn").addEventListener("click",function(){
 
    document.getElementById("section2").style.display="none"
    document.getElementById("section1").style.display="none"
    document.getElementById("section3").style.display="none"
    document.getElementById("section4").style.display="block"

})


// ---------------------------------------------------------------


// switch to dark mode

const button= document.querySelector('.them-btn ')
const sec =document.getElementById("main")
button.addEventListener("click" , ( ) =>{
   sec.classList.toggle('dark-mode')
})
// -------------------------------------------------------------
// Loading page
const overlayLoader= document.getElementById("loader")
window.addEventListener("load", function(){
    setTimeout(overlayLoader.style.display="none" , 3000)
})
