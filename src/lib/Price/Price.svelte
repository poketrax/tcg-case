<script lang="ts">
    import { beforeUpdate } from "svelte";

    let klass = '';
	export { klass as class };
    export let price: number;
    export let paid: number;

    let priceDisplay = `$-.--`;
    let color = "";

    beforeUpdate(() => {
        if (price != null) {
            priceDisplay = `$${price.toFixed(2).toString()}`;
            if (paid != null && paid !== 0) {
                if (paid <= price) {
                    priceDisplay = `⬆︎ ${priceDisplay}`;
                    color = "text-green-600";
                } else {
                    priceDisplay = `⬇︎ ${priceDisplay}`;
                    color = "text-red-600";
                }
            }
        }
    });
</script>
<span class={`${klass} ${color}`}>{priceDisplay}</span>
<style>
	@tailwind base;
	@tailwind components;
	@tailwind utilities;
</style>

