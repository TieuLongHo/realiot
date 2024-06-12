<script lang="ts">
	import Codeblock from '../placeholder/Codeblock.svelte';
	import Lorem from '../placeholder/Lorem.svelte';
	import { Modal, getModalStore } from '@skeletonlabs/skeleton';
	import type { ModalSettings, ModalComponent, ModalStore } from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	let fileContent = '';
	let disabled: boolean = false;

	export let solution: { explanation: string; code: string } = {
		explanation: '',
		code: ''
	};

	const fetchFileContent = async () => {
		try {
			const res = await fetch(`/tutorialSolutions/${solution.code}`);
			if (res.ok) {
				fileContent = await res.text();
			} else {
				console.error('Failed to fetch file content:', res.statusText);
			}
		} catch (error) {
			console.error('Error fetching file content:', error);
		}
	};

	const modalStore = getModalStore();
	const modal: ModalSettings = {
		type: 'confirm',
		title: 'Please Confirm',
		body: 'Are you sure you wish to unlock the Solution?',
		response: (r: boolean) => {
			disabled = r;
			if (r) {
				fetchFileContent();
			}
		}
	};

	const handleSolution = () => {
		modalStore.trigger(modal);
	};
</script>

<h2 class="h2 mb-5">Solution</h2>

{#if !disabled}
	<button class="btn variant-filled-warning" on:click={handleSolution}> Show Solution </button>
{:else if solution.code}
	<p>{solution.explanation}</p>
	<Codeblock code_solution={fileContent} />
{:else}
	<p>{solution.explanation}</p>
{/if}
