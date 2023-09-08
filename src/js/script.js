$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        prevArrow:'<button type="button" class="slick-prev"><img src="icon/chevron-left-solid.svg" alt=""></button>',
        nextArrow:'<button type="button" class="slick-next"><img src="icon/chevron-left-solid.svg" alt=""></button>',
        // responsive: [
        //     {
        //         breakpoint: 992,
        //         settings: {
        //         dots: true,
        //         arrows: false
        //         }
        //     }
        // ]
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
        $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    function toggleSlide(item)
    {
        $(item).each(function(i)
    {
        $(this).on('click', function(e)
        {
            e.preventDefault();
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
            $('.catalog-item__list ').eq(i).toggleClass('catalog-item__list_active');
        })
    })
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');

    //modal;
    function opasitiIn (block, i = 0.1){
        block.style.opacity = `0`;
        block.style.display = `block`;
        let inter = setInterval(()=>{
            block.style.opacity  = `${i}`;
            i = i+0.1;
            if (i >= 1){
                clearInterval(inter);
            }
            
        }, 25);
    }

    function opasitiOut(block, i = 1){
        let inter = setInterval(()=>{
            block.style.opacity  = `${i}`;
            i =  i-0.1;
            if (i <= 0){
                clearInterval(inter);
                block.style.opacity = `0`;
                block.style.display = `none`;
            }
            
        }, 25);
    }
    const modal = document.querySelectorAll('[data-modal= consultation]');
    const overlay = document.querySelector(`.overlay`),
    consultation = document.querySelector(`#consultation`),
    modal__close = document.querySelectorAll(`.modal__close`),
    thanks = document.querySelector(`#thanks`),
    order = document.querySelector(`#order`),
    button_mini = document.querySelectorAll(`.button_mini`),
    button_submit = document.querySelectorAll(`.button_submit`);
    modal.forEach(item=>{
        item.addEventListener(`click`, ()=>{
            opasitiIn(overlay);
            // overlay.style.display = 'block';
            consultation.style.display = 'block';
            
            
            // $(`.overlay, #consultation`).fadeIn(`slow`);
        })
    });

    modal__close.forEach(item=>{
        item.addEventListener(`click`, ()=>{
            opasitiOut(overlay);
            consultation.style.display = 'none';
            thanks.style.display = 'none';
            order.style.display = 'none'
            

        });
    })
    

    button_mini.forEach(item=>{
        item.addEventListener(`click`, ()=>{
            opasitiIn(overlay);
            // overlay.style.display = 'block';
            order.style.display = 'block'
            let test = item.closest(`.catalog-item`);
            let info = item.closest(`.catalog-item`).querySelector(".catalog-item__subtitle").textContent;
            let modal__descr = document.querySelectorAll(`.modal__descr`)[1].innerHTML = info;
        })
    });
    button_submit.forEach(item=>{
        item.addEventListener(`click`, (e)=>{
            e.preventDefault();
            let children = item.closest(`.feed-form`).children;
            if (children[0].value.length > 0 && children[1].value.length > 0 && children[2].value.length > 0 ){
                consultation.style.display = 'none';
                opasitiIn(overlay);
                thanks.style.display = 'block';
                order.style.display = 'none'
            }
            
        });
    });

    // $('[data-modal= consultation]').on(`click`, ()=>{
    //     $(`.overlay, #consultation`).fadeIn();
    // })
    // $('.modal__close').on('click', ()=>{
    //     $('.overlay, #consultation, #thanks, #order'). fadeOut('slow');
    // });

    // $('.button_mini').on('click',()=>{
    //     $(`.overlay, #order`).fadeIn('slow');
    // });

    // $('.button_mini').each((i)=>{
    //     $(this).on('click', ()=>{
    //         $('#order .catalog-item__subtitle').text($('.catalog-item__subtitle').eq(i).text());
            
    //     })
    // });
});