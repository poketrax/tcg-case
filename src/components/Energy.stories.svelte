<script>
	import { Meta, Story } from '@storybook/addon-svelte-csf';
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
	args={{
		type: ''
	}}
/>

<Story name="Default" let:args>
	<Energy type={args.type} />
</Story>

<Story name="Custom Size" let:args>
	<Energy type={args.type} class="customEnergy" />
</Story>

<style global>
	.customEnergy {
		width: 128px;
		height: 128px;
	}
</style>
