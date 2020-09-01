<script>
    import {link} from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
</script>
    <nav>
        <a href="" class="logo">
            <img src="" alt="" class="logo-cover" width="25">
        </a>
        <ul>
            <li>
                <a href="/"
                   use:link
                   use:active={{path: '/', className: 'active'}}
                >
                    home
                </a>
            </li>
            <li>
                <a href="/profile"
                   use:link
                   use:active={{path: '/profile', className: 'active'}}
                >
                    profile
                </a>
            </li>
            <li>
                <a href="/login"
                   use:link
                   use:active={{path: '/login', className: 'active'}}
                >
                    login
                </a>
            </li>
            <li>
                <a href="/register"
                   use:link
                   use:active={{path: '/register', className: 'active'}}
                >
                    register
                </a>
            </li>
            <li>
                <a href="/notfound"
                   use:link
                   use:active={{path: '/notfound', className: 'active'}}
                >
                    notfound
                </a>
            </li>
        </ul>
    </nav>
<style>
    nav{background-color: #333}
    a{color: #f4f4f4}
    :global(a.active) {
        color: red;
    }
</style>