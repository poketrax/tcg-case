<script lang="ts">
	import promo from '../assets/promos.png';
	import {
		mdiStar,
		mdiStarHalfFull,
		mdiStarOutline,
		mdiShimmer,
		mdiCheckboxBlankCircle,
		mdiRhombus
	} from '@mdi/js';

	let klass = 'text-black mt-0 mb-0 w-5 h-5';
	export { klass as class };
	export let rarity: string;
	export let width = "24px";
	export let height = "24px";
</script>

{#if rarity === 'Holo Rare'}
	<div class="flex">
		<span>H</span>
		<svg class={klass} viewBox="24 24 0 0" style="width:{width};height:{height};">
			<path d={mdiStar} />
		</svg>
	</div>
{:else if rarity === 'Common'}
	<svg class={klass} style="width:{width};height:{height};">
		<path d={mdiCheckboxBlankCircle} />
	</svg>
{:else if rarity === 'Uncommon'}
	<svg class={klass} style="width:{width};height:{height};">
		<path d={mdiRhombus} />
	</svg>
{:else if rarity === 'Ultra Rare' || rarity === 'Rare BREAK' || rarity === 'Classic Collection'}
	<svg class={klass} style="width:{width};height:{height};">
		<path d={mdiStarHalfFull} />
	</svg>
{:else if rarity === 'Secret Rare'}
	<svg class={klass} style="width:{width};height:{height};">
		<path d={mdiStarOutline} />
	</svg>
{:else if rarity === 'Amazing Rare'}
	<svg class={klass} style="width:{width};height:{height};"
		><defs
			><clipPath clipPathUnits="userSpaceOnUse" id="a"
				><path
					d="M3.958 2.86c-.418.04-.846.074-.55.542-.562-.09-.838.058-.85.425-.356-.295-.656-.254-.92 0-.121-.52-.392-.461-.711-.274.203-.52-.048-.789-.545-.842.46-.376.283-.518-.287-.819.554-.001.863-.176.49-.834.496.115.685-.11.577-.783.41.535.703.76.885.166.235.697.624.032.782-.322.141 1.113.45.755.587.733-.105.54.317.461.641.403-.49.28-.626.687.02.846-.32.18-.816.315-.119.758Z"
					fill="none"
				/></clipPath
			></defs
		><g clip-path="url(#a)" transform="matrix(4.01809 0 0 4.0453 -.382 -.481)"
			><path d="m1.188 3.06-.261.493.71.273h.92l.177-.359-.372-.626h-.426Z" fill="#8f4496" /><path
				d="m4.136 2.968-1.161.9-.848-1.399-.089.001.03-.098-.055-.09.263-.55Z"
				fill="#e7450c"
			/><path d="m.456 1.842 1.117.52-.385.698-.261.493-.545-.842-.287-.819Z" fill="#e64293" /><path
				d="m1.162.275.463 1.83-.052.257-1.117-.52.128-.784Z"
				fill="#0098d9"
			/><path d="m1.162.275.463 1.83.524-.583.47-1.02-.572-.06Z" fill="#e1041d" /><path
				d="m2.619.502.21-.383.587.733.641.403-1.78.479-.128-.212Z"
				fill="#fee001"
			/><path d="M3.958 2.86 2.277 1.733l1.78-.48.02.847Z" fill="#00a255" /></g
		><path
			d="M9.358 11.897h2.757l-2.54-6.221H8.25v2.168l.45 1.67h-.446v1.497h.856zm-2.21 0H4.392l2.535-6.221h1.326v2.168l-.442 1.67h.442v1.497h-.856Z"
			fill="#fff"
		/></svg
	>
{:else if rarity === 'Promo'}
	<img class={klass} style="width:{width};height:{height};" alt="promo" src={promo} />
{:else if rarity === 'Shiny Holo Rare'}
	<div class="flex" >
		<svg class={klass} style="width:{width};height:{height};">
			<path d={mdiShimmer} />
		</svg>
		<svg class={klass} style="width:{width};height:{height};">
			<path d={mdiStar} />
		</svg>
	</div>
{:else}
	<svg class={klass} style="width:{width};height:{height};">
		<path d={mdiStar} />
	</svg>
{/if}

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
