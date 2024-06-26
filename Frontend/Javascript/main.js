// mobile menu variables

function toLogin(){
  window.location.href="/Frontend/Pages/login.html"
}

function toCart(){
  window.location.href="/Frontend/Pages/addtocart.html"
}
// Function to toggle the menu visibility
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar-menu');
  sidebar.classList.toggle('open'); // Toggle the 'open' class
}

// Function to close the sidebar menu when clicking outside of it
window.addEventListener('click', function(event) {
  var sidebar = document.querySelector('.sidebar-menu');
  var toggleBar = document.querySelector('.toggle-bar');
  // Check if the clicked element is not the sidebar or toggle bar
  if (!sidebar.contains(event.target) && !toggleBar.contains(event.target)) {
    sidebar.classList.remove('open'); // Close the sidebar
  }
});

const mobileMenuOpenBtn = document.querySelectorAll('[data-mobile-menu-open-btn]');
const mobileMenu = document.querySelectorAll('[data-mobile-menu]');
const mobileMenuCloseBtn = document.querySelectorAll('[data-mobile-menu-close-btn]');
const overlay = document.querySelector('[data-overlay]');

for (let i = 0; i < mobileMenuOpenBtn.length; i++) {
  const createMobileMenuCloseFunc = function (index) {
    return function () {
      if (mobileMenu[index] && overlay) {
        mobileMenu[index].classList.remove('active');
       
      }
    };
  };

  // mobile menu function
  const mobileMenuCloseFunc = createMobileMenuCloseFunc(i);

  if (mobileMenuOpenBtn[i]) {
    mobileMenuOpenBtn[i].addEventListener('click', function () {
      if (mobileMenu[i] && overlay) {
        mobileMenu[i].classList.add('active');
      
      }
    });
  }

  if (mobileMenuCloseBtn[i] && overlay) {
    mobileMenuCloseBtn[i].addEventListener('click', mobileMenuCloseFunc);
   
  }
}

// Function to load content into the target div

// accordion variables
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

  accordionBtn[i].addEventListener('click', function () {

    const clickedBtn = this.nextElementSibling.classList.contains('active');

    for (let i = 0; i < accordion.length; i++) {

      if (clickedBtn) break;

      if (accordion[i].classList.contains('active')) {

        accordion[i].classList.remove('active');
        accordionBtn[i].classList.remove('active');

      }

    }

    this.nextElementSibling.classList.toggle('active');
    this.classList.toggle('active');

  });

}

function toggleSections(idsToShow) {

  var allSections = document.querySelectorAll('.banner > div');
  allSections.forEach(function (section) {
    section.classList.add('hidden');
   
  });


  idsToShow.forEach(function (id) {
    var sectionToShow = document.getElementById(id);
    if (sectionToShow) {
      sectionToShow.classList.remove('hidden');
    }
  });
   window.scrollTo({ top: 0, behavior: 'smooth' });
}
function toggleSection1(sectionId) {
  var section = document.getElementById(sectionId);
  section.classList.toggle('active');
  
}
let slidebtnl = document.getElementById("btnl")
let slidebtnr = document.getElementById("btnr")
let imgitem = document.querySelectorAll(".slider-item")

let start = 0
let end = (imgitem.length - 1) * 100

slidebtnl.addEventListener("click", handleleft)
function handleleft() {

  if (start < 0) {
    start = start + 100;
  }

  imgitem.forEach(element => {
    element.style.transform = `translateX(${start}%)`;
  })


}
slidebtnr.addEventListener("click", handleright)
function handleright() {
  if (start >= -end + 100) {
    start = start - 100;
  }

  imgitem.forEach(element => {
    element.style.transform = `translateX(${start}%)`;
  })


}
function render() {

  if (start >= -end + 100) {
    handleright()
  }
  else {
    start = 0;
    handleleft()
  }
}
setInterval(render, 3000);

function scrollToTop() {
    
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
const sidebarnav=document.getElementById("sidebarcontainer")
const sidebaropen=document.getElementById("cart_1")
const sidebarclose=document.getElementById("close")
const opn=document.getElementById("cart")
const chck=document.getElementById("checkout")
opn.addEventListener("click",()=>{
  sidebarnav.classList.toggle("slidebar-show")
  
})

sidebarclose.addEventListener("click",()=>{
    sidebarnav.classList.toggle("slidebar-show")
})
chck.addEventListener("click",()=>{
  sidebarnav.classList.remove('show');
})
function closecrt(){
  chck.addEventListener("click",()=>{
    sidebarnav.classList.remove('show');
})
}

function addtocart(){
  
    sidebarnav.classList.toggle("slidebar-show")
    
}


function scrollToTop() {
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function openSidebar() {
  document.getElementById('atc_sidebar').classList.add('show');
  document.getElementById('atc_overlay').classList.add('active');
}

function closeSidebar() {
  document.getElementById('atc_sidebar').classList.remove('show');
  document.getElementById('atc_overlay').classList.remove('active');
}

