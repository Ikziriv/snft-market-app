<script lang="ts">
	import MainHero from '../libs/components/section/MainHero.svelte'
	import Selection from '../libs/components/section/Selection.svelte'
	import PopularSeller from '../libs/components/section/PopularSeller.svelte'
	import HotBid from '../libs/components/section/HotBid.svelte'
	import HotCollection from '../libs/components/section/HotCollection.svelte'
	import Discover from '../libs/components/section/Discover.svelte'
	import CtaSection from '../libs/components/section/CtaSection.svelte'

</script>

<div class="w-full h-auto px-0 md:px-16">
	<MainHero />
	<Selection />
	<PopularSeller />
	<HotBid />
	<HotCollection />
	<Discover />
	<CtaSection />
</div>