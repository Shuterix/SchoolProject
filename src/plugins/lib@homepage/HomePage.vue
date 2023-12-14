<template>
	<div>
		<div class="flex">
			<LeftSidebar class="col-3"/>
			<div class="col-9">
				<TopNavbar/>
				<Hero />
			</div>
		</div>
		<div class="footer justify-between flex p-2">
			<div class="flex flex-col">
				<span class="text-white font-bold text-lg">
				Preview of spotify
			</span>
			<span class="text-white text-md">
				Some text I dont know what to write.
			</span>
			</div>

			<button class="px-4 py-2 font-bold bg-white rounded-full">
				Sign up free
			</button>
		</div>
	</div>
</template>

<script>
import TopNavbar from '@/plugins/lib@navbar/TopNavbar.vue'
import LeftSidebar from '@/plugins/lib@sidebar/LeftSidebar.vue'
import Hero from '@/plugins/lib@homepage/_components/HeroPage.vue'
export default {
	components: {
		TopNavbar,
		LeftSidebar,
		Hero
	}
}
</script>

<style lang="sass" scoped>
	.footer
		height: 70px
		background: linear-gradient(90deg, rgba(255,0,243,1) 0%, rgba(0,243,255,1) 100%)
</style>