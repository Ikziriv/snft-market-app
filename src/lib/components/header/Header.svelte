<script lang="ts">
	// Start: Local Imports
	// Models
	// Components
	import { NavigationProgressBar } from '$shared/navigation';
	// End: Local Imports

	// Local properties
</script>
<!-- Start: Navigation Progress bar -->
<NavigationProgressBar />
<!-- End: Navigation Progress bar -->

<header class="p-4 px-2 md:px-16 bg-gray-50 dark:bg-gray-800 dark:text-gray-100 border-b">
	<div class="container flex justify-between h-16 mx-auto">
        <div class="flex items-start md:space-x-4 py-2">
            <a  sveltekit:prefetch rel="noopener noreferrer" href="/" aria-label="Back to homepage" class="flex items-center p-0 pr-4 md:pr-4">
				<div class="flex items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="currentColor" class="flex-shrink-0 w-5 h-5 rounded-full dark:text-gray-900">
						<path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
					</svg>
				</div>
				<span class="self-center text-2xl font-black">NFTX</span>
            </a>
            <ul class="items-stretch hidden space-x-3 lg:flex py-4 pl-4 md:pl-4 border-l">
                <li class="flex">
                    <a  sveltekit:prefetch rel="noopener noreferrer" href="/discover" class="flex items-center font-semibold px-4 -mb-1 dark:text-violet-400 dark:border-violet-400">
                        Discover
                    </a>
                </li>
                <li class="flex">
                    <a  sveltekit:prefetch rel="noopener noreferrer" href="/" class="flex items-center font-semibold px-4 -mb-1">
                    How it Works</a>
                </li>
            </ul>
        </div>
		<div class="flex items-center md:space-x-4">
			<div class="relative border-2 border-gray-200 rounded-full">
				<span class="absolute inset-y-0 left-0 flex items-center pl-2">
					<button type="submit" title="Search" class="p-1">
						<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
					</button>
				</span>
				<input type="search" name="Search" placeholder="Search..." class="w-32 py-2 pl-10 text-sm rounded-full sm:w-auto">
			</div>
			<a sveltekit:prefetch href="/upload" class="hidden px-6 py-2 font-semibold rounded-full bg-blue-500 text-white border lg:block">Upload</a>
			<a sveltekit:prefetch href="/connect-wallet" class="hidden px-6 py-2 font-semibold rounded-full bg-white border lg:block">Connect Wallet</a>
		</div>
		<button title="Open menu" type="button" class="p-4 lg:hidden">
			<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 dark:text-gray-100">
				<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
			</svg>
		</button>
	</div>
</header>