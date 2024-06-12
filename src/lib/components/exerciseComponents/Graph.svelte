<script lang="ts">
	import { onMount } from 'svelte';
	import { SmoothieChart, TimeSeries } from 'smoothie';
	import mqtt from 'mqtt';
	export let mqttClient: mqtt.MqttClient;
	export let topic: string;
	export let label: string;

	const line1 = new TimeSeries();
	let canvas: HTMLCanvasElement;

	mqttClient.on('connect', () => {
		console.log('Connected to MQTT broker');
		console.log('Subscribing to topic:', topic);
		mqttClient.subscribe(topic, (err) => {});
	});

	mqttClient.on('message', (topic, message) => {
		message = parseFloat(message.toString());
		console.log('Received message:', message);
		line1.append(new Date().getTime(), message);
	});

	////////////// Random temperature generator//////////////////
	// function generateRandomTemperature() {
	// 	const min = 20.7; // Minimum temperature
	// 	const max = 21.9; // Maximum temperature
	// 	return (Math.random() * (max - min) + min).toFixed(2); // Generates a random number between min and max, with 2 decimal places
	// }
	// async function refreshTemperature() {
	// 	const temperature = generateRandomTemperature();
	// 	console.log('Publishing temperature:', temperature);
	// 	line1.append(new Date().getTime(), temperature);
	// }

	// setInterval(refreshTemperature, 500);

	onMount(() => {
		const smoothie = new SmoothieChart({
			millisPerPixel: 17,
			maxValueScale: 1.1,
			minValueScale: 1.1,
			grid: {
				fillStyle: '#460a49',
				strokeStyle: '#9b2aa4',
				millisPerLine: 2000,
				verticalSections: 3
			},
			labels: {
				fontSize: 13,
				precision: 3,
				showIntermediateLabels: true
			},
			tooltip: true,
			tooltipLine: {
				lineWidth: 2,
				strokeStyle: '#fda900'
			},
			timestampFormatter: SmoothieChart.timeFormatter
		});

		smoothie.streamTo(canvas);

		smoothie.addTimeSeries(line1, {
			lineWidth: 2,
			strokeStyle: '#e00200',
			fillStyle: 'rgba(225,153,22,0.17)'
		});
		smoothie.streamTo(canvas, 1000);
	});
</script>

<div class="mt-5 mb-5">
	<h2 class="text-lg font-semibold mb-2">{label}</h2>
	<p>Topic: {topic}</p>
	<canvas bind:this={canvas} width="900" height="344"></canvas>
</div>

<style>
	div.smoothie-chart-tooltip {
		background: #444;
		padding: 1em;
		margin-top: 20px;
		font-family: consolas;
		color: white;
		font-size: 10px;
		pointer-events: none;
	}
</style>
