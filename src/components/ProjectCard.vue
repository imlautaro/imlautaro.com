<script setup lang="ts">
defineProps<{ title: string; description: string; url: string; tag: string }>()
</script>

<template>
	<Stack
		class="border-2 px-6 py-8 rounded-2xl -mx-3 text-center dark:(border-gray-700 bg-gray-800)"
		gap="4"
		items="center"
		vertical
	>
		<Stack gap="2">
			<span
				class="text-xs uppercase bg-primary-50 text-primary-600 dark:(bg-primary-400/10 text-primary-400) px-2.5 py-1 rounded-full w-min whitespace-nowrap font-medium tracking-wide"
			>
				{{ tag }}
			</span>
		</Stack>
		<span class="font-medium text-3xl">{{ title }}</span>
		<p class="text-sm text-gray-600 dark:text-gray-400">
			{{ description }}
		</p>
		<NuxtLink
			class="flex items-center space-x-1 text-primary-600 dark:text-primary-400"
			:to="`https://${url}`"
			target="_blank"
		>
			<Icon class="text-xs" name="lucide:link" />
			<span class="font-medium text-sm">{{ url }}</span>
		</NuxtLink>
	</Stack>
</template>
