<script context="module">
    const routes = [
        { url: '^/?$', component: Index, name: 'home' },
    ];

    export const router = new Router(routes);
</script>

<script>
    import { Router } from './utils.js';

    import Layout from './Layout.svelte';

    // pages
    import NotFound from './NotFound.svelte';
    import Index from './pages/Index.svelte';

    let page;

    const pageComponent = router.getComponent() || NotFound;
    console.log('??', pageComponent)
</script>


<Layout>
    <svelte:component this={pageComponent} />
</Layout>
