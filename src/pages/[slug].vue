<script setup lang="ts">
definePageMeta({
	layout: 'blog',
})

const route = useRoute()
const { data: article } = await useAsyncData(() =>
	queryContent(`/articles/${route.params.slug}`).findOne()
)
</script>

<template>
	<div v-if="article" class="prose max-w-none w-full text-lg" id="content">
		<h1>{{ article.title }}</h1>
		<ContentRenderer :value="article" />
	</div>
</template>
