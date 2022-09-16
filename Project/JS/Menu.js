topButton = () => {
  const topButton = document.querySelector('.menu');
  topButton.scrollIntoView(
    {block: "center", inline: "nearest", behavior: "smooth"}
    );
}

stuffAndComp = () => {
	const stuffAndComp = document.querySelector('.stuff-and-comp');
	stuffAndComp.scrollIntoView(
    {block: "center", inline: "nearest", behavior: "smooth"}
    );
};

serviceAndPrice = () => {
	const serviceAndPrice = document.querySelector('.service-and-price');
	serviceAndPrice.scrollIntoView(
    {block: "start", inline: "nearest", behavior: "smooth"}
    );
};

contactDetails = () => {
	const contactDetails = document.querySelector('.contact-details');
	contactDetails.scrollIntoView(
    {block: "start", inline: "nearest", behavior: "smooth"}
    );
};
