<template>
	<nav class="navbar main-navbar navbar-expand-xl fixed top-0 z-50 w-full">
		<div class="container">
			<a href="/" class="navbar-brand pb-2.5 flex">
				<button class="bg-black rounded-full m-1">
					<img class="right-svg" src="../../_assets/right-arrow-svgrepo-com.svg" width="40px">
				</button>
				<button class="bg-black rounded-full m-1">
					<img src="../../_assets/right-arrow-svgrepo-com.svg" width="40px">
				</button>
			</a>
			<button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
				<div class="offcanvas-header">
					<img src="../_assets/Logo - Light.svg" alt="Logo">
					<button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
						<img class="close" src="../_assets/Close.svg" alt="close">
					</button>
				</div>
				<div class="offcanvas-body ml-auto text-center flex align-items-center">
					<ul class="navbar-nav">
						<li class="nav-item me-lg-3">
							<a class="nav-link text-dark fw-bold" href="/">Premium</a>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item me-lg-3">
							<a class="nav-link text-dark fw-bold" href="/">Support</a>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item me-lg-3">
							<a class="nav-link text-dark fw-bold" href="/">Download</a>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item me-lg-3">
							<a class="nav-link text-dark fw-bold" href="/">
								<img width="45px" src="@/_assets/line-xl-svgrepo-com.svg" alt="">
							</a>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item me-lg-3">
							<a class="nav-link text-dark fw-bold" href="/">Sign Up</a>
						</li>
					</ul>
					<ul class="navbar-nav">
						<li class="nav-item me-lg-3">
							<a class="nav-link text-dark fw-bold" href="/">
								<button class="rounded-full bg-white text-black ml-8 px-8 py-3">
									Log In
								</button>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>

<style scoped lang="sass">
	nav.main-navbar
		height: 70px
		background-color: #212121
	
		.right-svg
			rotate: 180deg

		a.nav-link
			color: #b3b3b3 !important
			padding-left: 0 !important
			padding-right: 0 !important
</style>