


/* ---------------------------------------
testimonial slider
----------------------------------------*/ 
function testimonialSlider() {
    const carouselOne = document.getElementById('carouselOne');
    if(carouselOne) {
        carouselOne.addEventListener('slide.bs.carousel', function() {
            const activeItem =this.querySelector(".active");
            document.querySelector(".js-testimonial-img").src=
            activeItem.getAttribute("data-js-testimonial-img");
          })
    }
}
testimonialSlider();

// -------------------------------------------
// Course preview video 
// -------------------------------------------
function coursePreviewVideo() {
    const coursePreviewModal = document.querySelector(".js-course-preview-modal");
    if(coursePreviewModal){
        coursePreviewModal.addEventListener("shown.bs.modal", function(){
            this.querySelector(".js-course-preview-video").play();
            this.querySelector(".js-course-preview-video").currentTime = 0;
        });

        coursePreviewModal.addEventListener("hide.bs.modal", function(){
            this.querySelector(".js-course-preview-video").pause();
        })
    }
}
coursePreviewVideo();

/* -------------------------------------------
 Style Switcher 
-------------------------------------------*/

function styleSwitcherToggle(){
    const styleSwitcher = document.querySelector(".js-style-switcher"),
    styleSwitcherToggler = document.querySelector(".js-style-switcher-toggler");

    styleSwitcherToggler.addEventListener("click", function(){
        styleSwitcher.classList.toggle("open");
        this.querySelector("i").classList.toggle("fa-times")
        this.querySelector("i").classList.toggle("fa-gear")
    });
    
}
styleSwitcherToggle();

/* theme light & dark*/
function themeLightDark() {
    const darkModeCheckbox = document.querySelector(".js-dark-mode");

    darkModeCheckbox.addEventListener("click", function(){
        if(this.checked){
            localStorage.setItem("theme-dark", "true");
        }
        else{
            localStorage.setItem("theme-dark", "false");
        }
        themeMode();
    });

    function themeMode(){
        if(localStorage.getItem("theme-dark") === "false"){
            document.body.classList.remove("t-dark");
        }
        else{
            document.body.classList.add("t-dark");
        }
    }

    if(localStorage.getItem("theme-dark") !== null){
        themeMode();
    }
    if(document.body.classList.contains("t-dark")){
        darkModeCheckbox.checked = true;
    }
}
themeLightDark()