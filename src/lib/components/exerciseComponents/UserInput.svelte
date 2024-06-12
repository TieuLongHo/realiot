<script lang="ts">
	import mqtt from 'mqtt';
	import Graph from './Graph.svelte';
	export let currentTutorial: any = {};
	const mqttClient = mqtt.connect('mqtt://172.20.0.99:9001');

	let user_input = currentTutorial.user_input;

	mqttClient.on('connect', () => {
		console.log('Connected to MQTT broker');
	});

	mqttClient.on('error', (error) => {
		console.error('MQTT error:', error);
	});

	const handleSlider = async (event: Event, topic: string) => {
		try {
			mqttClient.publish(topic, event.target.value);
		} catch (error) {
			console.error('Error triggering Slider:', error);
		}
	};

	const handleButton = async (topic: string) => {
		try {
			mqttClient.publish(topic, 'triggered');
		} catch (error) {
			console.error('Error triggering Button:', error);
			alert('Failed to trigger Button');
		}
	};
</script>

<h2 class="h2 mt-5 mb-5">User Input:</h2>
{#if user_input.buttons?.length > 0}
	<div class="mt-4">
		<div class="text-2xl font-semibold mb-2">Buttons:</div>
		{#each user_input.buttons as button}
			<p class="mt-3 mb-3">Topic: {currentTutorial.id + '/' + button.topic}</p>
			<button
				class="btn variant-filled-error"
				on:click={() => handleButton(currentTutorial.id + '/' + button.topic)}
			>
				{button.label}
			</button>
		{/each}
	</div>
{/if}
{#if user_input.sliders?.length > 0}
	<div class="mt-4">
		<h2 class="text-2xl font-semibold mb-2">Sliders:</h2>
		{#each user_input.sliders as slider}
			<label class="text-lg font-semibold mb-2">{slider.label}</label>
			<p class="mt-3 mb-3">Topic: {currentTutorial.id + '/' + slider.topic}</p>
			<input
				type="range"
				min="0"
				max="100"
				step="1"
				on:input={(event) => handleSlider(event, currentTutorial.id + '/' + slider.topic)}
			/>
		{/each}
	</div>
{/if}
{#if user_input.graphs?.length > 0}
	<div class="mt-4">
		<h2 class="text-2xl font-semibold mb-2">Graphs:</h2>
		{#each user_input.graphs as graph}
			<Graph {mqttClient} topic={currentTutorial.id + '/' + graph.topic} label={graph.label} />
		{/each}
	</div>
{/if}
