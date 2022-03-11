<script lang="ts">
	import { Header, Page, Footer } from '$libs/components/index'
	import { theme } from '$libs/stores/theme'
    
    import "../styles/vendor/app.sass";
</script>

<Page>
    <slot />
</Page>
