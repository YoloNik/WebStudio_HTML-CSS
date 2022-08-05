const refsForMenu = {
  body: document.querySelector("body"),
	mobileOpenMenu: document.querySelector("[data-mobileOpenMenu]"),
	mobileMenu: document.querySelector("[data-mobileMenu]"),
	mobileCloseMenu: document.querySelector("[data-mobileCloseMenu]"),
};




refsForMenu.mobileOpenMenu.addEventListener("click", toggleMenu)
refsForMenu.mobileCloseMenu.addEventListener("click", toggleMenu)

window.addEventListener('resize', vwMenu);

function vwMenu(){
	if(refsForMenu.body.clientWidth <= 767)
	refsForMenu.mobileMenu.classList.remove("menu-is-open")
	else{
		refsForMenu.mobileMenu.classList.add("menu-is-open")
	}
}

vwMenu()

function toggleMenu(e) {
	refsForMenu.body.style.overflow = "auto";
	refsForMenu.mobileMenu.classList.toggle("menu-is-open");

	if (refsForMenu.mobileMenu.closest(".menu-is-open") &&
	refsForMenu.mobileMenu.closest(".menu")) {
    refsForMenu.body.style.overflow = "hidden";
  }
	
}

