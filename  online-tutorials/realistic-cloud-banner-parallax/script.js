let text = document.getElementById('text');
window.addEventListener('scroll',
    function () {
        let valeu = window.scrollY;
        text.style.marginBottom = valeu * 2 + 'px';
    });