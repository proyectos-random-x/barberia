/**
 * Para usar fetch
 * https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch#creating_a_request_object
 * Funciones flecha
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
*/
function getPage(page) {
	fetch(`${location.href}${page}.html`)
	.then(html => html.text())
	.then(pagina => document.querySelector("main").innerHTML = pagina);
}

/**
 * Navegacion
*/
const enlaces = [].slice.call(document.querySelectorAll(".navbar ul li a"));
enlaces.forEach( enlace => {
	enlace.addEventListener('click', evento => {
		let dataSet = enlace.dataset.pagina;
		let nombre = (dataSet === 'home') ? 'home' : dataSet;
		evento.preventDefault();
		enlaces.forEach( enlace => enlace.classList.remove('active'));
		enlace.classList.add('active');
		getPage(nombre);
	});
});

/**
 * Cargamos la primera página
*/
window.onload = () => getPage('home');