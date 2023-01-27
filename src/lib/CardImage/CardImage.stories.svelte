<script>
	import CardImage from './CardImage.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="Card/CardImage"
	component={CardImage}
	argTypes={{
		holofoil: { control: 'boolean' },
		overlay: { control: 'text' },
		overlay_mask: {control: 'text'},
		cardImg: {
			control: { type: 'select' },
			options: [
				'charizard.jpeg',
				'bewd.webp',
				'Cal-Ripken.jpg',
				'blacklotus.webp'
			]
		},
		opacity: { control: { type: 'number', min: 0, max: 1, step: 0.1 } }
	}}
/>

<Template let:args>
	<CardImage {...args} />
</Template>

<Story name="Default" args={{ cardImg: 'blacklotus.webp' }} />
<Story name="Holo Foil" args={{ cardImg: 'bewd.webp', holofoil: true, class: "rounded-md" }} />
<Story name="Overlay" args={{ cardImg: 'charizard.jpeg', overlay: 'static/fire-rev.png', overlay_mask: 'clip-path: polygon(0% 0%, 0% 100%, 12% 100%, 11% 11%, 89% 11%, 89% 52%, 11% 52%, 11% 100%, 100% 100%, 100% 0%);', class:"rounded-md" }} />

<style>
	.rounded-md{}
</style>
