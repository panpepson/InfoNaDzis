class mojemenu extends HTMLElement {
  constructor() {
    super();
    const _style = document.createElement("style");
    const _template = document.createElement("template");

    _style.innerHTML = `.nav {margin-bottom: -1rem;text-align: center;font-size: 0.6em;}
		.lampa {display:grid;grid-template-columns: 20% 60% 20%;grid-template-rows: 1fr;
			gap: 0px 0px;grid-template-areas: "lamp dzis prawe";}.lamp {grid-area: lamp;}.dzis {grid-area: dzis;}.prawe {grid-area: prawe;}
		`;

    _template.innerHTML = `<div class="lampa"><div class="lamp" onclick="lampka()">◐</div>
		<div class="dzis">Dziś w Polsce</div><div class="prawe" onclick="alert(\'Pogoda będzie później ☁☃❆☀ヅ\')">☂</div></div>
      <div class="nav"><a href="index.html">Start</a> | <a href="nauka.html">Nauka</a> | 
      <a href="biznes.html">Biznes</a> |
		<a href="sport.html">Sport</a><Br /> <a href="technologia.html">Technologia</a> |
		<a href="zdrowie.html">Zdrowie</a> | <a href="plotka.html">Plotka</a></div>
	`;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(_style);
    this.shadowRoot.appendChild(_template.content.cloneNode(true));
  }
}
customElements.define("moje-menu", mojemenu);
