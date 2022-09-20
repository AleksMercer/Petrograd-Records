// start Top button 

window.onscroll = () => { scrollCoord() };

scrollCoord = () => {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        document.getElementById("topBtn").style.display = "block";
    } else {
        document.getElementById("topBtn").style.display = "none";
    }
}

topButton = () => {
    const topButton = document.querySelector('header');
    topButton.scrollIntoView({
        block: "start", inline: "nearest", behavior: "smooth"
    });
}

//end Top button

//start Burger button

/*if (document.documentElement.clientWidth < 1100) {*/

    const openButton = document.getElementById("opnBrg");
    const closeButton = document.getElementById("clsBrg");
    const openerDiv = document.querySelector('.opner');
    const bugerNav = document.querySelector('.burger');
    
    openBurger = () => {
        openButton.style.display = "none";
        closeButton.style.display = "block";
        bugerNav.style.display = "grid";
        openerDiv.style.cssText = `
                                    display: block;    
                                    height: 100%; 
                                    width: 100%; 
                                    position: fixed; 
                                    backdrop-filter: blur(10px);
        `;
        document.body.style.overflow = "hidden"; 
    }

    closeBurger = () => {
        openButton.style.display = "block";
        closeButton.style.display = "none";
        openerDiv.style.display = "none"; //cssText = `display: none;`;
        bugerNav.style.display = "none";
        
        document.body.style.overflow = ""; 
    }

    /*stuffAndComp= () => {
        closeBurger();
        
    } 
    serviceAndPrice= () => {
        openButton.style.display = "block";
        closeButton.style.display = "none";
        openerDiv.style.display = "none"; 
        bugerNav.style.display = "none";
        
    }
    contactDetails= () => {
        openButton.style.display = "block";
        closeButton.style.display = "none";
        openerDiv.style.display = "none"; 
        bugerNav.style.display = "none";
        
    }*/
/*} else if (document.documentElement.clientWidth > 1100) {    

    document.getElementById("opnBrg").style.display = "none";
    document.getElementById("clsBrg").style.display = "none";
}*/

//end Burger button

// start Menu button

stuffAndComp = () => {
	const stuffAndComp = document.querySelector('.stuff-and-comp');
	stuffAndComp.scrollIntoView({
        block: "center", inline: "nearest", behavior: "smooth"
    });
};

serviceAndPrice = () => {
	const serviceAndPrice = document.querySelector('.service-and-price');
	serviceAndPrice.scrollIntoView({
        block: "center", inline: "nearest", behavior: "smooth"
    });
};

contactDetails = () => {
	const contactDetails = document.querySelector('.contact-details');
	contactDetails.scrollIntoView({
        block: "start", inline: "nearest", behavior: "smooth"
    });
};

// end Menu button