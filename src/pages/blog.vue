<script setup lang="ts">
definePageMeta({
	layout: 'blog',
})
</script>

<template>
	<Stack gap="6" vertical>
		<h1 class="font-bold text-4xl">Blog page</h1>
		<p class="text-lg text-gray-600">
			What's up? This is my blog but it doesn't have any serious article
			yet. I'll be writing some blog posts soon :D
		</p>
		<ContentList path="/articles" v-slot="{ list }">
			<Stack
				class="border-t py-6"
				v-for="article in list"
				:key="article._path"
				gap="3"
				vertical
			>
				<h2 class="font-medium text-2xl">{{ article.title }}</h2>
				<p class="text-gray-600">{{ article.description }}</p>
				<NuxtLink
					class="text-primary-600"
					:to="article._path.split('/').pop()"
					>Read more &rightarrow;</NuxtLink
				>
			</Stack>
		</ContentList>
	</Stack>
</template>
