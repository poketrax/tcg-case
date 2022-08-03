<script>
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
	import Energy from './Energy.svelte';
</script>

<Meta
	title="Asset/Energy"
	component={Energy}
	argTypes={{
		type: {
			control: { type: 'select' },
			options: [
                '',
				'colorless',
				'darkness',
				'dragon',
				'fairy',
				'fighting',
				'fire',
				'grass',
				'lightning',
				'metal',
				'psychic',
				'water'
			]
		},
		class: { control: 'text' }
	}}
/>

<Template let:args>
	<Energy {...args} />
</Template>

<Story name="Default" args={{ type: '' }} />
