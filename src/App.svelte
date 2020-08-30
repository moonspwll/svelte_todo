<script>
	import Task from "./Task.svelte";
	import AddTask from "./AddTask.svelte";

	let tasks = [
		{taskText: "Homework :)", done: false},
		{taskText: "build an app", done: true,},
		{taskText: "world domination", done: false,}
	];
	const deleteTask = e => tasks = [...tasks].filter((_, i) => i !== e.detail);
	const findTask = index => tasks[index];
	const doneTask = e => findTask(e.detail).done = !findTask(e.detail).done;
	const createTask = taskText => ({taskText, done: false});
	const addTask = e => tasks = [createTask(e.detail),...tasks];
	const clearTasks = () => tasks = tasks.filter(task => !task.done);
</script>

<main>

	<h1>Svelte ToDo</h1>

	<AddTask on:add={addTask}
		     on:clear={clearTasks}
	/>

	<br/>

	<div class="tasks">
		{#each tasks as task, index}
			<Task   {...task}
					index={index}
					on:deleted={deleteTask}
					on:done={doneTask}
			/>
		{/each}
	</div>

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
