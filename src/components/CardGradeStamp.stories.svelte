<script>
	import CardGradeStamp from './CardGradeStamp.svelte';
	import { Meta, Story, Template } from '@storybook/addon-svelte-csf';
</script>

<Meta
	title="Card/CardGradeStamp"
	component={CardGradeStamp}
	argTypes={{
        grade: { control: { type: 'number', min:1, max:10, step: .5 } },
        grader: { 
          control: { type: 'select' },
          options: ['PSA', 'CGC', 'BGS', 'ACE'],
        },
        modifier: { 
          control: { type: 'select' },
          options: ['','P'],
        },
      }}
/>

<Template let:args>
	<CardGradeStamp {...args} />
</Template>

<Story name="PSA" args={{ grade: 10, grader: "PSA"}} />
<Story name="CGC" args={{ grade: 10, grader: "CGC"}} />
<Story name="BGS" args={{ grade: 10, grader: "BGS"}} />