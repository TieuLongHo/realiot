<script lang="ts">
	import { onMount } from 'svelte';
	import { tick } from 'svelte';
	import mqtt from 'mqtt';

	let show_password: boolean = false;
	let ssid: string = '';
	let password: string = '';

	let devices: string[] = [];
	let selectedDevice: string = '';
	let isFlashing: boolean = false;
	let flashStatus: string = '';
	let flashDots: string = '';

	const mqttClient = mqtt.connect('mqtt://172.20.0.99:9001');

	mqttClient.on('connect', () => {
		console.log('Connected to MQTT broker');
		mqttClient.subscribe('esp32/ports');
		mqttClient.subscribe('esp32/flash_status');
		mqttClient.publish('esp32/flash', 'get_ports');
	});

	mqttClient.on('error', (error) => {
		console.error('MQTT error:', error);
	});

	const handleSubmit = async (event: Event) => {
		event.preventDefault();

		if (!ssid || !password) {
			alert('Please provide both SSID and password');
			return;
		}

		try {
			const topic = 'access_point/settings';
			mqttClient.publish(topic, JSON.stringify({ ssid, password }));

			console.log('Published SSID and password to MQTT topic:', topic);

			ssid = '';
			password = '';
		} catch (error) {
			console.error('Error publishing MQTT message:', error);
			alert('Failed to publish MQTT message');
		}
	};

	mqttClient.on('message', (topic, message) => {
		if (topic === 'esp32/ports') {
			devices = JSON.parse(message.toString());
			if (!devices.includes(selectedDevice)) {
				selectedDevice = '';
			}
		} else if (topic === 'esp32/flash_status') {
			flashStatus = message.toString();
			isFlashing = flashStatus === 'flashing';
			if (isFlashing) {
				updateFlashingDots();
			}
		}
	});

	const handleFlashDevice = async () => {
		if (selectedDevice) {
			try {
				console.log('Flashing device:', selectedDevice);
				const flashTopic = 'esp32/flash_device';
				mqttClient.publish(flashTopic, selectedDevice);
			} catch {
				console.error('Error flashing device:', error);
				alert('Failed to flash device');
			}
		}
	};

	const handleShutdown = async () => {
		try {
			console.log('Shutdown button clicked');
			const shutDownTopic = 'device/shutdown';
			mqttClient.publish(shutDownTopic, 'shutdown');
		} catch (error) {
			console.error('Error triggering Shutdown:', error);
			alert('Failed to trigger Shutdown');
		}
	};

	onMount(() => {
		return () => {
			mqttClient.end();
		};
	});
	const updateFlashingDots = async () => {
		while (isFlashing) {
			flashDots = '.';
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 500));
			if (!isFlashing) break;

			flashDots = '..';
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 500));
			if (!isFlashing) break;

			flashDots = '...';
			await tick();
			await new Promise((resolve) => setTimeout(resolve, 500));
		}
		flashDots = '';
	};
</script>

<div class="card variant-soft p-16">
	<h1 class="font-light text-3xl pb-12">Change Access Point Settings</h1>
	<form class="flex align-sub" on:submit={handleSubmit}>
		<div>
			<label class="label">
				<span>New SSID</span>
				<input type="text" bind:value={ssid} placeholder="SSID" class="input" />
			</label>
			<label class="label">
				<span>New Password</span>
				{#if show_password}
					<input type="text" bind:value={password} placeholder="Password" class="input" />
				{:else}
					<input type="password" bind:value={password} placeholder="Password" class="input" />
				{/if}
			</label>
			<div class="inline-flex align-middle space-x-5 mt-5">
				<label class="label flex align-middle space-x-3">
					<span>Show Password</span>
					<input type="checkbox" bind:checked={show_password} class="input w-5 h-5 rounded-none" />
				</label>
				<button type="submit" class="btn variant-ghost-secondary">Save and Reboot</button>
			</div>
		</div>
	</form>
</div>

<div class="card variant-soft p-16 mt-10">
	<h1 class="font-light text-3xl pb-12">System</h1>
	<form class="flex align-sub" on:submit|preventDefault={handleShutdown}>
		<button type="submit" class="btn variant-ghost-secondary">Shutdown</button>
	</form>
</div>
<div class="card variant-soft p-16 mt-10">
	<h1 class="font-light text-3xl pb-12">Flash ESP32 Device</h1>
	<form class=" align-sub mb-4" on:submit|preventDefault={handleFlashDevice}>
		<select bind:value={selectedDevice} class="input" id="deviceSelected">
			<option value="" disabled>Select a device</option>
			{#each devices as device}
				<option value={device}>{device}</option>
			{/each}
		</select>
		<button
			disabled={!selectedDevice || isFlashing}
			type="submit"
			class="btn variant-ghost-secondary">Flash Device</button
		>
	</form>
	<div>
		<p>{flashStatus}{flashDots}</p>
	</div>
</div>

<style>
	#deviceSelected {
		width: 30%;
		max-width: 100%;
		min-width: 20%;
	}
</style>
