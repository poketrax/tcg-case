<script lang="ts">
	export let id: number = 0;
	//path to label background
	export let labelBG: string;
	//Title for card case
	export let title: string;
	//Title Color
	export let titleColor: string = "black"

	let clazz = 'w-72 h-fit';
	export { clazz as class };

</script>

<div id={`card-case${id}`} class="cardbox pt-4 pb-2 rounded-md {clazz}">
	<!-- Title -->
	<div class="h-16 mb-2 ml-4 mr-4 rounded-md" style="background-image: url({labelBG})">
		<div class="w-64 h-16 rounded-md flex items-center">
			<slot name="label1" />
			<slot name="label2" />
			<div class="pl-2 text-lg truncate" id="card-case-title">
				<span style={`color:${titleColor}`}>{title}</span>
			</div>
			<div class="flex-grow" />
			<slot name="label3" />
			<slot name="label4" />
		</div>
	</div> 
	<slot name="image" />
	<div class="h-8 pl-4 pr-4 pt-2 flex justify-center items-center">
		<slot name="footer1"/>
		<span class="grow" />
		<slot name="footer2"/>
		<span class="grow" />
		<slot name="footer3"/>
		<span class="grow" />
		<slot name="footer4"/>
	</div>
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
