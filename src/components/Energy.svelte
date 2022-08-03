<script lang="ts">
	import Pokeball from '../assets/pokeball.svelte';
	import colorless from '../assets/energy/colorless.png';
	import darkness from '../assets/energy/darkness.png';
	import dragon from '../assets/energy/dragon.png';
	import fairy from '../assets/energy/fairy.png';
	import fighting from '../assets/energy/fighting.png';
	import fire from '../assets/energy/fire.png';
	import grass from '../assets/energy/grass.png';
	import lightning from '../assets/energy/lightning.png';
	import metal from '../assets/energy/metal.png';
	import psychic from '../assets/energy/psychic.png';
	import water from '../assets/energy/water.png';

	let clazz = 'w-8 h-8';
	export { clazz as class };
	export let type = '';
</script>

{#if type === 'colorless'}
	<img class={clazz} alt={type} src={colorless} />
{:else if type === 'darkness'}
	<img class={clazz} alt={type} src={darkness} />
{:else if type === 'dragon'}
	<img class={clazz} alt={type} src={dragon} />
{:else if type === 'fairy'}
	<img class={clazz} alt={type} src={fairy} />
{:else if type === 'fighting'}
	<img class={clazz} alt={type} src={fighting} />
{:else if type === 'fire'}
	<img class={clazz} alt={type} src={fire} />
{:else if type === 'grass'}
	<img class={clazz} alt={type} src={grass} />
{:else if type === 'lightning'}
	<img class={clazz} alt={type} src={lightning} />
{:else if type === 'metal'}
	<img class={clazz} alt={type} src={metal} />
{:else if type === 'psychic'}
	<img class={clazz} alt={type} src={psychic} />
{:else if type === 'water'}
	<img class={clazz} alt={type} src={water} />
{:else}
	<Pokeball class={clazz} />
{/if}

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
