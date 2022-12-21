<script setup lang="ts">
defineProps<{
	tech: string
	icon?: string
	active?: boolean
	icons?: string[]
}>()
</script>

<template>
	<Stack gap="4" items="center">
		<Icon v-if="icon" :name="icon" />
		<Stack v-if="icons">
			<Stack
				v-for="icon in icons"
				class="p-2 -m-2 bg-white shadow rounded-full text-sm"
			>
				<Icon :name="icon" />
			</Stack>
		</Stack>
		<span class="flex-1 w-full">{{ tech }}</span>
		<Icon v-if="active" class="text-primary-500" name="ph:fire-duotone" />
	</Stack>
</template>
