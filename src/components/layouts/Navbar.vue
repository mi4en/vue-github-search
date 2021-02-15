<template>
	<nav class="navbar bg-primary">
		<h2>
			<i class="fab fa-github"></i>
			{{ title }}
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
		props: {
			title: {
				required: true,
				type: String,
				default: 'Githuber',
			},
		},
	};
</script>

<style scoped></style>
