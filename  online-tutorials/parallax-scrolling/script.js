var layer1 = document.getElementById('layer1');
scroll = window.pageYOffset;
document.addEventListener('scroll',
function(event){
    var offset = window.pageYOffset;
    scroll = offset;
    layer1.style.width = (100 + scroll/5) + '%';
})

var layer2 = document.getElementById('layer2');
scroll = window.pageYOffset;
document.addEventListener('scroll',
function(event){
    var offset = window.pageYOffset;
    scroll = offset;
    layer2.style.width = (100 + scroll/5) + '%';
    layer2.style.right = -(scroll/5)-10 + '%';
})

var text = document.getElementById('text');
scroll = window.pageYOffset;
document.addEventListener('scroll',
function(event){
    var offset = window.pageYOffset;
    scroll = offset;
    text.style.top = - scroll/8 + '%';
})