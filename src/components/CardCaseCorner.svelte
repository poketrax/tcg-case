<script lang="ts">
    import { Button, Icon } from "svelte-materialify";
    import { mdiPlus } from "@mdi/js";
    import "../assets/css/smui-dark.css";
    import "../assets/css/smui.css";

    export let id: number;
    export let grade: number;
    export let grader: string;
    export let modifier: string;

    let gradeClass: string;

    if (grade != null && grade != 0) {
        gradeClass =
            "w-14 border-2 bg-white rounded-md border-gray-600 m-2 flex flex-col items-center";
        if (grader === "BGS") {
            if (grade === 8.5 || grade === 9) {
                gradeClass =
                    "w-14 border-2 rounded-md border-gray-600 opacity-100 m-2 bg-slate-300 flex flex-col items-center";
            } else if (grade === 9.5 || grade === 10) {
                gradeClass =
                    "w-14 border-2 rounded-md border-gray-600 opacity-100 bg-yellow-600 m-2 flex flex-col items-center";
            }
        }
        if (modifier === "P") {
            if (grader === "CGC") {
                gradeClass =
                    "w-14 border-2 rounded-md bg-white border-yellow-500 m-2 text-yellow-600 flex flex-col items-center";
            } else {
                gradeClass =
                    "w-14 border-2 bg-black opacity-100 rounded-md border-gray-600 bg m-2 text-yellow-600 flex flex-col items-center";
            }
        }
    }
</script>

{#if grade}
    <div class={gradeClass}>
        <div class="text-2xl">{grade}</div>
        <div class="text-xs">{grader}</div>
    </div>
{:else}
    <div class="min-w-10 m-2">
        <Button fab aria-label="Add Card to Collection" size="small" class="bg-gray-200">
            <Icon path={mdiPlus} />
        </Button>
    </div>
{/if}
