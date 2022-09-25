// start Top button 

window.onscroll = () => scrollCoord();

scrollCoord = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

topButton = () => {
    const topBtn = document.querySelector('header');

    topBtn.scrollIntoView({
        block: "start", inline: "nearest", behavior: "smooth"
    });
}

//end Top button

//start Burger buttons

const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");


menuButton = () => {
    menu.classList.remove('menu')
    menu.classList.add('menu-mobile')
    menuBtn.style.display = 'none';
};

menuEvent = () => {
    menu.classList.remove('menu-mobile')
    menu.classList.add('menu')
    menuBtn.style.display = '';
}

//end Burger buttons

// start Menu buttons

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
    }

	const scroll = document.querySelector(className);

	scroll.scrollIntoView({
        block: "start", inline: "nearest", behavior: "smooth"
    });

    if (menu.classList == 'menu-mobile') {
        menu.classList.remove('menu-mobile')
        menu.classList.add('menu')
        menuBtn.style.display = '';
    }

};

// end Menu buttons