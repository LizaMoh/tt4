const tabs = document.querySelectorAll('.tabheader__item');
const tabContent = document.querySelectorAll('.tabcontent');
const tabParent = document.querySelector('.tabheader');

function hideTabContent(){
    tabContent.forEach(item =>{
        item.style.display = "none";
    })
    tabs.forEach(item=>{
        item.classList.remove('tabheader__item_active');
    })
}

function showTabContent(i=0){
    tabContent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
}


hideTabContent();
showTabContent();

tabParent.addEventListener('click',(event)=>{
    if(event.target = event.target.classList.contains('tabheader__item')){
        tabs.forEach((item,i)=>{
            if(event.target == item){
                hideTabContent();
                showTabContent(i);
            }
        })
    }
})

const modalBtn = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalClose = document.querySelector('[data-close]');

modalBtn.forEach(item=>{
    item.addEventListener('click',()=>{
        modal.classList.add('show');
        modal.classList.remove('hide');
        document.body.style.overflow ='hidden';
    })
})

modalClose.addEventListener('click',()=>{
    modal.classList.add('hide');
    modal.classList.remove('show');
     document.body.style.overflow ='';
})
modal.addEventListener('click',(event)=>{
    if(event.target === modal){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow ='';
    }
})
document.addEventListener('keydown',(event)=>{
    if(event.code === 'Escape'){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow ='';
    }
})
//slider
 //  const slider = document.querySelectorAll('.offer_slide'),
 // prev = document.querySelector('.offer_slider-prev'),
 // next = document.querySelector('.offer_slider-next'),
 //  total = document.querySelector('#total'),
 //  current = document.querySelector('#current');
//   let slideIndex = 1;
//
 //  function showSlides(){
//
//   //   slides.forEach(item=> item.style.display="none");
  //     slides[slideIndex-1].style.display ="block"

 //  }
  // showSlides();
