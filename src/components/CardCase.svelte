<script lang="ts">
	import { beforeUpdate } from 'svelte';
	import CardImage from './CardImage.svelte';

	export let id: number;
	//Current price of card
	export let price: number;
	//Price paid for card
	export let paid: number;
	//path to label background
	export let labelBG: string;
	//Title for card case
	export let title: string;
	//Holofoil overlay
	export let holofoil: boolean;
	//Img path
	export let cardImg: string;

	let formatedPrice = `$-.--`;
	let priceColor = '';

	beforeUpdate(() => {
		if (price != null) {
			formatedPrice = `$${price.toFixed(2).toString()}`;
			if (paid != null && paid !== 0) {
				if (paid <= price) {
					formatedPrice = `⬆︎ ${price}`;
					priceColor = 'text-green-600';
				} else {
					formatedPrice = `⬇︎ ${price}`;
					priceColor = 'text-red-600';
				}
			}
		}
	});
</script>

<div id={`card-case${id}`} class="cardbox w-72 h-fit rounded-md">
	<!-- Title -->
	<div class="h-16 mt-4 mb-2 ml-4 mr-4 rounded-md" style="background-image: url({labelBG})">
		<div class="w-64 h-16 rounded-md flex items-center">
			<slot name="label1" />
			<slot name="label2" />
			<div class="pl-2 text-lg truncate" id="card-case-title">
				<span>{title}</span>
			</div>
			<div class="flex-grow" />
			<slot name="label3" />
			<slot name="label4" />
		</div>
	</div>
	<CardImage {id} {holofoil} {cardImg} />
	<slot name="footer" />
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.cardbox {
		box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 5px 8px 0px rgba(0, 0, 0, 0.14),
			0px 1px 14px 0px rgba(0, 0, 0, 0.12);
	}
</style>
