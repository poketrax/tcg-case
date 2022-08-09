<script lang="ts">
	import promo from '../assets/promo.svg';
	import {
		mdiStar,
		mdiStarHalfFull,
		mdiStarOutline,
		mdiShimmer,
		mdiCheckboxBlankCircle,
		mdiRhombus
	} from '@mdi/js';

	let klass = 'h-6 w-6';
	export { klass as class };
	export let rarity: string;
	export let color: string = "black"

	function getSrc(svg: string): string {
		let data = btoa(svg)
		return `data:image/svg+xml;base64,${data}`;
	}
</script>

<div class="flex items-center ">
	{#if rarity === 'Holo Rare'}
		<img
			class="object-contain {klass}"
			src={getSrc(`<svg viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
							<text y="21" style="font: 24px sans-serif;fill: ${color};">H</text>
							<path fill="${color}" transform="translate(20, 0)" d="${mdiStar}" />
						</svg>`)}
			alt={rarity}
		/>
	{:else if rarity === 'Common'}
		<img
			class="object-contain {klass}"
			src={getSrc(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="${color}" d="${mdiCheckboxBlankCircle}" />
						</svg>`)}
			alt={rarity}
		/>
	{:else if rarity === 'Uncommon'}
		<img
			class="object-contain {klass}"
			src={getSrc(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="${color}" d="${mdiRhombus}" />
						</svg>`)}
			alt={rarity}
		/>
	{:else if rarity === 'Ultra Rare' || rarity === 'Rare BREAK' || rarity === 'Classic Collection'}
		<img
			class="object-contain {klass}"
			src={getSrc(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="${color}" d="${mdiStarHalfFull}" />
						</svg>`)}
			alt={rarity}
		/>
	{:else if rarity === 'Secret Rare'}
		<img
			class="object-contain {klass}"
			src={getSrc(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="${color}" d="${mdiStarOutline}" />
						</svg>`)}
			alt={rarity}
		/>
	{:else if rarity === 'Amazing Rare'}
		<img
			class="object-contain {klass}"
			src={getSrc(`<svg viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
							<defs>
								<clipPath clipPathUnits="userSpaceOnUse" id="a">
									<path
										d="M3.958 2.86c-.418.04-.846.074-.55.542-.562-.09-.838.058-.85.425-.356-.295-.656-.254-.92 0-.121-.52-.392-.461-.711-.274.203-.52-.048-.789-.545-.842.46-.376.283-.518-.287-.819.554-.001.863-.176.49-.834.496.115.685-.11.577-.783.41.535.703.76.885.166.235.697.624.032.782-.322.141 1.113.45.755.587.733-.105.54.317.461.641.403-.49.28-.626.687.02.846-.32.18-.816.315-.119.758Z"
										fill="none"
									/>
								</clipPath>
							</defs>
							<g clip-path="url(#a)" transform="matrix(4.01809 0 0 4.0453 -.382 -.481)">
								<path d="m1.188 3.06-.261.493.71.273h.92l.177-.359-.372-.626h-.426Z" fill="#8f4496" /><path
									d="m4.136 2.968-1.161.9-.848-1.399-.089.001.03-.098-.055-.09.263-.55Z"
									fill="#e7450c"/>
								<path
									d="m.456 1.842 1.117.52-.385.698-.261.493-.545-.842-.287-.819Z"
									fill="#e64293"/>
								<path d="m1.162.275.463 1.83-.052.257-1.117-.52.128-.784Z" fill="#0098d9" /><path
									d="m1.162.275.463 1.83.524-.583.47-1.02-.572-.06Z"
									fill="#e1041d"/>
								<path d="m2.619.502.21-.383.587.733.641.403-1.78.479-.128-.212Z" fill="#fee001" /><path
									d="M3.958 2.86 2.277 1.733l1.78-.48.02.847Z"
									fill="#00a255"/>
							</g>
							<path
								d="M9.358 11.897h2.757l-2.54-6.221H8.25v2.168l.45 1.67h-.446v1.497h.856zm-2.21 0H4.392l2.535-6.221h1.326v2.168l-.442 1.67h.442v1.497h-.856Z"
								fill="#fff"/>
						</svg>`)}
			alt={rarity}
		/>
	{:else if rarity === 'Promo'}
		<img class="object-contain {klass}" alt="promo" src={promo} />
	{:else if rarity === 'Shiny Holo Rare'}
		<img
			class="object-contain {klass}"
			alt={rarity}
			src={getSrc(`<svg viewBox="0 0 44 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="${color}" d="${mdiShimmer}" />
							<path fill="${color}" transform="translate(20, 0)" d="${mdiStar}" />
						</svg>`)}
		/>
	{:else}
		<img
			class="object-contain {klass}"
			src={getSrc(`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
							<path fill="${color}" d="${mdiStar}" />
						</svg>`)}
			alt={rarity}
		/>
	{/if}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
