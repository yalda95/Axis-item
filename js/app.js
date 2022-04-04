const homeBtn = document.querySelector('.home-btn')
const activityBtn = document.querySelector('.activity-btn')
const pageBtn = document.querySelector('.pages-btn')
const homedropDown = document.querySelector('#dropdown-content-home')
const activityDropDown = document.querySelector('#dropdown-content-activity')
const pagesDropDown = document.querySelector('#dropdown-content-pages')
const email = document.querySelector('#email')
const submitBtn = document.querySelector('.sumbit')

const showMeu = (menu) => {
  menu.classList.toggle("show");
}
const hideMenu = (menu) => {
  menu.classList.toggle("show");

}
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  


function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

const validateEmail = () => {
  let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  if(email.value.match(mailFormat)) {
    alert("you will recieve new updates in your e-mail soon!")
  }else if(email.value === ""){
    alert('please fill the email section')
  }else {
    alert('You have entered an invalid Email address!')

  }
}

window.addEventListener("scroll", reveal);

homeBtn.addEventListener('mouseover',() => {
  showMeu(homedropDown)
})
homeBtn.addEventListener('mouseout',() => {
  hideMenu(homedropDown)
})

activityBtn.addEventListener('mouseover',()=> {
showMeu(activityDropDown)
})
activityBtn.addEventListener('mouseout',() => {
  hideMenu(activityDropDown)
})
pageBtn.addEventListener('mouseover', () => {
  showMeu(pagesDropDown)
})
pageBtn.addEventListener('mouseout',() => {
  hideMenu(pagesDropDown)
})
submitBtn.addEventListener('click',validateEmail)