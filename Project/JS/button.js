// start Top button 

window.onscroll = () => scrollCoord();

scrollCoord = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

//end Top button

//start Burger buttons

const menu = document.getElementById("menu").classList;
const menuBtn = document.getElementById("menuBtn").style;


menuButton = () => {
    menu.remove('menu')
    menu.add('menu-mobile')
    menuBtn.display = 'none';
    document.body.style.overflow = 'hidden';
};

menuEvent = () => {
    menu.remove('menu-mobile')
    menu.add('menu')
    menuBtn.display = '';
    document.body.style.overflow = '';
}

//end Burger buttons

// start Menu and top buttons

navbtn = (x) => {
    
    switch (x) {
        case 1:    
            className  = '.stuff-and-comp';
            break;
        case 2:    
            className  = '.service-and-price';
            break;
        case 3:    
            className  = '.contact-details';
            break;
        case 4:    
            className  = 'header';
            break;
    }

    const scroll = document.querySelector(className);

    scroll.scrollIntoView({
        block: "start", inline: "nearest", behavior: "smooth"
    });
};

// end Menu and top buttons

// start modalWindow code

modalWindowOpen = (x) =>  {
    
    switch (x) {
        case 1:    
            modalId = 'modalWin1';
            break;
        case 2:    
            modalId = 'modalWin2';
            break;
        case 3:    
            modalId = 'modalWin3';
            break;
        case 4:    
            modalId = 'modalWin4';
            break;
        case 5:    
            modalId = 'modalWin5';
            break;
        case 6:    
            modalId = 'modalWin6';
            break;
        case 7:    
            modalId = 'modalWin7';
            break;
        case 8:    
            modalId = 'modalWin8';
            break;
    }

    document.getElementById(modalId).style.display = 'grid';
    document.body.style.overflow = 'hidden'; 

    return modalId;
};

modalWindowClose = () => {
    document.getElementById(modalId).style.display = '';
    document.body.style.overflow = '';
}
// end modalWindow code