const blurArea = document.querySelector('.blur-area')
const main = document.querySelector('.main')
const header = document.querySelector('.header')
const footer = document.querySelector('.footer')
var condition = false; // false by default, contains condition open menu



function menuConditionSwitcher() {
    if (condition === false) { 
        document.querySelector('.navigation-wrapper').style.left = 0;
        main.style.filter = 'blur(3px)';
        header.style.filter = 'blur(3px)';
        footer.style.filter = 'blur(3px)';
        condition = true; 
    }

    else { 
        document.querySelector('.navigation-wrapper').style.left = '-100%';
        main.style.filter = 'blur(0px)';
        header.style.filter = 'blur(0px)';
        footer.style.filter = 'blur(0px)';
        condition = false; 
    }
    
} 


blurArea.addEventListener('click', menuConditionSwitcher)
