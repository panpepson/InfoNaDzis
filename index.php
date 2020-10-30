<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Info na dziś</title>
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/img/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="96x96"
      href="/img/favicon-96x96.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/img/favicon-16x16.png"
    />
    <link rel="manifest" href="/manifest.json" />
    <meta name="theme-color" content="#ffffff" />
    <link rel="manifest" href="manifest.json" />
    <link rel="stylesheet" href="index.css" />
    <meta property="fb:app_id" content="1044085795609884" />
    <meta property="og:title" content="Dziś w PL na wlodawa.net " />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Dziś w PL na wlodawa.bnet"/>
    <meta property="og:url" content="https://dzis.wlodawa.net" />
    <meta property="og:description" content="Prosty agregat wiadomości dnia. Aplikacja powstała aby zachowac higienę psychiczną czytelnika :)" /> 
    <meta property="og:image" content="https://dzis.wlodawa.net/img/dzis-wlodawa-256x256.png" />
  </head>

  <body>
    <span id="top"></span>
    <header>
    <span class="lampka" onclick="lampka()">Dziś w Polsce</span>
    <div class="nav">
        <a href="index.php">Start</a> | <a href="nauka.html">Nauka</a> |
        <a href="plotka.html">Plotka</a>
        <Br /> <a href="technologia.html">Technologia</a> |
        <a href="zdrowie.html">Zdrowie</a> |
        <a href="sport.html">Sport</a> 
       </div>

    </header>

    <script src="index.js"></script>
    <p class="text-center"></p>
      <script>
        if ("serviceWorker" in navigator) {
          window.addEventListener("load", function() {
            navigator.serviceWorker.register("/swd1.js").then(
              function(registration) {
                console.log(
                  "ServiceWorker registration successful with scope: ",
                  registration.scope
                );
              },
              function(err) {
                console.log("ServiceWorker registration failed: ", err);
              }
            );
          });
        }
      </script>

<script>function lampka(){ var element = document.body; element.classList.toggle("dark-mode");}</script>

  </body>
</html>
