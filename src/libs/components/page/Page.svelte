<script lang="ts">
import { Header, Footer } from '../index'
</script>

<div class="flex flex-col w-full h-screen md:h-auto overflow-hidden space-y-4">
    <Header />
	<slot></slot>
    <Footer />
</div>