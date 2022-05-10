<script context="module">
    const routes = [
        { url: '^/?$', component: Index},
        { url: '^example/?$', component: PageExample},
        { url: '^login/?$', component: Login},
    ];

    export const router = new Router(routes);
</script>

<script>
    import { Router } from './utils.js';

    import Layout from './Layout.svelte';

    // pages
    import NotFound from './NotFound.svelte';
    import Index from './pages/Index.svelte';
    import PageExample from './pages/PageExample.svelte';
    import Login from './pages/Login.svelte';

    const pageComponent = router.getComponent() || NotFound;
</script>


<Layout>
    <svelte:component this={pageComponent} />
</Layout>
