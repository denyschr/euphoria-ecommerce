import * as noUiSlider from 'nouislider';
import * as wNumb from 'wnumb';

function rangeInit(): void {
	const rangeItems: NodeListOf<HTMLDivElement> = document.querySelectorAll('[data-range]');
	if (rangeItems.length) {
		rangeItems.forEach(rangeItem => {
			const rangeSlider = rangeItem.querySelector('[data-range-slider]') as HTMLDivElement;
			const fromValue = rangeItem.querySelector('[data-range-from]') as HTMLInputElement;
			const toValue = rangeItem.querySelector('[data-range-to]') as HTMLInputElement;
			const inputs: HTMLInputElement[] = [fromValue, toValue];
			const range = noUiSlider.create(rangeSlider, {
				start: [Number(fromValue.dataset.rangeFrom), Number(toValue.dataset.rangeTo)],
				connect: true,
				range: {
					'min': [Number(fromValue.dataset.rangeFrom)],
					'max': [Number(toValue.dataset.rangeTo)]
				},
				format: wNumb({
					decimals: 0,
					prefix: '$',
				}),
			});
			range.on('update', function (values, handle) {
				inputs[handle].value = values[handle].toString();
			});
		});
	}
}

export default rangeInit;