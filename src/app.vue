<script setup lang="ts">
useHead({
	title: 'Lautaro Pereyra | Web Developer & UI/UX Designer',
	htmlAttrs: {
		lang: 'en',
	},
	meta: [
		{
			name: 'description',
			content: `I'm 17 years old and I'm from Buenos Aires, Argentina. I'm a frontend developer mainly focused on web apps development with Nuxt. I also love cats and learning new things all the time :D`,
		},
		{
			name: 'theme-color',
			content: '#4f46e5',
		},
	],
})
</script>

<template>
	<div class="font-sans text-gray-900 overflow-hidden">
		<Container class="flex flex-col py-12 md:py-24 space-y-12" max="md">
			<!-- Presentation -->
			<Stack gap="6" vertical>
				<Stack gap="4">
					<Stack vertical>
						<span class="text-lg">Heeey,</span>
						<h1 class="font-bold text-4xl">I'm Lautaro!</h1>
					</Stack>
					<div class="relative text-gray-100">
						<Isotype class="w-6" />
						<IsoDecoration
							class="absolute -top-230 -left-6 -rotate-10 transform"
						/>
					</div>
				</Stack>
				<p class="text-lg text-gray-800 z-10">
					I'm 17 years old and I'm from Buenos Aires, Argentina. I'm a
					<b class="text-gray-900">frontend developer</b> mainly
					focused on <b class="text-gray-900">web apps</b> development
					with Nuxt. I also love cats <Icon name="emojione:cat" /> and
					learning new things all the time :D
				</p>
			</Stack>

			<Divider />

			<!-- Latest Projects -->
			<Section
				title="Latest Projects"
				icon="emojione:file-folder"
				description="If you wanna have an idea of what I do, here are some of the latest projects I've been working on."
			>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
					<Stack gap="6" vertical>
						<ProjectCard
							title="Vocalizar"
							description="An app for singers with dozens of audios to vocalize at any time and from any device"
							url="vocalizar.sing4u.app"
							tag="PWA"
						/>
						<ProjectCard
							title="Grow"
							description="An example landing page for a digital marketing agency that offers different services"
							url="grow-eight.vercel.app	"
							tag="Landing Page"
						/>
					</Stack>
					<Stack gap="6" vertical>
						<ProjectCard
							title="Sing4U"
							description="A course in app format to learn to sing in an easy and well-structured way"
							url="sing4u.app"
							tag="PWA"
						/>
						<ProjectCard
							title="Pizza Per Tutti"
							description="An example landing page for a restaurant with a digital menu in app format accessible from any device"
							url="pizza-per-tutti.vercel.app"
							tag="Landing Page & PWA"
						/>
					</Stack>
				</div>
			</Section>

			<Divider />

			<!-- Skills -->
			<Section
				title="Skills"
				icon="emojione:glowing-star"
				description="I've been studying programming and UI/UX design for more than 5 years, and along the way I've learned to handle many technologies and tools. Here are some of the main ones."
			>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
					<Stack gap="6" vertical>
						<SkillsCard title="Programming Languages">
							<Skill
								tech="JavaScript"
								icon="logos:javascript"
								active
							/>
							<Skill
								tech="TypeScript"
								icon="logos:typescript-icon"
								active
							/>
							<Skill tech="Python" icon="logos:python" />
							<Skill tech="Php" icon="logos:php" />
						</SkillsCard>
						<SkillsCard title="Frontend">
							<Skill tech="Vue" icon="logos:vue" active />
							<Skill tech="Nuxt" icon="logos:nuxt-icon" active />
							<Skill tech="React" icon="logos:react" />
							<Skill tech="Next.js" icon="logos:nextjs-icon" />
							<Skill tech="Vuetify" icon="logos:vuetifyjs" />
							<Skill
								tech="Material UI"
								icon="logos:material-ui"
							/>
							<Skill
								tech="Tailwind CSS"
								icon="logos:tailwindcss-icon"
								active
							/>
							<Skill tech="Bootstrap" icon="logos:bootstrap" />
						</SkillsCard>
					</Stack>
					<Stack gap="6" vertical>
						<SkillsCard title="Backend">
							<Skill
								tech="Supabase"
								icon="logos:supabase-icon"
								active
							/>
							<Skill tech="Firebase" icon="logos:firebase" />

							<Skill
								tech="AWS Amplify"
								icon="logos:aws-amplify"
							/>
							<Skill tech="Flask" icon="logos:flask" />
						</SkillsCard>
						<SkillsCard title="General">
							<Skill
								tech="Git & GitHub"
								active
								:icons="['logos:git-icon', 'logos:github-icon']"
							/>
							<Skill
								tech="HTML & CSS"
								active
								:icons="['logos:html-5', 'logos:css-3']"
							/>
							<Skill
								tech="PayPal & MercadoPago"
								:icons="['logos:paypal', 'MercadoPago']"
							/>
							<Skill
								tech="Adobe XD & Figma"
								:icons="['logos:adobe-xd', 'logos:figma']"
							/>
						</SkillsCard>
					</Stack>
				</div>
				<Stack gap="2" vertical>
					<Stack gap="2" items="center">
						<Icon
							class="text-xs text-primary-500"
							name="ph:fire-bold"
						/>
						<span class="text-sm">
							Technologies I'm using daily
						</span>
					</Stack>
				</Stack>
			</Section>

			<Divider />

			<!-- Contact -->
			<Section
				title="Contact Info"
				icon="emojione:information"
				description="If you wanna contact me, feel free to do so by sending me an email or a chat message on Telegram."
			>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
					<Stack
						gap="4"
						items="center"
						class="border-2 overflow-hidden rounded-2xl pl-6 -mx-3"
					>
						<Icon name="emojione:envelope" />
						<span class="flex-1 w-full">hi@imlautaro.com</span>
						<NuxtLink
							class="duration-200 hover:bg-black/5 p-6 border-l-2"
							to="mailto:hi@imlautaro.com"
						>
							<Icon name="lucide:chevron-right" />
						</NuxtLink>
					</Stack>
					<NuxtLink
						class="flex items-center space-x-4 p-6 border-2 rounded-2xl hover:bg-black/5 duration-200 -mx-3"
						to="https://t.me/imlautaro"
						target="_blank"
					>
						<Icon name="logos:telegram" />
						<span class="flex-1 w-full">Telegram</span>
						<Icon name="lucide:chevron-right" />
					</NuxtLink>
				</div>
			</Section>
			<Stack
				class="text-gray-400"
				gap="1"
				items="center"
				justify="center"
			>
				<Isotype class="h-4" />
				<span>
					<b class="font-medium">imlautaro</b>
					&copy; {{ new Date().getFullYear() }}
				</span>
			</Stack>
		</Container>
	</div>
</template>

<style>
html {
	-webkit-tap-highlight-color: transparent;
}
</style>
