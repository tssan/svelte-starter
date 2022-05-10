<div class="wrapper">
    <h2>Login</h2>

    <form>
        <input type="text" id="username" name="username" placeholder="username..." />

        <input type="password" id="password" name="password" placeholder="password..." />

        <div class="input-group-inline">
            <div class="input-group">
                <input type="checkbox" id="reg1" name="reg1"/>
                <label for="reg1">Remember me</label>
            </div>

            <div class="input-group forgot-pass">
                <a href="#">Forgot password?</a>
            </div>
        </div>

        <button class="btn btn-full btn-primary" type="submit"><i class="fa-solid fa-right-to-bracket"></i>Login</button>
    </form>
</div>

<style>
    .wrapper {
        padding: 30px;
        display: flex;
        flex-direction: column;
        align-content: center;
    }
    h2 {
        text-align: center;
    }
    form {
        background-color: #e5e5e5;
        border: 1px solid #aaa;
        color: #333;
        margin: 0 auto;
        max-width: 500px;
        padding: 40px;
    }
    .input-group-inline {
        margin-bottom: 15px;
    }
    .input-group.forgot-pass {
        align-self: center;
        text-align: right;
        font-size: 0.7rem;
    }
</style>
