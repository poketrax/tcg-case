<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	
	export let id: string;
	export let cardImg: string;
	export let opacity: number = 1;
	export let holofoil: boolean = false;
	export let overlay: string = '';
	export let overlay_mask: String = '';
	export let width = '256px';
	export let height = '360px';

	let clazz = '';
	export { clazz as class };

	function onClick(event) {
		dispatch('click', event);
	}

	const preload = async (src) => {
		const resp = await fetch(src);
		const blob = await resp.blob();

		return new Promise<string>(function (resolve) {
			let reader = new FileReader();
			reader.readAsDataURL(blob);
			reader.onload = () => resolve(reader.result as string);
			reader.onerror = (error) => preload('./assets/pokemon-back.png');
		});
	};

	const rainbowHolo = `linear-gradient(
                            90deg,
                            rgba(255, 0, 0, 1) 0%,
                            rgba(255, 154, 0, 1) 10%,
                            rgba(208, 222, 33, 1) 20%,
                            rgba(79, 220, 74, 1) 30%,
                            rgba(63, 218, 216, 1) 40%,
                            rgba(47, 201, 226, 1) 50%,
                            rgba(28, 127, 238, 1) 60%,
                            rgba(95, 21, 242, 1) 70%,
                            rgba(186, 12, 248, 1) 80%,
                            rgba(251, 7, 217, 1) 90%,
                            rgba(255, 0, 0, 1) 100%`;
</script>

<div class="relative">
	{#await preload(cardImg)}
		<div class="absolute flex items-center justify-center w-72 h-[360px]">
			<div class="lds-ring">
				<div />
				<div />
				<div />
			</div>
		</div>
	{:then base64}
		<div class="flex justify-center align-middle {clazz}">
			<img
				class={`cursor-pointer ${clazz}`}
				style={`opacity: ${opacity ?? 1}; width: ${width}; height: ${height}`}
				id={`${id}`}
				src={base64}
				alt="card-img${id}"
				on:click={onClick}
			/>
			{#if overlay !== ''}
				<div class="absolute {clazz}" style="width: {width}; height: {height}">
					<img
						class="flex items-center justify-center {clazz}"
						style="width: {width}; height: {height}; {overlay_mask}"
						alt="holo-overlay"
						src={overlay}
						on:click = {onClick}
					/>
				</div>
			{/if}
			{#if holofoil}
				<div class="absolute {clazz}" style="width:{width}; height:{height}">
					<div
						class="flex items-center justify-center opacity-30 {clazz}"
						style="background:{rainbowHolo}; width:{width}; height:{height}"
						on:click={onClick}
					/>
				</div>
			{/if}
		</div>
	{/await}
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;

	.lds-ring {
		display: inline-block;
		position: relative;
		width: 80px;
		height: 80px;
	}
	.lds-ring div {
		box-sizing: border-box;
		display: block;
		position: absolute;
		width: 64px;
		height: 64px;
		margin: 8px;
		border: 8px solid #fff;
		border-radius: 50%;
		animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
		border-color: #fff transparent transparent transparent;
	}
	.lds-ring div:nth-child(1) {
		animation-delay: -0.45s;
	}
	.lds-ring div:nth-child(2) {
		animation-delay: -0.3s;
	}
	.lds-ring div:nth-child(3) {
		animation-delay: -0.15s;
	}
	@keyframes lds-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
