<script>
    import { createEventDispatcher } from 'svelte';
    const dispatch = createEventDispatcher();
    const onSubmit = e => {
        e.preventDefault();
        const {taskText} = e.target.elements;
        if(!taskText.value.trim()) return;
        dispatch('add', taskText.value);
    };
    const onClear = () => dispatch('clear');
</script>

<div>
    <form on:submit={onSubmit}>
        <label>
            <input type="text"
                   required
                   name="taskText"
                   placeholder="taskText"
            />
        </label>
        <button>add</button>
    </form>
    <button on:click={onClear}>Clear completed</button>
</div>