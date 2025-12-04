let header = document.getElementsByTagName("Header");
 
 header[0].innerHTML = `<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.html"><img src="logga.png" width="35%"></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link" href="boka.html">Bokning</a>
        <a class="nav-link" href="tjänster.html">Tjänster</a>
        <a class="nav-link" href="priser.html">priser</a>
        <a class="nav-link" href="karta.html">Hitta</a>
        <a class="nav-link" href="miljö.html">Miljö</a>
        <a class="nav-link" href="vision.html">Info</a>
      </div>
    </div>
  </div>`
  let footer = document.getElementsByTagName("footer");
 
 footer[0].innerHTML = ` <footer class="fixed-bottom" align="center">
      <figure class="text-center">
  <blockquote class="blockquote">
    <p>"Bli en del av Familjen"</p>
  </blockquote>
  <figcaption class="blockquote-footer">
    Draganas <cite title="Source Title">städ och fönsterputts</cite>
  </figcaption>
</figure>
    </footer>`