<script>
	import PokeRarity from './PokeRarity.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
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
				'Rare BREAK',
				'Classic Collection',
				'Amazing Rare',
				'Shiny Holo Rare',
				'Promo'
			]
		},
		class: { control: 'text' }
	}}
/>

<Template let:args>
	<PokeRarity {...args} />
</Template>

<Story name="Default" args={{ rarity: 'common' }} />
