const items = document.querySelectorAll(".accordion a");

function toggleAccordion(){
	this.classList.toggle('active');

	this.nextElementSibling.classList.toggle('active');
}

items.forEach(item => item.addEventListener('click', toggleAccordion));


$('a.someclass').click(function(e)
{
    // Special stuff to do when this link is clicked...

    // Cancel the default action
    e.preventDefault();
});