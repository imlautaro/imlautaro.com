<script setup lang="ts">
const menu = ref(false)
</script>

<template>
	<div>
		<Stack class="border-b p-4" gap="4" items="center" justify="between">
			<Stack class="pl-2" gap="2" items="center" to="/">
				<Isotype class="h-6" />
				<span class="font-bold text-xl">imlautaro</span>
			</Stack>
			<button @click="menu = true" class="flex sm:hidden p-2">
				<Icon name="lucide:menu" />
			</button>
			<Stack class="lt-sm:hidden" gap="2" items="center">
				<NuxtLink class="px-3 py-2 hover:bg-black/5 rounded-lg" to="/">
					Blog
				</NuxtLink>
				<Stack
					class="px-3 py-2 hover:bg-black/5 rounded-lg"
					gap="2"
					items="center"
					target="_blank"
					rel="nofollow noopener noreferrer"
					to="https://youtube.com/@michiprogramador"
				>
					<span>YouTube</span>
					<Icon class="text-xs" name="lucide:external-link" />
				</Stack>
			</Stack>
		</Stack>
		<div
			v-if="menu"
			@click="menu = false"
			class="absolute top-0 left-0 w-full h-full bg-black/50"
		/>
		<Stack
			v-if="menu"
			class="absolute top-0 right-0 w-[80vw] h-full bg-white p-4"
		>
			<Stack gap="2" vertical>
				<NuxtLink class="px-3 py-2 hover:bg-black/5 rounded-lg" to="/">
					Blog
				</NuxtLink>
				<Stack
					class="px-3 py-2 hover:bg-black/5 rounded-lg"
					gap="2"
					items="center"
					target="_blank"
					rel="nofollow noopener noreferrer"
					to="https://youtube.com/@michiprogramador"
				>
					<span>YouTube</span>
					<Icon class="text-xs" name="lucide:external-link" />
				</Stack>
			</Stack>
		</Stack>
		<Container class="py-12" max="sm">
			<slot />
		</Container>
	</div>
</template>
