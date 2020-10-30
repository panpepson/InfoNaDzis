(async function() {
  var url = "/data/general.json";
  var data = await (await fetch(url)).json();
  data.articles.forEach(art => {
    var head = document.createElement("div");
    head.style.backgroundImage = `url(${art.urlToImage})`;
    head.classList.add("head");

    var aElem = document.createElement("a");
    aElem.setAttribute("href", art.url);

    var title = document.createElement("div");
    title.classList.add("title");
    title.innerText = art.title;
    head.appendChild(title);

    var desc = document.createElement("div");
    desc.classList.add("desc");
    desc.innerHTML = art.description;

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
function lampka() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
//'<p class="text-center"><a id="Button-1" class="btn btn-infot" href="javascript:void();" role="button"> Skocz do góry</a></p>'