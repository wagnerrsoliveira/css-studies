const buttons = document.querySelectorAll('a');
buttons.forEach(button=>{
    button.addEventListener('click', function(event){
        let x = event.clientX - event.target.offsetLeft;
        let y = event.clientY - event.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';

        this.appendChild(ripples)

        setTimeout(()=>{
            ripples.remove();
        },1000);
    });
});