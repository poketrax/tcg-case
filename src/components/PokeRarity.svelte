<script lang="ts">
	import Amazing from '../assets/Amazing.svelte';
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
</script>

{#if rarity === 'Holo Rare'}
	<span>H</span>
	<div class={klass}>{mdiStar}</div>
{:else if rarity === 'Common'}
	<div class={klass}>{mdiCheckboxBlankCircle}</div>
{:else if rarity === 'Uncommon'}
	<div class={klass}>{mdiRhombus}</div>
{:else if rarity === 'Ultra Rare' || rarity === 'Rare BREAK' || rarity === 'Classic Collection'}
	<div class={klass}>{mdiStarHalfFull}</div>
{:else if rarity === 'Secret Rare'}
	<div class={klass}>{mdiStarOutline}</div>
{:else if rarity === 'Amazing Rare'}
	<Amazing />
{:else if rarity === 'Promo'}
	<img class={klass} alt="promo" src={promo} />
{:else if rarity === 'Shiny Holo Rare'}
	<span class={klass}>{mdiShimmer}</span>
	<span class={klass}>{mdiStar}</span>
{:else}
	<span class={klass}>{mdiStar}</span>
{/if}
