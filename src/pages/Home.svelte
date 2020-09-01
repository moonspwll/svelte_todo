<script>
  import {onMount} from "svelte";
  import { getUsers } from '../services/users.service';

  let title = 'Home';
  let users = [];
  onMount(async () => users = (await getUsers()).data.users);
</script>


<div class="container">
  <h1>{title}</h1>
  {#if (!users.length)}
    <p>loading users...</p>
    {:else}
      <ul class="jumbotron">
      {#each users as user}
        <li>
          {user.email}
        </li>
      {/each}
      </ul>
  {/if}
</div>
