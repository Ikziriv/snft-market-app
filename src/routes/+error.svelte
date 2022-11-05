<script lang="ts" context="module">
	import type { ErrorLoad } from '@sveltejs/kit';
	export const load: ErrorLoad = ({
		error,
		status,
	}): {
		props: {
			title: string;
			status: any;
			error: any;
		};
	} => ({
		props: {
			title: `${status}: ${error?.message || ''}`,
			status,
			error,
		},
	});
</script>
<script lang="ts">
	// Start: Local Imports
	// Models

	//  Components

	// Start: Sevelte Imports
	import { dev } from '$app/env';
	// End: Sevelte Imports
	// End: Local Imports
	// Start: Exported Properties
	export let status: string;
	export let error: Error;
	// End: Exported Properties
</script>
<!-- Start: Header Tage -->

<!-- End: Header Tage -->
<!-- Start: Error View Layout -->
<section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
	<div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div class="max-w-md text-center">
			<h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
                <!-- Start: Error Status Code -->
				<span class="sr-only">{error.name}</span>{status}
                <!-- End: Error Status Code -->
			</h2>
			<p class="text-sm font-normal md:text-lg">
                Sorry, we couldn't find 
                <!-- Start: Error Message container -->
                {#if dev && error.stack}
                    <pre> {error.message} </pre>
                {/if}.
                <!-- End: Error Message container -->
            </p>
			<p class="mt-4 mb-8 dark:text-gray-400 max-w-xs">But dont worry, you can find plenty of other things on our homepage.</p>
			
			<a sveltekit:prefetch href="/" class="hidden px-6 py-2 font-semibold rounded-full bg-blue-500 text-white border lg:block">Back to Home</a>
		</div>
	</div>
</section>
<!-- End: Error View Layout -->
<style></style>