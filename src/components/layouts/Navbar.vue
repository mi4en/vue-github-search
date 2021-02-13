<template>
	<nav class="navbar bg-primary">
		<h2>
			<img src="../../assets/icons/academic-cap.svg" alt="" srcset="" />
		</h2>
		<ul>
			<li>
				<router-link to="/">Home</router-link>
				<router-link to="/about">About</router-link>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		name: 'Navbar',
	};
</script>

<style scoped>
	img {
		height: 34px;
		width: 34px;
	}
</style>
