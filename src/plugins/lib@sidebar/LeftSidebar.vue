<template>
	<div class="sidebar bg-black py-4 px-10 d-flex flex-col">
		<img width="150px"  src="../../_assets/Spotify-Logo.wine.svg">

		<a href="/" class="sidebar-link no-underline text-xl font-bold pt-4 py-2">Home</a>
		<a href="/" class="sidebar-link no-underline text-xl font-bold py-2">Search</a>
		<a href="/" class="sidebar-link no-underline text-xl font-bold py-2">Your Library</a>

		<div class="d-flex align-items-center">
			<button class="p-2 mr-4 rounded-md button-grey">
				<img width="20px" src="../../_assets/plus-large-svgrepo-com.svg" alt="">
			</button>
			<a href="/" class="sidebar-link no-underline text-xl font-bold py-3">Create Playlist</a>
		</div>
		<div class="d-flex align-items-center">
			<button class="p-2 mr-4 rounded-md button-blue">
				<img width="20px" src="../../_assets/heart-svgrepo-com.svg" alt="">
			</button>
			<a href="/" class="sidebar-link no-underline text-xl font-bold py-3">Liked Songs</a>
		</div>

		<div class="mt-auto">
			<div class="flex py-2">
				<a class="px-2 no-underline sidebar-link font-regular k" href="/">Legal</a>
				<a class="px-2 no-underline sidebar-link font-regular k" href="/">Privacy Center</a>
			</div>
			<div class="flex py-2">
				<a class="px-2 no-underline sidebar-link font-regular k" href="/">Privacy Policy</a>
				<a class="px-2 no-underline sidebar-link font-regular k" href="/">Cookies</a>
			</div>
			<div class="flex py-2">
				<a class="px-2 no-underline sidebar-link font-regular k" href="/">About Ads</a>
				<a class="px-2 no-underline sidebar-link font-regular k" href="/">Accessibility</a>
			</div>
			<div class="flex py-2">
				<a class="px-2 no-underline sidebar-link font-regular k" href="/">Your Privacy Choises</a>
			</div>
			
		</div>

		<button class="rounded-full mt-8 py-2 px-4 border flex align-items-center justify-center btn-class">
			<img class="pr-2" width="30px" src="../../_assets/globe-svgrepo-com (2).svg">
			<span class="text-white text-lg font-bold">
				English
			</span>
		</button>
	</div>
</template>

<style scoped lang="sass">
	.sidebar
		height: 100vh
		
		.sidebar-link
			color: #b3b3b3 !important

		.button-grey
			background-color: #b3b3b3

		.button-blue 
			background: linear-gradient(45deg, rgba(17,6,202,1) 0%, rgba(184,184,185,1) 100%)

		.btn-class
			width: 120px	

		.k
			font-size: 12px
</style>