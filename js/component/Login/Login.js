export const Login = ()=>`

<div class="container text-center">
  <div class="div_form">
    <form class="form">
        <h2 class="h1 mt-3">Ingresa</h2>
        <div class="row m-auto mt-5">
            <div class="col-12">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="User">
                </div>
            </div>
            <div class="col-12">
                <label for="inputPassword5" class="form-label" >Password</label>
                <input type="password" placeholder="Password" id="inputPassword5" class="form-control" aria-labelledby="passwordHelpBlock">
                <div id="passwordHelpBlock" class="form-text" style="color: #fff;">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
            </div>
        </div>
        <div class="btns mt-4 ">
            <a href="#/" type="button" class="btn btn-light">Ingresar</a>

        </div>

    </form>

    
  </div>
</div>

`