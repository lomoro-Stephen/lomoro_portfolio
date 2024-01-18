const barsBtn =document.querySelector('.header__bars');
const mobileNav =document.querySelector('.mobile-nav');
const mobileLinks =document.querySelectorAll('mobile-nav__link');

//state
let isMobileNavOpen=false;
//event listener
barsBtn.addEventListener('click', ()=>{
    isMobileNavOpen = !isMobileNavOpen;
    if(isMobileNavOpen){
        mobileNav.style.display = 'flex';
        document.body.style.overflowY ='hidden';
    }
    else{
        mobileNav.style.display = 'none';
        document.body.style.overflowY ='auto';
    }
    mobileLinks.forEach(link=>{
        link.addEventListener('click', ()=>{
            isMobileNavOpen= false;
            mobileNav.style.display='none';
            document.body.style.overflowY ='auto';
        })
    })
})

//mode
const themeToggleBtn =document.querySelectorAll('#theme-toggle');

const theme = localStorage.getItem('theme');
//mount
theme && document.body.classList.add(theme);
//handler
const handleThemeToggle =()=>{
    document.body.classList.toggle('light-mode');  //add light mode class to switch icon from bulb
    if(document.body.classList.contains('light-mode')){
        localStorage.setItem('theme','light-mode');   //save the state of dark mode
    }else{
    localStorage.removeItem('theme');
    document.bode.removeAttribute('class');
    }
}
//events
themeToggleBtn.forEach(btn=>
    btn.addEventListener("click", handleThemeToggle)
);



