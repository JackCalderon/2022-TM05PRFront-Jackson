(function(){  /*Para que no se choque con archivos externos*/
    const sliders = [...document.querySelectorAll('.slider-body')]; /*Convertimos en array []...*/
    console.log(sliders)
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');
    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));

    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number (document.querySelector('.slider-body-show').
        dataset.id)

        value = currentElement;
        value+= change

        console.log(sliders.length)
        if(value === 0 || value == sliders.length+1){ /*Si es cero quiero volver al ultimo valor del slider*/
            value = value === 0 ? sliders.length : 1;
            
        } /*Contamos desde cero*/

        sliders[currentElement-1].classList.toggle('slider-body-show');
        sliders[value-1].classList.toggle('slider-body-show'); /*Si la tiene la quita y sino la agrega*/
    }


})()