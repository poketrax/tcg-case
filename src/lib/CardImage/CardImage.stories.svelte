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
		cardImg: {
			control: { type: 'select' },
			options: [
				'static/charizard.jpeg',
				'static/bewd.webp',
				'static/Cal-Ripken.jpg',
				'static/blacklotus.webp'
			]
		},
		opacity: { control: { type: 'number', min: 0, max: 1, step: 0.1 } }
	}}
/>

<Template let:args>
	<CardImage {...args} />
</Template>

<Story name="Default" args={{ cardImg: 'static/blacklotus.webp' }} />
<Story name="Holo Foil" args={{ cardImg: 'static/bewd.webp', holofoil: true }} />
<Story name="Overlay" args={{ cardImg: 'static/charizard.jpeg', overlay: 'static/fire-rev.png' }} />