<script>
	import CardGradeStamp from './CardGradeStamp.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="Card/CardGradeStamp"
	component={CardGradeStamp}
	argTypes={{
		grade: { control: { type: 'number', min: 1, max: 10, step: 0.5 } },
		grader: {
			control: { type: 'select' },
			options: ['PSA', 'CGC', 'BGS', 'ACE']
		},
		modifier: {
			control: { type: 'select' },
			options: ['', 'P']
		}
	}}
/>

<Template let:args>
	<CardGradeStamp {...args} />
</Template>
<Story name="All">
	<div class="flex items-center">
		<CardGradeStamp grade={10} grader="PSA" />
		<CardGradeStamp grade={10} grader="CGC" />
		<CardGradeStamp grade={10} grader="CGC" modifier="P" />
		<CardGradeStamp grade={10} grader="BGS" modifier="P" />
		<CardGradeStamp grade={10} grader="BGS" />
		<CardGradeStamp grade={9} grader="BGS" />
		<CardGradeStamp grade={10} grader="ACE" />
	</div>
</Story>
<Story name="PSA" args={{ grade: 10, grader: 'PSA' }}/>
<Story name="CGC" args={{ grade: 10, grader: 'CGC' }} />
<Story name="CGC Pristine" args={{ grade: 10, grader: 'CGC', modifier: 'P' }} />
<Story name="BGS Perfect" args={{ grade: 10, grader: 'BGS', modifier: 'P' }} />
<Story name="BGS Gold" args={{ grade: 10, grader: 'BGS' }} />
<Story name="BGS Silver" args={{ grade: 9, grader: 'BGS' }} />
