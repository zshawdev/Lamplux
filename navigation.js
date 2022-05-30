class NavBar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<input type="checkbox" class="navigation__checkbox" id="navi-toggle">
        <label for="navi-toggle" class="navigation__button">
            <span class="navigation__icon">&nbsp;</span>
        </label>
      
        <a href="#" class="navigation__logo">
          <span class="navigation__logo--primary">LAMPLUX</span>
          <span class="navigation__logo--sub">ランプ・ルクス</span>
        </a>
      
        <nav class="navigation__nav">
          <ul class="navigation__list">
            <li class="navigation__item"><a href="#" class="navigation__link">Interviews</a></li>
            <li class="navigation__item"><a href="#" class="navigation__link">More Lamp</a></li>
            <li class="navigation__item"><a href="#" class="navigation__link">GoFundMe</a></li>
            <li class="navigation__item"><a href="#" class="navigation__link">Contact</a></li>
          </ul>
        </nav>
    `
    }
}
customElements.define("nav-bar", NavBar)