(async function() {
  var url = "/data/business.json";
  var data = await (await fetch(url)).json();
  data.articles.forEach(art => {
    var head = document.createElement("div");
    head.style.backgroundImage = `url(${art.urlToImage})`;
    head.classList.add("head");
    head.setAttribute("loading", "lazy");

    var aElem = document.createElement("a");
    aElem.setAttribute("href", art.url);

    var title = document.createElement("div");
    title.classList.add("title");
    title.innerText = art.title;
    head.appendChild(title);

    var desc = document.createElement("div");
    desc.classList.add("desc");
    desc.innerHTML = art.description;

    var title2 = (title.innerText = art.title);
    var share = document.createElement("p");
    share.innerHTML = `<a href="https://t.me/share/url?url=${aElem}&text=${title2}" target="_blank"><img class="tel share" src="/img/tel.svg" alt="telegram share"></a>
    <a href="https://www.facebook.com/sharer/sharer.php?u=${aElem}" target="_blank"><img class="fb share" src="/img/fb.svg" alt="fb share"></a>`;
    aElem.appendChild(share);

    aElem.appendChild(head);
    aElem.appendChild(desc);

    //anchorElem.innerHTML = desc;
    //document.body.appendChild(head);
    document.body.appendChild(aElem);
  });
  var skocz = document.createElement("p");
  skocz.innerHTML =
    '<p class="top"><a id="skocz" class="btn" href="#top">^Skocz do góry^</a><br/>k20 v0.1 ^p^</p>';
  document.body.appendChild(skocz);
})();

let element = document.body;
let lampa = localStorage.getItem("lampa");

if (!lampa) {
  var elemen = document.body;
  element.classList.toggle(lampa);
  localStorage.setItem("lampa", "white-mode");
  lampa = "white-mode";
} else {
  element.classList.toggle(lampa);
}

function lampka() {
  if (lampa === "white-mode") {
    element.classList.toggle("dark-mode");
    localStorage.setItem("lampa", "dark-mode");
    lampa = "dark-mode";
  } else if (lampa === "dark-mode") {
    element.classList.toggle("dark-mode");
    localStorage.setItem("lampa", "white-mode");
    lampa = "white-mode";
  }
}
