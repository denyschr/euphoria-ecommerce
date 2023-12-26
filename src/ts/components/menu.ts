function menuInit() {
	const header = document.querySelector('.header-main') as HTMLElement;
	const overlay = document.querySelector('.header-main__overlay') as HTMLDivElement;
	const menuBtn = document.querySelector('.icon-menu') as HTMLButtonElement;
	const menuItems: NodeListOf<HTMLLinkElement> = document.querySelectorAll('.menu__link');

	function destroyMenu(): void {
		document.body.classList.remove('locked');
		document.documentElement.classList.remove('_menu-open');
	}

	if (menuBtn) {
		menuBtn.addEventListener('click', (): void => {
			document.body.classList.toggle('locked');
			document.documentElement.classList.toggle('_menu-open');
		});
	}

	if (menuItems.length) {
		menuItems.forEach((item): void => {
			item.addEventListener('click', destroyMenu);
		});
	}

	window.addEventListener('click', (e): void => {
		if (e.target == overlay) destroyMenu();
	})

	window.addEventListener('resize', (): void => {
		if (window.innerWidth > 991.98) destroyMenu();
	});

	let initialScrollPos: number = window.scrollY;
	window.addEventListener('scroll', (): void => {
		let currentScrollPos: number = window.scrollY;
		initialScrollPos >= currentScrollPos ? header.classList.remove('_active') : header.classList.add('_active');
		currentScrollPos > 0 ? header.classList.add('_scroll') : header.classList.remove('_scroll');
		initialScrollPos = currentScrollPos;
	});
}

export default menuInit;