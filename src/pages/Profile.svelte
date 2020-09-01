<script>
  import {onMount} from "svelte";
  import {getCurrentUser} from '../services/auth.service';
  let currentUser = {token:'',user:{email:''}};
  onMount(()=> currentUser = getCurrentUser());
</script>


<div class="container">
  <header class="jumbotron">
    <h3>
      <strong>{currentUser.user.email}</strong> Profile
    </h3>
  </header>
  <p>
    <strong>Token:</strong> {currentUser.token.substring(0, 20)} ...{" "}
    {currentUser.token.substr(currentUser.token.length - 20)}
  </p>
  <p>
    <strong>Id:</strong> {currentUser.user._id}
  </p>
  <p>
    <strong>Email:</strong> {currentUser.user.email}
  </p>
  <strong>Authorities:</strong>
</div>