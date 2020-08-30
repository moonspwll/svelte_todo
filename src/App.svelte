<script>
	let tasks = [
		{taskText: "Homework :)", done: false},
		{ taskText: "build an app", done: false,  },
		{ taskText: "world domination", done: false,  }
	];
	let task = "";

	const handleSubmit = (text) => {
		tasks = [...tasks, {taskText: text, done: false}];
		task = "";
		console.log(tasks)
	}

	const handleClear = () => {
		tasks = tasks.filter(task => !task.done)
	}
</script>

<main>
	<h1>Svelte ToDo</h1>
	<input type="text" bind:value={task}>
	<div class="tasks">
		{#each tasks as {taskText, done}, i}
			<div>
				{i + 1}. {taskText} <input type="checkbox" bind:checked={done}>
			</div>
		{/each}
	</div>
	<button on:click={handleSubmit(task)}>Add new</button>
	<button on:click={handleClear}>Clear completed</button>
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	.tasks {
		min-height: 500px;
		margin: 0 auto;
		padding: 10px;
		text-align: left;
		width: 400px;
		/* border: 1px solid red; */
	}

	button {
		background-color: #fff;
		color: red;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>
