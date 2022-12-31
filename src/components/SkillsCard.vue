<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
	<Stack
		gap="6"
		vertical
		class="border-2 -mx-3 p-6 rounded-2xl dark:(border-gray-700 bg-gray-800)"
	>
		<span class="font-medium text-lg text-center">
			{{ title }}
		</span>
		<slot />
	</Stack>
</template>
