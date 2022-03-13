<script>

</script>
<section class="px-5 md:py-16 dark:bg-gray-800 dark:text-gray-100">
	<div class="container flex flex-col items-center justify-center mx-auto">
        <div class="grid grid-cols-12 gap-24 w-full h-auto space-x-4 space-y-4">
            <div class="col-span-full md:col-span-7 w-full h-auto space-x-4 space-y-4">

                <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center w-full h-auto py-8 md:mb-4">
                    <div class="flex flex-col space-y-2 justify-start items-start max-w-sm">
                        <span class="p-2 text-5xl font-bold text-gray-700">
                            Create Multiple Collectible
                        </span>
                    </div>
        
                    <div class="relative w-auto">
                        <a sveltekit:prefetch href="/upload/upload-single" class="font-bold text-sm px-4 py-2 m-2 text-lg border-2 border-gray-300 rounded-full dark:text-gray-50 dark:border-gray-700">
                            <small>Switch to Single</small>
                        </a>
                    </div>
                </div>

                <div class="flex flex-col space-y-4 md:space-y-0 justify-center items-center w-full h-auto">
                    <form action="#" class="w-full h-auto">
                        <fieldset class="grid grid-cols-4 gap-6 px-0 py-2">
                            <div class="space-y-2 col-span-full">
                                <span class="font-medium text-lg">Upload file</span>
                                <p class="text-sm">Drag or choose your file to upload</p>
                                <div class="flex">
                                    <input type="file" name="files" id="files" class="w-full px-4 md:px-8 py-8 md:py-16 border-2 border-dashed rounded-md">
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="grid grid-cols-4 gap-6 px-0 py-4 md:py-8 border-b">
                            <div class="space-y-2 col-span-full">
                                <span class="font-medium text-lg">Item Details</span>
                            </div>
                            <div class="grid grid-cols-6 gap-4 col-span-full">
                                <div class="col-span-full space-y-2 mb-2">
                                    <label for="name" class="text-xs uppercase font-black text-gray-600">ITEM NAME</label>
                                    <input id="name" type="text" placeholder="e. g. Redeemable Bitcoin Card with logo" class="px-4 py-2 w-full rounded-xl border-2">
                                </div>
                                <div class="col-span-full space-y-2 mb-2">
                                    <label for="description" class="text-xs uppercase font-black text-gray-600">DESCRIPTION</label>
                                    <input id="description" type="text" placeholder="e. g. “After purchasing you will able to recived the logo...”" class="px-4 py-2 w-full rounded-xl border-2">
                                </div>
                                <div class="grid grid-cols-3 gap-4 col-span-full">
                                    <div class="col-span-full md:col-span-1 space-y-2 mb-2">
                                        <label for="royalties" class="text-xs uppercase font-black text-gray-600">ROYALTIES</label>
                                        <input id="royalties" type="text" class="px-4 py-2 w-full rounded-xl border-2">
                                    </div>
                                    <div class="col-span-full md:col-span-1 space-y-2 mb-2">
                                        <label for="size" class="text-xs uppercase font-black text-gray-600">SIZE</label>
                                        <input id="size" type="text" placeholder="e. g. Size" class="px-4 py-2 w-full rounded-xl border-2">
                                    </div>
                                    <div class="col-span-full md:col-span-1 space-y-2 mb-2">
                                        <label for="properties" class="text-xs uppercase font-black text-gray-600">PROPERTIE</label>
                                        <input id="properties" type="text" placeholder="e. g. Propertie" class="px-4 py-2 w-full rounded-xl border-2">
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        <fieldset class="grid grid-cols-4 gap-6 px-0 py-4 md:py-8">
                            <div class="grid grid-cols-6 gap-4 col-span-full">
                                <div class="col-span-full flex flex-row justify-between space-y-2 mb-2">
                                    <div class="flex flex-col justify-start">
                                        <span for="name" class="text-lg font-medium">Put on sale</span>
                                        <p class="text-sm">You’ll receive bids on this item</p>
                                    </div>
                                    <div class="flex justify-end items-center">
                                        <label for="Toggle1" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                            <span class="relative">
                                                <input id="Toggle1" type="checkbox" class="hidden peer">
                                                <div class="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-blue-400"></div>
                                                <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-span-full flex flex-row justify-between space-y-2 mb-2">
                                    <div class="flex flex-col justify-start">
                                        <span for="name" class="text-lg font-medium">Instant sale price</span>
                                        <p class="text-sm">Enter the price for which the item will be instantly sold</p>
                                    </div>
                                    <div class="flex justify-end items-center">
                                        <label for="Toggle1" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                            <span class="relative">
                                                <input id="Toggle1" type="checkbox" class="hidden peer">
                                                <div class="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-blue-400"></div>
                                                <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-span-full flex flex-row justify-between space-y-2 mb-2">
                                    <div class="flex flex-col justify-start">
                                        <span for="name" class="text-lg font-medium">Unlock once purchased</span>
                                        <p class="text-sm">Content will be unlocked after successful transaction</p>
                                    </div>
                                    <div class="flex justify-end items-center">
                                        <label for="Toggle1" class="inline-flex items-center space-x-4 cursor-pointer dark:text-gray-100">
                                            <span class="relative">
                                                <input id="Toggle1" type="checkbox" class="hidden peer">
                                                <div class="w-10 h-6 rounded-full shadow-inner bg-gray-400 peer-checked:bg-blue-400"></div>
                                                <div class="absolute inset-y-0 left-0 w-4 h-4 m-1 rounded-full shadow peer-checked:right-0 peer-checked:left-auto bg-gray-100"></div>
                                            </span>
                                        </label>
                                    </div>
                                </div>
                                <div class="col-span-full flex flex-col justify-start space-y-2 mb-2">
                                    <div class="flex flex-col justify-start mb-4">
                                        <span for="name" class="text-lg font-medium">Choose collection</span>
                                        <p class="text-sm">Choose an exiting collection or create a new one</p>
                                    </div>
                                    <div class="flex justify-start items-center">
                                        <div class="grid grid-cols-4 gap-4 w-full h-auto">
                                            <div class="col-span-full md:col-span-1 flex flex-col space-y-2 space-x-4 justify-center w-full h-32 bg-gray-200 rounded-xl items-start">
                                                <div class="rounded-full w-6 h-6 bg-indigo-500 ml-4">
                                                </div>
                                                <span class="font-sm font-semibold tracking-loose">Create <br> Collection</span>
                                            </div>
                                            <div class="col-span-full md:col-span-1 flex flex-col space-y-2 space-x-4 justify-center w-full h-32 bg-gray-200 rounded-xl items-start">
                                                <div class="rounded-full w-6 h-6 bg-orange-500 ml-4">
                                                </div>
                                                <span class="font-sm font-semibold tracking-loose">Create <br> Collection</span>
                                            </div>
                                            <div class="col-span-full md:col-span-1 flex flex-col space-y-2 space-x-4 justify-center w-full h-32 bg-gray-200 rounded-xl items-start">
                                                <div class="rounded-full w-6 h-6 bg-green-500 ml-4">
                                                </div>
                                                <span class="font-sm font-semibold tracking-loose">Create <br> Collection</span>
                                            </div>
                                            <div class="col-span-full md:col-span-1 flex flex-col space-y-2 space-x-4 justify-center w-full h-32 bg-gray-200 rounded-xl items-start">
                                                <div class="rounded-full w-6 h-6 bg-blue-500 ml-4">
                                                </div>
                                                <span class="font-sm font-semibold tracking-loose">Create <br> Collection</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </fieldset>
                        
                        <div class="flex flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center w-full h-auto py-8 md:mb-4">
                            <div class="relative w-auto">
                                <a sveltekit:prefetch href="/upload/upload-multiple" class="flex font-bold text-sm px-6 py-2 m-2 bg-blue-500 rounded-full dark:text-gray-50 dark:border-gray-700">
                                    <span class="text-lg font-semibold text-white">Create Item</span>
                                    <span class="ml-4 py-1.5">
                                        <svg class="w-4 h-4 text-white fill-current" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </span>
                                </a>
                            </div>

                            <div class="flex flex-row space-y-2 justify-end items-center max-w-sm">
                                <span class="font-medium text-sm">Auto Saving</span>
                                <span class="ml-4">
                                    <div class="w-6 h-6 border-4 border-dashed rounded-full animate-spin border-violet-400"></div>
                                </span>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            
            <div class="col-span-full md:col-span-5 w-full h-auto space-x-4 space-y-4 md:px-8">
                <div class="flex flex-col justify-center items-center w-full h-auto py-8 md:mb-4 shadow-2xl rounded-xl">
                    <div class="grid grid-cols-1 w-full h-auto md:px-12 space-y-4">
                        <div class="col-span-full flex flex-row w-full">
                            <span class="font-bold text-2xl">Preview</span>
                        </div>
                        <div class="col-span-full flex flex-col w-full">
                            <div class="flex flex-col">
                                <img src="/img/vendor/content/card-pic-1.jpg" alt="" class="object-cover w-full rounded-xl mb-4 h-80 dark:bg-gray-500">
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
                        <div class="col-span-full flex flex-col w-full">
                            <button type="button" class="flex justify-between px-5 py-2 w-full font-semibold rounded-full border-2">
                                <span class="mr-4 w-auto h-auto py-1">
                                    <svg class="w-4 h-4 fill-current text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                                </span>
                                <span class="font-bold text-md text-gray-700">
                                    Clear All
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</section>