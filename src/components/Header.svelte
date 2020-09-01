<script>
    import {link} from 'svelte-spa-router';
    import active from 'svelte-spa-router/active';
    // import {getCurrentUser} from '../services/auth.service';
    // let currentUser = {token:'',user:{email:''}};
    // if user -> show profile+logout or login+register
</script>
    <nav>
        <a href="" class="logo">
            <img src="" alt="" class="logo-cover">
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

    nav{
        background-color: #333;
        display: flex;
        justify-content: space-between;
        width: 95%;
        margin: 0 auto;
        align-items: center;
        padding: 0 5px;
        flex-wrap: wrap;
    }
    ul{
        display: flex;
        flex-wrap: wrap;
    }
    li{
        margin-right: 10px;
    }
    .logo-cover{
        display: block;
        background-color: crimson;
        width: 25px;
        height: 25px;
    }
    a{color: #f4f4f4}
    :global(a.active) {
        color: red;
    }
</style>