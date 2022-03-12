<script>

</script>

<section class="px-5 md:py-16 bg-white">
	<div class="container flex flex-col items-center justify-center mx-auto">
        <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between w-full h-auto py-8 md:mb-4 border-b">
            <div class="flex flex-col space-y-2 justify-start items-start">
                <span class="p-2 text-2xl font-semibold text-gray-700">Type your keywords</span>
            </div>

            <div class="relative border-2 border-gray-200 rounded-full w-auto">
				<input type="search" name="Search" placeholder="Search..." class="w-80 py-2 pl-4 text-md rounded-full">
				<span class="absolute inset-y-0 right-0 flex items-center pr-2">
					<button type="submit" title="Search" class="p-2 rounded-full bg-blue-500">
                        <svg class="w-4 h-4 fill-current text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
					</button>
				</span>
            </div>
        </div>
        <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between w-full h-auto py-8 md:mb-2">
            <div class="flex flex-col space-y-2 justify-start items-start mb-4 md:mb-0">
                <select class="block w-full md:w-64 text-md text-gray-700 py-2 px-4 border-2 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-semibold rounded-full" name="animals">
                    <option disabled selected class="font-bold">
                        Selection
                    </option>
                    <option value="dog">
                        Today
                    </option>
                </select>
            </div>

            <div class="relative rounded-full w-auto">
                <div class="grid grid-cols-6 gap-1 md:gap-0 space-x-1 w-full md:w-auto justify-center items-center">
                    <button class="col-span-2 md:col-span-1 py-1 rounded-full bg-gray-500">
                        <span class="text-white font-semibold">All Items</span>
                    </button>
                    <button class="col-span-2 md:col-span-1 py-1 rounded-full">
                        <span class="text-gray-700 font-semibold">Art</span>
                    </button>
                    <button class="col-span-2 md:col-span-1 py-1 rounded-full">
                        <span class="text-gray-700 font-semibold">Game</span>
                    </button>
                    <button class="col-span-2 md:col-span-1 py-1 rounded-full">
                        <span class="text-gray-700 font-semibold">Photography</span>
                    </button>
                    <button class="col-span-2 md:col-span-1 py-1 rounded-full">
                        <span class="text-gray-700 font-semibold">Music</span>
                    </button>
                    <button class="col-span-2 md:col-span-1 py-1 rounded-full">
                        <span class="text-gray-700 font-semibold">Video</span>
                    </button>
                </div>
            </div>
        </div>
        
        <div class="grid grid-cols-12 gap-2 w-full h-auto py-0 md:mb-10">
            <div class="col-span-full md:col-span-3 w-full justify-start items-start">
                <div class="flex flex-col space-y-4">
                    <div class="flex flex-col space-y-2 w-full h-auto border-b md:pb-8">
                        <span class="px-4 font-black text-gray-600 text-xs uppercase">Price Range</span>
                        <div class="relative pt-0">
                            <input
                              type="range"
                              class="
                                form-range
                                appearance-none
                                w-full
                                md:w-64
                                rounded-full
                                h-4
                                p-0
                                bg-blue-100 appearance-none
                              "
                              id="price_range"
                            />
                        </div>
                        <div class="flex justify-between space-x-4 px-4 md:px-0 w-full md:w-64">
                            <span class="text-xs font-bold text-gray-800">0.01 ETH</span>
                            <span class="text-xs font-bold text-gray-800">10 ETH</span>
                        </div>
                    </div>
                    <div class="flex flex-col space-y-2 w-full h-auto md:pb-4">
                        <span class="px-4 font-black text-gray-600 text-xs uppercase">Price</span>
                        <select class="block w-full md:w-64 text-md text-gray-700 py-2 px-4 border-2 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-semibold rounded-full" name="animals">
                            <option disabled selected class="font-bold">
                                Selection
                            </option>
                            <option value="dog">
                                Today
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-2 w-full h-auto md:pb-4">
                        <span class="px-4 font-black text-gray-600 text-xs uppercase">Color</span>
                        <select class="block w-full md:w-64 text-md text-gray-700 py-2 px-4 border-2 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-semibold rounded-full" name="animals">
                            <option disabled selected class="font-bold">
                                Selection
                            </option>
                            <option value="dog">
                                Today
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-2 w-full h-auto border-b md:pb-8">
                        <span class="px-4 font-black text-gray-600 text-xs uppercase">Creator</span>
                        <select class="block w-full md:w-64 text-md text-gray-700 py-2 px-4 border-2 border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500 font-semibold rounded-full" name="animals">
                            <option disabled selected class="font-bold">
                                Selection
                            </option>
                            <option value="dog">
                                Today
                            </option>
                        </select>
                    </div>
                    <div class="flex flex-col space-y-2 w-full h-auto border-b md:pb-8">
                        <button type="button" class="flex justify-between px-5 py-2 w-full md:w-64 font-semibold rounded-full border-2">
                            <span class="mr-4 w-auto h-auto py-1">
                                <svg class="w-4 h-4 fill-current text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </span>
                            <span class="font-bold text-md text-gray-700">
                                Reset Filter
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div class="col-span-full md:col-span-9 w-full h-auto justify-center items-center">
                <!-- List 3 -->
                <div class="grid grid-cols-3 md:gap-8 w-full">
                    <div class="col-span-full md:col-span-1 flex flex-col w-full shadow-lg rounded-xl p-4">
                        <div class="flex flex-col">
                            <img src="img/vendor/content/card-pic-1.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-64 dark:bg-gray-500">
                        </div>
                        <div class="flex flex-col space-y-2 w-full h-auto mb-4">
                            <div class="flex flex-row justify-between space-x-4">
                                <h2 class="text-md font-semibold">Amazing Digital Art</h2>
                                <span class="px-2 py-1 items-center text-xs text-center font-bold uppercase text-green-500 border-2 border-green-500 rounded-lg">
                                    0.27 ETH
                                </span>
                            </div>
                            <div class="flex flex-row justify-between space-x-4">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="flex -space-x-4">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3">
                                        <span class="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-gray-900 text-white text-xs">+3</span>
                                    </div>
                                </div>
                                <span class="px-2 py-1 items-center text-sm font-semibold text-center font-normal">
                                3 in Stock
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between border-t py-4">
                            <div class="flex flex-row space-x-2">
                                <button aria-label="Share this post" type="button" class="p-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2-vertical fill-current text-gray-900" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"/>
                                    </svg>
                                </button>
                                <div class="flex flex-col h-auto w-auto">
                                    <span class="text-xs font-medium text-gray-700">Highets Bid</span>
                                    <span class="text-xs uppercase font-bold">0.0001 Eth</span>
                                </div>
                            </div>
                            <div class="flex space-x-2 text-sm dark:text-gray-400">
                                <button type="button" class="flex items-center p-1 space-x-1.5">
                                    <span role="img" aria-label="fire">🔥</span>
                                    <span>New Bid</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- End -->
                    <div class="col-span-full md:col-span-1 flex flex-col w-full shadow-lg rounded-xl p-4">
                        <div class="flex flex-col">
                            <img src="img/vendor/content/card-pic-3.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-64 dark:bg-gray-500">
                        </div>
                        <div class="flex flex-col space-y-2 w-full h-auto mb-4">
                            <div class="flex flex-row justify-between space-x-4">
                                <h2 class="text-md font-semibold">Amazing Digital Art</h2>
                                <span class="px-2 py-1 items-center text-xs text-center font-bold uppercase text-green-500 border-2 border-green-500 rounded-lg">
                                    0.27 ETH
                                </span>
                            </div>
                            <div class="flex flex-row justify-between space-x-4">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="flex -space-x-4">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3">
                                        <span class="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-gray-900 text-white text-xs">+3</span>
                                    </div>
                                </div>
                                <span class="px-2 py-1 items-center text-sm font-semibold text-center font-normal">
                                3 in Stock
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between border-t py-4">
                            <div class="flex flex-row space-x-2">
                                <button aria-label="Share this post" type="button" class="p-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2-vertical fill-current text-gray-900" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"/>
                                    </svg>
                                </button>
                                <div class="flex flex-col h-auto w-auto">
                                    <span class="text-xs font-medium text-gray-700">Highets Bid</span>
                                    <span class="text-xs uppercase font-bold">0.0001 Eth</span>
                                </div>
                            </div>
                            <div class="flex space-x-2 text-sm dark:text-gray-400">
                                <button type="button" class="flex items-center p-1 space-x-1.5">
                                    <span role="img" aria-label="fire">🔥</span>
                                    <span>New Bid</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div class="col-span-full md:col-span-1 flex flex-col w-full shadow-lg rounded-xl p-4">
                        <div class="flex flex-col">
                            <img src="img/vendor/content/card-pic-2.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-64 dark:bg-gray-500">
                        </div>
                        <div class="flex flex-col space-y-2 w-full h-auto mb-4">
                            <div class="flex flex-row justify-between space-x-4">
                                <h2 class="text-md font-semibold">Amazing Digital Art</h2>
                                <span class="px-2 py-1 items-center text-xs text-center font-bold uppercase text-green-500 border-2 border-green-500 rounded-lg">
                                    0.27 ETH
                                </span>
                            </div>
                            <div class="flex flex-row justify-between space-x-4">
                                <div class="flex flex-col items-center justify-center">
                                    <div class="flex -space-x-4">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?1">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?2">
                                        <img alt="" class="w-8 h-8 border rounded-full dark:bg-gray-500 dark:border-gray-700" src="https://source.unsplash.com/40x40/?portrait?3">
                                        <span class="flex items-center justify-center w-8 h-8 font-semibold border rounded-full bg-gray-900 text-white text-xs">+3</span>
                                    </div>
                                </div>
                                <span class="px-2 py-1 items-center text-sm font-semibold text-center font-normal">
                                3 in Stock
                                </span>
                            </div>
                        </div>
                        <div class="flex flex-wrap justify-between border-t py-4">
                            <div class="flex flex-row space-x-2">
                                <button aria-label="Share this post" type="button" class="p-2 text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2-vertical fill-current text-gray-900" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M0 10.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H3V1.5a.5.5 0 0 0-1 0V10H.5a.5.5 0 0 0-.5.5ZM2.5 12a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Zm3-6.5A.5.5 0 0 0 6 6h1.5v8.5a.5.5 0 0 0 1 0V6H10a.5.5 0 0 0 0-1H6a.5.5 0 0 0-.5.5ZM8 1a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2A.5.5 0 0 0 8 1Zm3 9.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 0-1H14V1.5a.5.5 0 0 0-1 0V10h-1.5a.5.5 0 0 0-.5.5Zm2.5 1.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5Z"/>
                                    </svg>
                                </button>
                                <div class="flex flex-col h-auto w-auto">
                                    <span class="text-xs font-medium text-gray-700">Highets Bid</span>
                                    <span class="text-xs uppercase font-bold">0.0001 Eth</span>
                                </div>
                            </div>
                            <div class="flex space-x-2 text-sm dark:text-gray-400">
                                <button type="button" class="flex items-center p-1 space-x-1.5">
                                    <span role="img" aria-label="fire">🔥</span>
                                    <span>New Bid</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>