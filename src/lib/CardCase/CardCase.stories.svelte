<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
	import CardCase from './CardCase.svelte';
	import CardImage from '../CardImage/CardImage.svelte';
	import Energy from '../Energy/Energy.svelte';
	import Price from '../Price/Price.svelte';
	import CardGradeStamp from '../CardGradeStamp/CardGradeStamp.svelte';
	import PokeRarity from '../PokeRarity/PokeRarity.svelte';
</script>

<Meta
	title="Card/CardCase"
	component={CardCase}
	argTypes={{
		title: { control: 'text' },
		labelBG: {
			control: { type: 'select' },
			options: ['static/fire-rev.png']
		}
	}}
	args={{
		title: 'Default',
		labelBG: ''
	}}
/>

<Story name="Pokemon">
	<CardCase labelBG={'static/fire-rev.png'} title={'Charizard'}>
		<Energy type="fire" slot="label1" class="h-8 ml-2" />
		<img slot="label3" alt="1st-ed" src="static/1st-edition.png" class="h-6 object-contain" />
		<CardGradeStamp slot="label4" grade={10} grader={'BGS'} />
		<CardImage slot="image" cardImg="static/charizard.jpeg" holofoil={true} id={1} />
		<img slot="footer1" alt="set" src="static/1st-edition.png" class="h-4 m-2 object-contain" />
		<Price slot="footer2" price={10000} paid={3000} />
		<span slot="footer3">004</span>
		<PokeRarity slot="footer4" rarity="Holo Rare" />
	</CardCase>
</Story>

<style global>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
	.ml2 {
	}
</style>
