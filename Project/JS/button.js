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
const openButton = document.getElementById("opnBrg");
const closeButton = document.getElementById("clsBrg");

openBurger = () => {
    openButton.style.display = "none"
    closeButton.style.display = "block";
    document.body.style = "filter: blur(3px)";
}
closeBurger = () => {
    openButton.style.display = "block"
    closeButton.style.display = "none";
    document.body.style = "";
}

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