<script>
  import Router from 'svelte-spa-router';
  import Header from './components/Header.svelte';
  import Footer from './components/Footer.svelte';
  import Home from './pages/Home.svelte';
  import Profile from './pages/Profile.svelte';
  import Login from './pages/Login.svelte';
  import Register from './pages/Register.svelte';
  import NotFound from './pages/NotFound.svelte';
  const routes = new Map();
  routes.set('/', Home);
  routes.set('/profile', Profile);
  routes.set('/login', Login);
  routes.set('/register', Register);
  routes.set('*', NotFound);
</script>
<header><Header/></header>
<main><Router {routes}/></main>
<footer><Footer/></footer>