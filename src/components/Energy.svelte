<script lang="ts">
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
	import { Buffer } from 'buffer';

	let clazz = 'w-8 h-8';
	export { clazz as class };
	export let type = '';

	let data = Buffer.from(
		`<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12ZM5.07089 13C5.55612 16.3923 8.47353 19 12 19C15.5265 19 18.4439 16.3923 18.9291 13H14.8293C14.4174 14.1652 13.3062 15 12 15C10.6938 15 9.58251 14.1652 9.17068 13H5.07089ZM18.9291 11C18.4439 7.60771 15.5265 5 12 5C8.47353 5 5.55612 7.60771 5.07089 11H9.17068C9.58251 9.83481 10.6938 9 12 9C13.3062 9 14.4174 9.83481 14.8293 11H18.9291ZM12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
				/>
			</svg>`).toString('base64')
	let pokeball = `data:image/svg+xml;base64,${data}`
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
	<img class={clazz} alt={type} src={pokeball} />
{/if}

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
