<script lang="ts">
    import "../styles/vendor/app.sass";
	import { Header, Page, Footer } from '$libs/components/index'
	import { theme } from '$libs/stores/theme'
</script>

<Page>
    <slot />
</Page>
