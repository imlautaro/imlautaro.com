<script setup lang="ts">
useHead({
	htmlAttrs: {
		lang: 'en',
	},
	meta: [
		{
			name: 'theme-color',
			content: '#4f46e5',
		},
	],
})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
