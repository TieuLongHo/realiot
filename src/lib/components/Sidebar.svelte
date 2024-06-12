<script lang="ts">
	import { AppRail, AppRailTile, AppRailAnchor } from '@skeletonlabs/skeleton';
	import { page } from '$app/stores';
	import HomeIcon from '$lib/assets/home.svg';
	import ExercisesIcon from '$lib/assets/graduation-cap.svg';
	import SettingsIcon from '$lib/assets/settings.svg';
</script>

<AppRail class="w-24">
	<AppRailAnchor href="/" selected={$page.url.pathname === '/'}>
		<svelte:fragment slot="lead">
			<img
				src={HomeIcon}
				alt="Home"
				width="24"
				height="24"
				class:selected-icon={$page.url.pathname === '/'}
				class:unselected-icon={$page.url.pathname !== '/'}
			/>
		</svelte:fragment>
		<span>Home</span>
	</AppRailAnchor>
	<AppRailAnchor href="/exercises" selected={$page.url.pathname.startsWith('/exercises')}>
		<svelte:fragment slot="lead">
			<img
				src={ExercisesIcon}
				alt="Exercises"
				width="24"
				height="24"
				class:selected-icon={$page.url.pathname.startsWith('/exercises')}
				class:unselected-icon={!$page.url.pathname.startsWith('/exercises')}
			/>
		</svelte:fragment>
		<span>Exercises</span>
	</AppRailAnchor>
	<AppRailAnchor href="/settings" selected={$page.url.pathname === '/settings'}>
		<svelte:fragment slot="lead">
			<img
				src={SettingsIcon}
				alt="Settings"
				width="24"
				height="24"
				class:selected-icon={$page.url.pathname === '/settings'}
				class:unselected-icon={$page.url.pathname !== '/settings'}
			/>
		</svelte:fragment>
		<span>Settings</span>
	</AppRailAnchor>
</AppRail>

<style>
	.unselected-icon {
		filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(0%) hue-rotate(93deg)
			brightness(105%) contrast(104%);
	}

	.selected-icon {
		filter: brightness(0) saturate(100%) invert(0%) sepia(0%) saturate(0%) hue-rotate(93deg)
			brightness(0%) contrast(104%);
	}
</style>
