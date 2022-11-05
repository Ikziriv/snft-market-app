<script lang="ts">

</script>

<svelte:head>
	<title>Login | With Svelte</title>
</svelte:head>

<section class="container flex-grow px-2 text-2xl md:px-0">
	<span class="text-lg font-bold">Login</span>

	<div class="grid grid-cols-12 gap-6">
	<div class="col-span-12 lg:col-span-5">
		<p>You are not logged in!</p>
		<p>
			Please enter your email to login, using the latest in <strong
				>Passwordless Authentication</strong
			> 🪄💌!
		</p>
	</div>
	<form
		class="col-span-12 mt-1 flex flex-col gap-6 lg:order-1 lg:col-span-7"
	>
		<input
			class="w-full rounded p-4 shadow"
			name="email"
			type="email"
			aria-label="email"
			placeholder="example@with-svelte.com"
			required
		/>
		<button type="submit" class="px-8 py-4 bg-gray-700">
			<span class="font-bold text-sm">Send Link</span>
		</button>
	</form>
	</div>
</section>