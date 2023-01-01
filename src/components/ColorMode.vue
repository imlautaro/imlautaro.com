<template>
	<ClientOnly>
		<Stack
			@click="
				$colorMode.preference =
					$colorMode.value === 'dark' ? 'light' : 'dark'
			"
			class="animate-bounce-in bg-black bottom-4 fixed h-14 right-4 rounded-full text-white w-14 z-50"
			component="button"
			items="center"
			justify="center"
		>
			<Transition name="color-mode" mode="out-in">
				<Icon v-if="$colorMode.value === 'dark'" name="lucide:moon" />
				<Icon v-else name="lucide:sun" />
			</Transition>
		</Stack>
	</ClientOnly>
</template>

<style>
.color-mode-enter-active,
.color-mode-leave-active {
	@apply duration-200;
}
.color-mode-enter-from,
.color-mode-leave-to {
	@apply opacity-0;
}
.color-mode-enter-from {
	@apply -rotate-90;
}
.color-mode-leave-to {
	@apply rotate-90;
}
</style>
