<script>
	import Price from './Price.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="Asset/Price"
	component={Price}
	argTypes={{
		price: { control: { type: 'number', step: 0.1 } },
		paid: { control: { type: 'number', step: 0.1 } },
		class: { control: 'text' }
	}}
/>

<Template let:args>
	<Price {...args} />
</Template>

<Story name="Default" />
<Story name="To The Moon" args={{ price: 100, paid: 10 }} />
<Story name="Paper hands" args={{ price: 10, paid: 100 }} />
