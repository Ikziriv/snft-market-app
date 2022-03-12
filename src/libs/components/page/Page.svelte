<script lang="ts">
import { Header, Footer } from '../index'
</script>

<div class="flex flex-col w-full h-auto overflow-hidden space-y-0">
    <Header />
	<slot></slot>
    <Footer />
</div>