<script>
	import PokeRarity from './PokeRarity.svelte';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="Asset/PokeRarity"
	component={PokeRarity}
	argTypes={{
		rarity: {
			control: { type: 'select' },
			options: [
				'Common',
				'Uncommon',
				'Rare',
				'Holo Rare',
				'Ultra Rare',
				'Secret Rare',
				'Amazing Rare',
				'Shiny Holo Rare',
				'Promo'
			]
		},
		class: { control: 'text' },
		color: { control: 'color'}
	}}
	args={{
		rarity: 'Common'
	}}
/>

<Story name="Default" let:args>
	<PokeRarity {...args}/>
</Story>

<Story name="All">
	<div class="flex items-center">
		<PokeRarity rarity="Common" />
		<PokeRarity rarity="Uncommon" />
		<PokeRarity rarity="Rare" />
		<PokeRarity rarity="Holo Rare" />
		<PokeRarity rarity="Ultra Rare" />
		<PokeRarity rarity="Secret Rare" />
		<PokeRarity rarity="Shiny Holo Rare" />
		<PokeRarity rarity="Amazing Rare" />
		<PokeRarity rarity="Promo" />
	</div>
</Story>

<Story name="Custom Size">
	<PokeRarity rarity="Common" class="customSize" />
	<style>
		.customSize {
			height: 128px;
			width: 128px;
		}
	</style>
</Story>

<style global>
	.customSize {
		height: 128px;
		width: 128px;
	}
</style>
