<script>
	import CardCase from './CardCase.svelte';
    import CardImage from './CardImage.svelte';
	import Energy from './Energy.svelte';
	import { Meta, Story } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="Card/CardCase"
	component={CardCase}
	argTypes={{
		title: { control: 'text' },
		labelBG: {
			control: { type: 'select' },
			options: [
				'static/fire-rev.png'
			]
		}
	}}
    args={{
        title: "Default",
        labelBG: ""
    }}
/>

<Story name="Pokemon">
    <CardCase labelBG={"static/fire-rev.png"} title={"Charizard"}>
		<Energy slot="label1" class="energy m-2"/>
		<img slot="label3" src=""/>
        <CardImage slot="image" cardImg="static/charizard.jpeg" holofoil={true} id={1}/>

    </CardCase>
</Story>

<style global>
	.energy{
		width: 48px;
		height: 48px;
	}
</style>