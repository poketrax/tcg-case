<script lang="ts">
	let klass = 'w-14';
	export { klass as class };
	export let grade: number;
	export let grader: string;
	export let modifier: string = "";

	let gradeClass: string;
	let baseGradeClass = "border-2 rounded-md m-2 flex flex-col items-center"

	if (grade != null && grade != 0) {
		gradeClass = `${baseGradeClass} border-gray-600 bg-white`;
		if (grader === 'BGS') {
			if (grade === 8.5 || grade === 9) {
				gradeClass =
					`${baseGradeClass} border-gray-600 opacity-100 bg-slate-300`;
			} else if (grade === 9.5 || grade === 10) {
				gradeClass =
					`${baseGradeClass} border-gray-600 opacity-100 bg-yellow-600`;
			}
		}
		if (modifier === 'P') {
			if (grader === 'CGC') {
				gradeClass =
					`${baseGradeClass} bg-white border-yellow-500 text-yellow-600`;
			} else {
				gradeClass =
					`${baseGradeClass} bg-black opacity-100 border-gray-600 text-yellow-600`;
			}
		}
	}
</script>

<div class={`${gradeClass} ${klass}`}>
	<div class="text-2xl">{grade}</div>
	<div class="text-xs">{grader}</div>
</div>

<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>
