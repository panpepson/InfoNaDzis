(async function () {
	var url = 'news.json';
	var data = await (await fetch(url)).json();
	data.articles.forEach(art => {
		var head = document.createElement("div");
		head.style.backgroundImage = `url(${art.urlToImage})`;
		head.classList.add('head');

		var aElem = document.createElement('a');
		aElem.setAttribute("href", art.url);

		var title = document.createElement('div');
		title.classList.add('title');
		title.innerText = art.title;
		head.appendChild(title);

		var desc = document.createElement('div');
		desc.classList.add('desc');
		desc.innerHTML = art.description;

		aElem.appendChild(head);
		aElem.appendChild(desc);

		//anchorElem.innerHTML = desc;
		//document.body.appendChild(head);
		document.body.appendChild(aElem);
	});

})();
