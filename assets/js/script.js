//________EXIBIR IMAGENS NO SCROLL 
const illustration = document.querySelector(".app"),
	txt = document.querySelector(".text");

window.addEventListener("scroll", () => {
	const position_illu = illustration.getBoundingClientRect(),
		position_txt = txt.getBoundingClientRect(),
		windowHeight = window.innerHeight - 140;

	if (position_illu.top <= window.innerHeight) {
		illustration.classList.add("fadeInUp");
	}

	if (position_txt.top <= windowHeight) {
		txt.classList.add("fadeInUp");
	}
});
