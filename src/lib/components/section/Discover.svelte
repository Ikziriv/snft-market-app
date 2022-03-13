<script>

</script>

<section class="px-5 md:py-20 bg-white">
	<div class="container flex flex-col items-center justify-center mx-auto">
        <div class="flex justify-between w-full h-auto md:mb-10">
            <div class="flex flex-col space-y-2 justify-start items-start">
                <span class="p-2 text-4xl font-black text-gray-700 uppercase">Discover</span>
            </div>
        </div>
        <div class="flex flex-col space-y-4 md:flex-row justify-center md:justify-between items-center w-full h-auto">
            <div class="flex flex-col w-full md:w-auto space-y-2 justify-center items-center">
                <select class="block w-full md:w-64 text-md text-gray-700 py-2 px-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500" name="animals">
                    <option value="">
                        Select an option
                    </option>
                    <option value="dog">
                        Today
                    </option>
                </select>
            </div>
            <div class="grid grid-cols-6 gap-2 md:gap-0 space-x-1 md:space-x-2 w-full md:w-auto justify-center items-center">
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
            <div class="flex flex-col w-full md:w-auto h-auto justify-center items-center">
                <button class="flex flex-row w-full md:w-auto justify-between md:justify-end py-2 px-8 rounded-full bg-blue-500">
                    <span class="text-white font-semibold">Filter</span>
                    <span class="ml-4 py-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel text-white" viewBox="0 0 16 16">
                            <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                        </svg>
                    </span>
                </button>
            </div>
        </div>
		<div class="grid grid-cols-4 w-full gap-4 md:gap-16 justify-center mt-8">
            <!-- List 4 -->
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
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
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
            <!-- -----END------ -->
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
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
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
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
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
                <div class="flex flex-col">
                    <img src="img/vendor/content/card-pic-4.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-64 dark:bg-gray-500">
                </div>
                <div class="flex flex-col space-y-2 w-full h-auto mb-4">
                    <div class="flex flex-row justify-between space-x-4">
                        <h2 class="text-md font-semibold">Amazing Digital Art</h2>
                        <span class="px-2 py-1 items-center text-xs text-center font-bold uppercase text-green-500 border-2 border-green-500 rounded-lg">
                            0.27 ETH
                        </span>
                    </div>
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
                <div class="flex flex-col">
                    <img src="img/vendor/content/card-pic-5.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-64 dark:bg-gray-500">
                </div>
                <div class="flex flex-col space-y-2 w-full h-auto mb-4">
                    <div class="flex flex-row justify-between space-x-4">
                        <h2 class="text-md font-semibold">Amazing Digital Art</h2>
                        <span class="px-2 py-1 items-center text-xs text-center font-bold uppercase text-green-500 border-2 border-green-500 rounded-lg">
                            0.27 ETH
                        </span>
                    </div>
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
                <div class="flex flex-col">
                    <img src="img/vendor/content/card-pic-6.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-64 dark:bg-gray-500">
                </div>
                <div class="flex flex-col space-y-2 w-full h-auto mb-4">
                    <div class="flex flex-row justify-between space-x-4">
                        <h2 class="text-md font-semibold">Amazing Digital Art</h2>
                        <span class="px-2 py-1 items-center text-xs text-center font-bold uppercase text-green-500 border-2 border-green-500 rounded-lg">
                            0.27 ETH
                        </span>
                    </div>
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
                <div class="flex flex-col">
                    <img src="img/vendor/content/card-pic-7.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-64 dark:bg-gray-500">
                </div>
                <div class="flex flex-col space-y-2 w-full h-auto mb-4">
                    <div class="flex flex-row justify-between space-x-4">
                        <h2 class="text-md font-semibold">Amazing Digital Art</h2>
                        <span class="px-2 py-1 items-center text-xs text-center font-bold uppercase text-green-500 border-2 border-green-500 rounded-lg">
                            0.27 ETH
                        </span>
                    </div>
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
            <div class="col-span-2 md:col-span-1 flex flex-col w-full">
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
                    <div class="flex flex-row justify-between space-x-0 md:space-x-4">
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
                <div class="flex flex-wrap justify-between space-y-2 border-t py-4">
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
        <div class="flex justify-center items-center w-full h-auto mt-8">
            <button type="button" class="flex items-center px-8 py-2 border-2 rounded-full">
                <span class="text-lg font-semibold">Load More</span>
            </button>
        </div>
	</div>
</section>