import '../scss/style.scss';
// import './components/simplebar';
import './libs/dynamic-adaptive';
import './components/slider';
// import './libs/select';
import './libs/spoilers';
import preloader from './components/preloader';
import './components/tabs';
import menuInit from './components/menu';
import goToTopInit from './components/go-to-top';
import './libs/range';
import GrapthTabs from './components/tabs';

preloader();
menuInit();
goToTopInit();

const tabs = new GrapthTabs();

document.querySelector('.filter-catalog__title')?.addEventListener('click', (): void => {
	if (window.innerWidth < 768) {
		document.querySelector('.filter-catalog__content')?.classList.toggle('_active');
	}
});