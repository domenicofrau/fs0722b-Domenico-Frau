

window.onscroll= function(){
    const header = document.querySelector('.header');
    const header_btn = document.querySelector('.header_btn');
    let top = window.scrollY;
    console.log(top)
    if (top > 350){
        header.classList.add('active');
        header_btn.classList.add('active');
    }else{
        header.classList.remove('active');
        header_btn.classList.remove('active');
    }
}