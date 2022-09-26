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

// start dirty modalWindow code

modalWindowOpen = () => {
    document.getElementById("modalWin").style.display = 'grid';
    document.body.style.overflow = 'hidden';
}
modalWindowClose = () => {
    document.getElementById("modalWin").style.display = '';
    document.body.style.overflow = '';
}

// end dirty modalWindow code