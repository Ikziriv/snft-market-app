<script lang="ts">
import { Header, Footer } from '$libs/components/index'
import styles from "./Page.module.sass";
</script>

<div class={styles.page}>
    <Header />
	<slot></slot>
    <Footer />
</div>