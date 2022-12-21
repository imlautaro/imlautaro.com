<script setup lang="ts">
defineProps<{ title: string; icon: string; description: string }>()
</script>

<template>
	<Stack class="z-10" gap="6" vertical>
		<Stack items="center" justify="between">
			<h2 class="font-medium text-2xl" id="latest-projects">
				<Icon class="text-base" :name="icon" />
				{{ title }}
			</h2>
			<Icon class="text-gray-400" name="lucide:hash" />
		</Stack>
		<p class="text-gray-700">
			{{ description }}
		</p>
		<slot />
	</Stack>
</template>
