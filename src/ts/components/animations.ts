import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.to(".preloader__item", {
	scrollTrigger: ".preloader__item",
	stagger: 0.10,
	yPercent: -100,
});

gsap.from(".banner__item", {
	scrollTrigger: ".banner__item",
	stagger: 0.30,
	y: 50,
	opacity: 0,
});

gsap.from(".saving__item", {
	scrollTrigger: ".saving__item",
	stagger: 0.30,
	y: 50,
	opacity: 0,
});

gsap.from(".arrival__slider", {
	scrollTrigger: ".arrival__slider",
	y: 50,
	opacity: 0,
	duration: 1,
});

gsap.from(".shop-now__container", {
	scrollTrigger: ".shop-now__container",
	y: 50,
	opacity: 0,
	duration: 1,
});

gsap.from(".category__slider--men", {
	scrollTrigger: ".category__slider--men",
	y: 50,
	opacity: 0,
	duration: 1,
});

gsap.from(".category__slider--women", {
	scrollTrigger: ".category__slider--women",
	y: 50,
	opacity: 0,
	duration: 1,
});

gsap.from(".brands__item", {
	scrollTrigger: ".brands__item",
	scale: 0,
	stagger: 0.20,
});

gsap.from(".limelight__slider", {
	scrollTrigger: ".limelight__slider",
	y: 50,
	opacity: 0,
	duration: 0.8,
});

gsap.from(".feedback__slider", {
	scrollTrigger: ".feedback__slider",
	y: 50,
	opacity: 0,
	duration: 0.8,
});