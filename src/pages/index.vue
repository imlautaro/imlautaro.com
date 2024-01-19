<script setup lang="ts">
useHead({
	title: 'Lautaro Pereyra | Nuxt Expert',
})
</script>

<template>
	<div>
		<Stack class="py-12 md:py-24" vertical>
			<Container gap="12" max="md" vertical>
				<div class="grid grid-cols-6 md:grid-cols-12 gap-12 relative">
					<Stack class="col-span-6 md:col-span-8" gap="4" vertical>
						<Stack gap="2" vertical>
							<span>Heyyy,</span>
							<h1 class="font-bold text-6xl lt-md:pr-24">
								I'm Lautaro!
							</h1>
						</Stack>
						<span class="text-2xl">
							Expert in modern
							<span class="whitespace-nowrap">full-stack</span>
							development.
						</span>
						<hr class="opacity-0" />
						<p>
							I'm from
							<b class="font-semibold">Buenos Aires, Argentina</b
							>. I love coding and designing. I love God and
							Jesus. I also love cats.
						</p>
					</Stack>
					<div class="col-span-4">
						<img
							class="rounded-2xl lt-md:(absolute top-0 right-0 w-16 rounded-full)"
							src="/avatar-02.jpg"
						/>
					</div>
				</div>
				<hr />
				<Stack gap="6" vertical>
					<p class="leading-normal text-xl">
						I've been working as a web developer for more than 5
						years and along the way I learned how to handle many
						technologies and tools, and became an expert in modern
						web development.
					</p>
					<p class="leading-normal text-xl">
						I have a good understanding and experience working with
						different rendering modes (SSR, SSG, CSR, etc.),
						optimizing for SEO, performance, accessibility and with
						caching related stuff. I also have experience developing
						PWAs. Bonus: I've studied UI/UX design for a long time
						so I'm very passionate about it too.
					</p>
					<h2 class="font-semibold !-mb-3 mt-6 text-2xl">
						Work experience
					</h2>
					<Stack
						class="border px-4 py-3 rounded-lg shadow-sm"
						gap="2"
						vertical
					>
						<Stack vertical>
							<span class="font-semibold text-sm">
								Fullstack Developer and UI/UX Designer - Canto
								Sin Fronteras
							</span>
							<span class="text-xs text-gray-600">
								Apr 2019 - Present
							</span>
						</Stack>
						<p>
							I worked designing and developing a blog to position
							it on Google and also developed multiple PWAs
							implementing databases, user authentication, payment
							systems, and more. Some of the main technologies I
							worked with are Nuxt, Vue, TypeScript, UnoCSS
							(tailwind-like css engine), PayPal and Mercado Pago
							API for payments, Supabase, Git, CI / CD.
						</p>
						<Stack class="py-2" gap="3">
							<Stack
								class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
								gap="1"
								items="center"
								to="https://cantosinfronteras.com/"
								target="_blank"
								rel="nofollow noopener noreferrer"
							>
								<Icon name="lucide:link" />
								<span>Link to the website</span>
							</Stack>
						</Stack>
					</Stack>
					<Stack
						class="border px-4 py-3 rounded-lg shadow-sm"
						gap="2"
						vertical
					>
						<Stack vertical>
							<span class="font-semibold text-sm">
								Senior Frontend Developer - Promotty
							</span>
							<span class="text-xs text-gray-600">
								Jul 2023 - Oct 2023
							</span>
						</Stack>
						<p>
							In this role, I worked as a senior frontend
							developer, where I developed a couple of PWAs with
							Nuxt 3, consuming a GraphQL API. This role required
							a lot of communication, and I also assisted with
							design tasks on Figma.
						</p>
						<Stack class="py-2" gap="3">
							<Stack
								class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
								gap="1"
								items="center"
								to="https://www.promotty.com/"
								target="_blank"
								rel="nofollow noopener noreferrer"
							>
								<Icon name="lucide:link" />
								<span>Link to the website</span>
							</Stack>
							<Stack
								class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
								gap="1"
								items="center"
								to="https://www.linkedin.com/company/promotty/"
								target="_blank"
								rel="nofollow noopener noreferrer"
							>
								<Icon name="fa-brands:linkedin" />
								<span>LinkedIn</span>
							</Stack>
						</Stack>
					</Stack>
					<Stack
						class="border px-4 py-3 rounded-lg shadow-sm"
						gap="2"
						vertical
					>
						<Stack vertical>
							<span class="font-semibold text-sm">
								Software Engineer - Freelance
							</span>
						</Stack>
						<p>
							Over the years, I have had the privilege of working
							with multiple clients on a freelance basis. This has
							given me the opportunity to work on diverse projects
							and expand my skill set.
						</p>
					</Stack>
					<Stack gap="6" vertical>
						<h2 class="font-semibold !-mb-3 mt-6 text-2xl">
							Showcase
						</h2>
						<p class="text-gray-600">
							If you wanna have an idea of what I do, here are
							some of the latest projects I've been working on.
						</p>
					</Stack>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
						<Stack
							class="border px-4 py-3 rounded-lg shadow-sm"
							gap="2"
							vertical
						>
							<Stack vertical>
								<span class="font-semibold"> Sing4U </span>
							</Stack>
							<p class="!mb-auto">
								A course in app format to learn to sing in an
								easy and well-structured way
							</p>
							<Stack class="py-2" gap="3">
								<Stack
									class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
									gap="1"
									items="center"
									to="https://sing4u.app/"
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<Icon name="lucide:link" />
									<span>Link to the PWA</span>
								</Stack>
							</Stack>
						</Stack>
						<Stack
							class="border px-4 py-3 rounded-lg shadow-sm"
							gap="2"
							vertical
						>
							<Stack vertical>
								<span class="font-semibold">
									Canto Sin Fronteras
								</span>
							</Stack>
							<p class="!mb-auto">
								A complete website with content to learn to sing
								positioned in google for highly important
								keywords in the area
							</p>
							<Stack class="py-2" gap="3">
								<Stack
									class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
									gap="1"
									items="center"
									to="https://cantosinfronteras.com/"
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<Icon name="lucide:link" />
									<span>Link to the website</span>
								</Stack>
							</Stack>
						</Stack>
						<Stack
							class="border px-4 py-3 rounded-lg shadow-sm"
							gap="2"
							vertical
						>
							<Stack vertical>
								<span class="font-semibold">
									@michilabs/sender-js
								</span>
							</Stack>
							<p class="!mb-auto">
								TypeScript-friendly client for Sender.net
							</p>
							<Stack class="py-2" gap="3">
								<Stack
									class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
									gap="1"
									items="center"
									to="https://github.com/MichiLabs/sender-js"
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<Icon name="fa-brands:github" />
									<span>GitHub</span>
								</Stack>
							</Stack>
						</Stack>
						<Stack
							class="border px-4 py-3 rounded-lg shadow-sm"
							gap="2"
							vertical
						>
							<Stack vertical>
								<span class="font-semibold">
									@michilabs/paypal-js
								</span>
							</Stack>
							<p class="!mb-auto">
								PayPal Client for JavaScript (TypeScript
								friendly)
							</p>
							<Stack class="py-2" gap="3">
								<Stack
									class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
									gap="1"
									items="center"
									to="https://github.com/imlautaro/paypal-js"
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<Icon name="fa-brands:github" />
									<span>GitHub</span>
								</Stack>
							</Stack>
						</Stack>
						<Stack
							class="border px-4 py-3 rounded-lg shadow-sm"
							gap="2"
							vertical
						>
							<Stack vertical>
								<span class="font-semibold"> supauth </span>
							</Stack>
							<p class="!mb-auto">
								Don't worry about login screens anymore when
								creating your next green-stack project!
							</p>
							<Stack class="py-2" gap="3">
								<Stack
									class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
									gap="1"
									items="center"
									to="http://supauth.vercel.app/"
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<IconCSS name="logos:nuxt-icon" />
									<span>Docs</span>
								</Stack>
								<Stack
									class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
									gap="1"
									items="center"
									to="https://github.com/imlautaro/supauth"
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<Icon name="fa-brands:github" />
									<span>GitHub</span>
								</Stack>
							</Stack>
						</Stack>
						<Stack
							class="border px-4 py-3 rounded-lg shadow-sm"
							gap="2"
							vertical
						>
							<Stack vertical>
								<span class="font-semibold"> oxecore </span>
							</Stack>
							<p class="!mb-auto">
								Nuxt 3 layer with essential modules and
								components
							</p>
							<Stack class="py-2" gap="3">
								<Stack
									class="font-semibold w-min whitespace-nowrap text-xs text-primary-600"
									gap="1"
									items="center"
									to="https://github.com/imlautaro/oxecore"
									target="_blank"
									rel="nofollow noopener noreferrer"
								>
									<Icon name="fa-brands:github" />
									<span>GitHub</span>
								</Stack>
							</Stack>
						</Stack>
					</div>

					<!-- Skills -->
					<Stack gap="4" vertical>
						<h2 class="font-semibold !-mb-3 mt-6 text-2xl">
							Skills
						</h2>
					</Stack>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
								<Skill
									tech="Nuxt"
									icon="logos:nuxt-icon"
									active
								/>
								<Skill tech="React" icon="logos:react" />
								<Skill
									tech="Next.js"
									icon="logos:nextjs-icon"
								/>
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
								<Skill
									tech="Bootstrap"
									icon="logos:bootstrap"
								/>
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
								<Skill tech="Prisma" icon="logos:prisma" />

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
									:icons="[
										'logos:git-icon',
										'octicon:mark-github-16',
									]"
								/>
								<Skill
									tech="HTML & CSS"
									active
									:icons="[
										'vscode-icons:file-type-html',
										'vscode-icons:file-type-css',
									]"
								/>
								<Skill
									tech="PayPal & MercadoPago"
									:icons="['logos:paypal', 'MercadoPago']"
								/>
								<Skill
									tech="Adobe XD & Figma"
									:icons="['logos:adobe-xd', 'logos:figma']"
								/>
								<Skill
									tech="Jest & Vitest"
									:icons="['logos:jest', 'logos:vitest']"
								/>
								<Skill
									tech="Cypress & Playwright"
									:icons="[
										'logos:cypress-icon',
										'logos:playwright',
									]"
								/>
								<Skill
									tech="NGINX & PM2"
									:icons="['logos:nginx', 'logos:pm2-icon']"
								/>
								<Skill tech="Docker" icon="logos:docker-icon" />
								<Skill tech="GraphQL" icon="logos:graphql" />
								<Skill
									tech="Notion"
									icon="simple-icons:notion"
								/>
							</SkillsCard>
						</Stack>
					</div>
					<Stack gap="2" vertical>
						<Stack gap="2" items="center">
							<Icon
								class="text-xs text-primary-500"
								name="lucide:zap"
							/>
							<span class="text-sm">
								Technologies I'm using daily
							</span>
						</Stack>
					</Stack>

					<Stack gap="6" vertical>
						<h2 class="font-semibold !-mb-3 mt-6 text-2xl">
							Contact Info
						</h2>
						<p class="text-gray-600">
							If you wanna contact me, feel free to do so by
							sending me an email or a chat message on Telegram.
						</p>
					</Stack>
					<div
						class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
					>
						<Stack
							gap="4"
							items="center"
							class="border dark:border-gray-700 overflow-hidden rounded-lg pl-6"
						>
							<Icon name="emojione:envelope" />
							<span class="flex-1 w-full">hi@imlautaro.com</span>
							<NuxtLink
								class="duration-200 hover:bg-black/5 dark:(hover:bg-white/5 border-gray-700) p-6 border-l"
								to="mailto:hi@imlautaro.com"
								aria-label="Contact via email"
							>
								<Icon name="lucide:chevron-right" />
							</NuxtLink>
						</Stack>
						<NuxtLink
							class="flex items-center space-x-4 p-6 border dark:(border-gray-700 hover:bg-white/5) rounded-lg hover:bg-black/5 duration-200"
							to="https://t.me/imlautaro"
							target="_blank"
						>
							<Icon name="logos:telegram" />
							<span class="flex-1 w-full">Telegram</span>
							<Icon name="lucide:chevron-right" />
						</NuxtLink>
					</div>
				</Stack>
			</Container>
		</Stack>
	</div>
</template>

<style>
.pattern {
	@apply bg-slate-50;
	background-image: url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.025'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>
