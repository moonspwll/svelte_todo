<script>
  import { push } from 'svelte-spa-router'
  import {register} from '../services/auth.service';
  const onSubmit = async e => {
    e.preventDefault();
    const {email, password} = e.target.elements;
    if(!email.value.trim() && !password.value.trim()) return ;
    register(email.value.trim(),password.value.trim())
    .then(()=>push('/profile'));
  }
</script>


<div class="container">
  <h1 class="text-right ">Register</h1>
  <div class="row justify-content-end">
    <div class="col-6 bg-info">
      <form on:submit={onSubmit}>
        <div class="form-group">
          <label for="email">email</label>
          <input type="email"
                 class="form-control"
                 name="email"
                 id="email"
                 placeholder="email"
                 required
          />
        </div>
        <div class="form-group">
          <label for="password">password</label>
          <input type="password"
                 class="form-control"
                 name="password"
                 id="password"
                 placeholder="password"
                 required
          />
        </div>
        <div class="form-group">
          <input type="submit">
        </div>
      </form>
    </div>
  </div>
</div>


<style>

</style>