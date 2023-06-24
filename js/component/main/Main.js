export const Main = (content)=> `

<nav class="navbar bg-dark border-bottom border-bottom-dark" data-bs-theme="dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Soquel</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#/">
            <img class="ico_nav" src="img/home.svg" alt="">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/dashboard">
            <img class="ico_nav" src="img/settings.svg" alt="">
            Dashboard
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#/search">
            <img class="ico_nav" src="img/search.svg" alt="">
            Search
          </a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<div class="container text-center pt-2 pb-5">

  <main>${content}</main>

</div>

<footer class="p-5 text-center footer">
  <h4 class="pb-3">Soquel</h4>
</footer>

`