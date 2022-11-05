<script lang="ts">
	import {onMount} from 'svelte'

	onMount(async () => {
		// 
	})
</script>

<svelte:head>
	<title>Confirm Login | With Svelte</title>
</svelte:head>

<section class="container flex-grow px-2 text-2xl md:px-0">
	<span class="text-lg font-bold">Confirm your email to login</span>
	<div class="grid grid-cols-12 gap-4">
		<div class="col-span-12 lg:col-span-5">
			<p class="mb-2">
				We know you just clicked a magic link, but maybe you’re logging in
				from a different device to where you requested the login?
			</p>
			<p class="mb-4">
				In any case, please fill in your email address and submit this form!
			</p>
		</div>
		<form
			class="col-span-12 lg:col-span-7 flex flex-col mt-1 gap-6"
		>
			<input
				class="w-full shadow p-4 rounded"
				name="email"
				type="email"
				aria-label="email"
				placeholder="example@with-svelte.com"
				required
			/>
			<button type="submit" class="px-8 py-4 bg-gray-700">
				<span class="font-bold text-sm">Login Here</span>
			</button>
		</form>
	</div>
</section>