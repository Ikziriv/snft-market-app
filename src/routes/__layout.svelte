<script lang="ts">
	import Page from '../libs/components/page/Page.svelte'
	import { theme } from '../libs/stores/theme'
    
    import "../styles/app.css";
</script>

<Page>
    <slot />
</Page>

<style>
</style>
