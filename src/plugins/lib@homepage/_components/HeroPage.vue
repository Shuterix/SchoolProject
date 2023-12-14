<template>
	<div>
		<div class="gradient container py-4 px-4">
			<div class="flex justify-content-between pb-4">
				<span class="text-white text-2xl font-bold">
					Focus
				</span>
				<span class="text-white font-bold grey text-md">
					Show all
				</span>
			</div>
			<div class="d-flex justify-content-center flex-col">
				<div class="flex">
					<SongCard v-for="card in Cards" :key="card"/>
				</div>
				<div class="flex">
					<SongCard v-for="card in Cards" :key="card"/>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import SongCard from '../_components/SongCard.vue'
export default {
	components: {
		SongCard,
	},
	data() {
		return {
			Cards: 5,
		}
	}
}
</script>

<style scoped lang="sass">
	.gradient
		width: 100%
		height: calc( 100vh - 70px )
		background: linear-gradient(180deg, rgba(90,90,90,1) 0%, rgba(0,0,0,2) 50%)

	.grey
		color: #9E9E9E
</style>