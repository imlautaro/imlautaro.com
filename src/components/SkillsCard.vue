<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
	<Stack gap="6" vertical class="border px-4 pb-4 py-3 shadow-sm rounded-lg">
		<span class="text-gray-600">
			{{ title }}
		</span>
		<slot />
	</Stack>
</template>
