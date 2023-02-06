

//sidebar//
const menuItems = document.querySelectorAll('.menu-item');


//------------ SIDE NAV JS ------------//

const side_menu_toggle = document.querySelector('.side-menu-toggle');
const sidenav = document.querySelector('.sidenav');

side_menu_toggle.addEventListener('click', () => {
    side_menu_toggle.classList.toggle('is-active');
    sidenav.classList.toggle('is-active');
})

//theme//
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

//theme-font-size//
const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

//theme-primary-colors//
const colorPallete = document.querySelectorAll('.choose-color span');

//remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id !='notifications') {
            document.querySelector('.notification-popup').
            style.display = 'none';
        } else {
            document.querySelector('.notification-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display ='none';
        }
    })
})

//THEME CUSTOMIZATION DISPLAY//


//theme modal open
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

//Theme modal close
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

// modal close
themeModal.addEventListener('click', closeThemeModal);

// modal open
theme.addEventListener('click', openThemeModal);



//----Font Size-------//

// remove active class font size//
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}


fontSizes.forEach(size => {
    

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '12px';
            root.style.setProperty('--sticky-top-left', '1rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '15px';
            root.style.setProperty('--sticky-top-left', '1rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '17px';
            root.style.setProperty('--sticky-top-left', '-2rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--sticky-top-left', '-5rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '20px';
            root.style.setProperty('--sticky-top-left', '-12rem');
        }

        //change font size from the root html
        document.querySelector('html').style.fontSize = fontSize;
    })

    
})

// remove active class from colors
const changeActiveColorClass = () => {
    colorPallete.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

//change primary theme color//
colorPallete.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        // remove active class from colors
        changeActiveColorClass();

        if(color.classList.contains('color-1')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 220;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 2;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 264;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 79;
        } else if(color.classList.contains('color-6')) {
            primaryHue = 166;
        }
        color.classList.add('active');

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
})


//CALCULATOR//

const display = document.querySelector('#display');
const buttons = document.querySelectorAll('button');

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.id == 'clear') {
            display.innerText = '';
        } else if (item.id == 'backspace') {
            let string = display.innerText.toString();
            display.innerText = string.substr(0, string.length - 1);
        } else if (display.innerText != '' && item.id == 'equal') {
            display.innerText = eval(display.innerText);
        } else if (display.innerText == '' && item.id == 'equal') {
            display.innerText = 'Empty!';
            setTimeout(() => (display.innerText = ''), 2000);
        } else {
            display.innerText += item.id;
        }
    }
})