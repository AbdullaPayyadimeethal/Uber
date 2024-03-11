document.addEventListener("DOMContentLoaded",function(){
    var headerdown=document.querySelector('.headerdown');
    var headerdownOffset=headerdown.offsetTop;


window.addEventListener('scroll',function(){
    if(window.pageYOffset >= headerdownOffset){
        headerdown.classList.add('fixed');
    }else{
        headerdown.classList.remove('fixed');
    }
})
})