<script lang="ts">
	import { Stepper, Step } from '@skeletonlabs/skeleton';
	import { navigate } from 'svelte-routing';
	import Lorem from './placeholder/Lorem.svelte';
	import eduboardImage from '$lib/assets/iotedu_fullboard.jpeg';
	function onCompleteHandler(e: Event): void {
		navigate('/exercises/');
	}
</script>

<div class="card variant-soft p-16">
	<Stepper on:complete={onCompleteHandler}>
		<Step>
			<svelte:fragment slot="header">Welcome</svelte:fragment>
			Welcome to RealIoT. In today’s world, interactive learning methods have taken on an important role
			in education. Especially in technical training, hands-on exercises can be a great help in making
			complex topics understandable. The IoT Education Board is one such training board that facilitates
			the connection between theory and practice. This is my Bachelor's thesis project. I hope you enjoy
			it.
		</Step>
		<Step>
			<svelte:fragment slot="header">IoT-Education Board</svelte:fragment>
			<p>
				The IoT Education Board is a board developed by Mr. Thomas Jäggi, which is intended for
				education in the field of control and regulation, as well as a learning platform for
				applications in the the field of IoT. This board has two microprocessors: the M5StickC Plus
				and the Olimex ESP32-DevKit-LiPo. With more than 18 sensors and 10 actuators it is possible
				to program a variety of prototypes on it.
			</p>
			<img src={eduboardImage} alt="IoT-Education Board " width="70%" />
		</Step>
		<Step>
			<svelte:fragment slot="header">Visual Studio Code</svelte:fragment>
			In this project, we will use Visual Studio Code as the main development environment.
		</Step>
		<Step>
			<svelte:fragment slot="header">Platform IO</svelte:fragment>
			PlatformIO is an open-source ecosystem for IoT development. In this part, we'll talk about why
			we use PlatformIO.
		</Step>
		<Step>
			<svelte:fragment slot="header">How does it work?</svelte:fragment>
			Here we will see how the RealIoT project works.
		</Step>
		<!-- <Step>
			<svelte:fragment slot="header">File structure</svelte:fragment>
			<Lorem />
		</Step> -->
		<Step>
			<svelte:fragment slot="header">Have Fun!</svelte:fragment>
			<Lorem />
		</Step>
	</Stepper>
</div>
