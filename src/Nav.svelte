<nav>
    <input type="checkbox" id="nav-check">
    <div class="nav-header">
        <a href="/">
            <div class="nav-title">Svelte-Starter</div>
        </a>
    </div>

    <div class="nav-hamburger-btn">
        <label for="nav-check">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>

    <div class="nav-links">
        <a href="/example"><span>Example</span></a>
        <a href="/login"><span>Login</span></a>
    </div>
</nav>

<style>
    nav {
        height: 50px;
        width: 100%;
        background-color: var(--info-dark-5);
        position: relative;
        z-index: 9999;
    }
    nav > .nav-header {
        display: inline-flex;
        align-items: center;
        height: 100%;
    }
    nav > .nav-header > a {
        display: inline-flex;
        align-items: center;
        padding: 5px;
    }
    nav > .nav-header > a > .nav-title {
        display: inline-block;
        font-size: 22px;
        color: var(--secondary-light-1);
        font-weight: bold;
    }
    nav > .nav-hamburger-btn {
        display: none;
    }
    nav > .nav-links {
        display: inline-flex;
        align-items: center;
        float: right;
        font-size: 18px;
        height: 100%;
        gap: 5px;
    }
    nav > .nav-links > a {
        display: inline-block;
        padding: 10px 15px;
        text-decoration: none;
        color: var(--secondary-light-1);
    }
    nav > .nav-links > a:last-child {
        margin-right: 10px;
    }
    nav > .nav-links > a:hover {
        cursor: pointer;
        background-color: var(--info);
    }
    nav > #nav-check {
        display: none;
    }
    @media (max-width:600px) {
        nav > .nav-hamburger-btn {
            display: inline-block;
            position: absolute;
            right: 0px;
            top: 0px;
        }
        nav > .nav-hamburger-btn > label {
            display: inline-block;
            width: 50px;
            height: 50px;
            padding: 13px;
        }
        nav > .nav-hamburger-btn > label:hover,
        nav  #nav-check:checked ~ .nav-hamburger-btn > label {
            cursor: pointer;
            background-color: var(--info);
        }
        nav > .nav-hamburger-btn > label > span {
            display: block;
            width: 25px;
            height: 10px;
            border-top: 2px solid var(--secondary-light-1);
        }
        nav > .nav-links {
            position: absolute;
            display: block;
            width: 100%;
            background-color: var(--info-dark-1);
            height: 0px;
            transition: all 0.3s ease-in;
            overflow-y: hidden;
            top: 50px;
            left: 0px;
        }
        nav > .nav-links > a {
            display: block;
            width: 100%;
            margin: 0;
        }
        nav > #nav-check:not(:checked) ~ .nav-links {
            height: 0px;
        }
        nav > #nav-check:checked ~ .nav-links {
            height: calc(100vh - 50px);
            overflow-y: auto;
        }
        nav > #nav-check:checked ~ .nav-links > a > span {
            display: inline-block;
            padding-left: 10px;
        }
    }
</style>
