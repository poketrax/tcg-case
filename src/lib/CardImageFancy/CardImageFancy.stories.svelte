<script>
	import CardImageFancy from './CardImageFancy.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="Card/CardImageFancy"
	component={CardImageFancy}
	argTypes={{
		cardImg: {
			control: { type: 'select' },
			options: [
				'charizard.jpeg',
				'bewd.webp',
				'Cal-Ripken.jpg',
				'blacklotus.webp',
				'Pokemon-GO-Charizard-010.jpg'
			]
		},
		height: { control: 'text' },
		width: { control: 'text' },
		holoEffect: {
			control: { type: 'select' },
			options: [
				'basic',
				'reverse trainer',
				'rare holo',
				'rare holo wotc',
				'rare holo galaxy',
				'rare ultra',
				'rare rainbow',
				'rare rainbow alt',
				'radiant',
				'rare secret',
				'rare holo v',
				'rare holo vmax',
				'rare holo vstar'
			]
		},
	}}
/>

<Template let:args>
	<div class="showcase">
		<CardImageFancy {...args} />
	</div>
</Template>

<Story name="Default" args={{ cardImg: 'blacklotus.webp' }} />
<Story name="Holo Foil" args={{ cardImg: 'bewd.webp', holofoil: true, class: 'rounded-md' }} />
<Story
	name="Overlay"
	args={{ cardImg: 'charizard.jpeg', overlay: 'static/fire-rev.png', class: 'rounded-md' }}
/>

<style>
	.rounded-md {
	}

	.showcase {
		z-index: 99;
		max-width: min(330px, 80vw);
		margin: auto;
	}
</style>
