<template>
	<div class="card">
		<h3>
			<a :href="repo.html_url" target="_blanc">{{ repo.name }}</a>
		</h3>
	</div>
</template>

<script>
	export default {
		name: 'RepoItem',

		props: {
			repo: {
				type: Object,
				required: true,
			},
		},
	};
</script>

<style scoped></style>
