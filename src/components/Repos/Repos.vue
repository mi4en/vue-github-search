<template>
	<section id="repos">
		<div v-for="repo in repos" :key="repo.id">
			<RepoItem :repo="repo" />
		</div>
	</section>
</template>

<script>
	import RepoItem from './RepoItem.vue';

	export default {
		name: 'Repos',
		components: {
			RepoItem,
		},

		props: {
			repos: {
				type: Array,
				required: true,
			},
		},
	};
</script>

<style scoped></style>
