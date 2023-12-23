import Swiper from 'swiper';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

if (document.querySelector('.hero__slider')) {
	const heroSlider: Swiper = new Swiper('.hero__slider', {
		modules: [Pagination, Navigation, Autoplay],
		loop: true,
		speed: 800,
		pagination: {
			el: '.hero__pagination',
			clickable: true,
		},
		navigation: {
			nextEl: ".nav-hero__button--next",
			prevEl: ".nav-hero__button--prev",
		},
		autoplay: {
			delay: 6000,
		},
	});
}

if (document.querySelector('.arrival__slider')) {
	const arrivalSlider: Swiper = new Swiper('.arrival__slider', {
		modules: [Navigation],
		slidesPerView: 4,
		navigation: {
			nextEl: ".nav-arrival__button--next",
			prevEl: ".nav-arrival__button--prev",
		},
		breakpoints: {
			992: {
				slidesPerView: 4,
				spaceBetween: 38,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
			480: {
				slidesPerView: 2,
				spaceBetween: 15,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			}
		}
	});
}

if (document.querySelector('.feedback__slider')) {
	const arrivalSlider: Swiper = new Swiper('.feedback__slider', {
		modules: [Pagination],
		spaceBetween: 23,
		pagination: {
			el: '.feedback__pagination',
			clickable: true,
		},
		breakpoints: {
			992: {
				slidesPerView: 3,
			},
			768: {
				slidesPerView: 2.5,
			},
			640: {
				slidesPerView: 2,
			},
			480: {
				slidesPerView: 1.5,
				spaceBetween: 15,
			},
			320: {
				slidesPerView: 1,
				spaceBetween: 15,
			}
		}
	});
}

interface SwiperBreakpoints {
	[width: number]: SwiperSettings;
	[ratio: string]: SwiperSettings;
}

interface SwiperSettings {
	spaceBetween?: number;
	slidesPerView?: number;
	freeMode?: boolean;
	breakpoints?: SwiperBreakpoints,
}

const resizableSlider = (
	breakpoint: string,
	swiperClass: string,
	swiperSettings?: SwiperSettings,
): void => {
	let swiper: Swiper;

	const breakpointMediaQuery: MediaQueryList = window.matchMedia(breakpoint);

	const enableSwiper = (className: string, settings?: SwiperSettings): void => {
		swiper = new Swiper(className, settings);
	};

	const checker = (): void => {
		if (breakpointMediaQuery.matches) {
			return enableSwiper(swiperClass, swiperSettings);
		} else {
			if (swiper !== undefined) swiper.destroy(true, true);
			return;
		}
	};

	breakpointMediaQuery.addEventListener('change', checker);
	checker();
};

resizableSlider(
	'(max-width: 991.98px)',
	'.category__slider--men',
	{
		freeMode: true,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 3.6,
			},
			640: {
				slidesPerView: 3,
			},
			480: {
				slidesPerView: 2.4,
			},
			320: {
				slidesPerView: 1.5,
			}
		}
	},
);

resizableSlider(
	'(max-width: 991.98px)',
	'.category__slider--women',
	{
		spaceBetween: 20,
		freeMode: true,
		breakpoints: {
			768: {
				slidesPerView: 3.6,
			},
			640: {
				slidesPerView: 3,
			},
			480: {
				slidesPerView: 2.4,
			},
			320: {
				slidesPerView: 1.5,
			}
		}
	},
);

resizableSlider(
	'(max-width: 991.98px)',
	'.limelight__slider',
	{
		freeMode: true,
		spaceBetween: 20,
		breakpoints: {
			768: {
				slidesPerView: 3.6,
			},
			640: {
				slidesPerView: 3,
			},
			480: {
				slidesPerView: 2.4,
			},
			320: {
				slidesPerView: 1.5,
			}
		}
	},
);