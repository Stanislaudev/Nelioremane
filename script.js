// function showplan(){
//     document.querySelectorAll('#plans_normal, #hidenormal').forEach(element => {
//         element.style.display = 'flex';
//     });
//     document.querySelectorAll('#plans_vip, #shownormal').forEach(element => {
//         element.style.display = 'none';
//     });
// }
// function hideplan() {
//     document.querySelectorAll('#plans_normal, #hidenormal').forEach(element => {
//         element.style.display = 'none';
//     });
//     document.querySelectorAll('#plans_vip, #shownormal').forEach(element => {
//         element.style.display = 'flex';
//     });
// }

const swiper = new Swiper('.slider-wrapper', {
   
    loop: true,
    grabCursor: true,
    spaceBetween: 30,

  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0:{
            slidesPerView: 1
        },
        620:{
            slidesPerView: 2
        },
        1024:{
            slidesPerView: 3
        }
    }
  
  });

  function showplan(){
        document.querySelectorAll('#menumobile, .iconhide').forEach(element => {
            element.style.display = 'flex';
        }) 
    
        document.querySelectorAll('.iconshow').forEach(element => {
            element.style.display = 'none';
        })}

        function hideplan(){
            document.querySelectorAll('#menumobile, .iconhide').forEach(element => {
                element.style.display = 'none';
            }) 
        
            document.querySelectorAll('.iconshow').forEach(element => {
                element.style.display = 'flex';
            })
        
        }

        // function hideplan(){
        //     const fechar = document.querySelector('#menumobile')
        //     const  fechar2 = document.querySelector('.iconhide')
        //     const abrir = document.querySelector('.iconshow'
        //     )
        //     fechar.style.display = 'none'
        //     fechar2.style.display = 'none'
        //     abrir.style.display = 'flex'
        
        // }


        