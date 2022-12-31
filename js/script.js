let links = document.querySelectorAll("a");
links.forEach((item)=>{
    item.addEventListener('click' , (e)=>{
        e.preventDefault();
    })
})

const swiper = new Swiper('.swipers', {
    direction: 'horizontal',
    loop: false,
    speed:300,
    spaceBetween:10,
    touchReleaseOnEdges:true,
    breakpoints:{
        1200:{
            slidesPerView:8.5,
            slidesPerGroup:5,
        },

        1024:{
            slidesPerView:7.5,
        },

        640:{
            slidesPerView:6.5,
        },

        481:{
            slidesPerView:4.5,
        },

        0:{
            slidesPerView:3.5,
        }
    },
    navigation: { 
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const swiper2 = new Swiper('.vitreen-swiper', {
    direction: 'horizontal',
    loop: false,
    speed:400,
    spaceBetween:10,
    touchReleaseOnEdges:true,
    slidesPerGroup:2,
    breakpoints:{
        1200:{
            slidesPerView:2.54,
        },

        1024:{
            slidesPerView:2.3,
        },

        640:{
            slidesPerView:2.18,
        },

        481:{
            slidesPerView:1.3,
        },

        0:{
            slidesPerView:1.3,
        }
    },
    navigation: { 
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

document.getElementById("program-link").addEventListener("click" , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("program-menu");
    if(menu.classList.contains("fade")){
        menu.classList.remove("fade");
        menu.style.zIndex = "1000";
    }else{
        menu.classList.add("fade");
        menu.style.zIndex = "1";
    }

    document.addEventListener('click' , (e)=>{
        if(e.target.id != "program-link"){
            menu.classList.add("fade");
        }
    })
});

document.getElementById("game-link").addEventListener("click" , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("game-menu");
    if(menu.classList.contains("fade")){
        menu.classList.remove("fade");
        menu.style.zIndex = "1000";
    }else{
        menu.classList.add("fade");
        menu.style.zIndex = "1";
    }

    document.addEventListener('click' , (e)=>{
        if(e.target.id != "game-link"){
            menu.classList.add("fade");
        }
    })
});

document.getElementById("other-link").addEventListener("click" , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("other-menu");
    if(menu.classList.contains("fade")){
        menu.classList.remove("fade");
        menu.style.zIndex = "1000";
    }else{
        menu.classList.add("fade");
        menu.style.zIndex = "1";
    }

    document.addEventListener('click' , (e)=>{
        if(e.target.id != "other-link"){
            menu.classList.add("fade");
        }
    })
});

document.getElementById("lang-link").addEventListener("click" , (e)=>{
    e.preventDefault();
    let menu = document.getElementById("lang-menu");
    if(menu.classList.contains("fade")){
        menu.classList.remove("fade");
        menu.style.zIndex = "1000";
    }else{
        menu.classList.add("fade");
        menu.style.zIndex = "1";
    }

    document.addEventListener('click' , (e)=>{
        if(e.target.id != "lang-link"){
            menu.classList.add("fade");
        }
    })
});

document.getElementById("drop-menu-btn").addEventListener("click" , ()=>{
    let close = document.getElementById("close-path");
    let open = document.getElementById("open-path");
    let menu = document.getElementById("burger-menu");
    if(close.classList.contains("d-none")){
        close.classList.remove("d-none");
        open.classList.add("d-none");
        menu.classList.remove("fade");
        menu.style.zIndex = "1001";
    }else{
        close.classList.add("d-none");
        open.classList.remove("d-none");
        menu.classList.add("fade");
        menu.style.zIndex = "1";
    }
})

window.addEventListener("resize" , ()=>{
    let header = document.getElementById("header-parent");
    let main = document.getElementById("main-parent");
    let size = window.matchMedia("(max-width : 1024px)");
    if(size.matches){
        header.classList.remove("container");
        header.classList.add("container-fluid");
        main.classList.remove("container");
        main.classList.add("container-fluid");
    }else{
        header.classList.add("container");
        header.classList.remove("container-fluid");
        main.classList.add("container");
        main.classList.remove("container-fluid");
    }
})

document.getElementById("visible-text").addEventListener('click' , ()=>{
    let visibletext = document.getElementById("visible-text");
    let menu = document.getElementById("collapse-menu");
    let angle = document.getElementById("angle");
    menu.classList.add("show");
    visibletext.classList.remove("visible-text");
    angle.classList.toggle("animate-angle");
})

document.getElementById("btn-angle").addEventListener('click' , ()=>{
    let menu = document.getElementById("collapse-menu");
    let visibletext = document.getElementById("visible-text");
    let angle = document.getElementById("angle");

    menu.classList.toggle("show");
    if(menu.classList.contains("show")){
        visibletext.classList.remove("visible-text");
        angle.classList.add("animate-angle");
    }else{
        visibletext.classList.add("visible-text");
        angle.classList.remove("animate-angle");
    }
})