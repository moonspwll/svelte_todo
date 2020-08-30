<script>
 import { createEventDispatcher } from 'svelte';
 export let taskText;
 export let done;
 export let index;
 const dispatch = createEventDispatcher();
 const deleteTask = () => dispatch('deleted', index);
 const doneTask = () => dispatch('done', index);
 const onDone = () => doneTask();
 const onDelete = () => deleteTask();
</script>

<div class="{done? 'task done' : 'task'}">
    {index + 1}. {taskText}
    <label>
        <input type="checkbox"
               bind:checked={done}
               on:click={onDone}
        />
    </label>
    <button on:click={onDelete}>del</button>
</div>

<style>
    .task{
        box-shadow: 1px 1px 15px;
        margin-bottom: 1em;
    }
    .task.done{
        background-color: crimson;
        color: white;
        text-decoration: line-through;
    }
</style>