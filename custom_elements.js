class PersonalCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      .card {
        display: grid;
        max-width: 100em;
        grid-template-columns: 1fr 2fr; 
        gap: 1em;
        align-items: center;
        padding: 1.5em;
        background-color: var(--tab-background-color);
        border-radius: 2em;
        margin: 3em auto;
      }

      img {
        object-fit: contain;
        object-position: center;
        width: 100%;
        max-width: 100%; 
        height: auto;
        display: block;
        border-radius: 1em;
      }

      h2 {
        font-size: 2.5em;
      }

      @media (max-width: 1000px) {
        .card {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1em;
          align-items: center;
          padding: 1em;
          background-color: var(--tab-background-color);
          border-radius: 1px;
        }
      }
    </style>
    <div class="card">
      <picture id="card-picture">
        <source id="card-large-picture" media="(min-width: 1400px)" srcset="">
        <img id="card-small-picture" src="" alt="">
      </picture>

      <div id="section-content">
        <h2 id="card-title"></h2>
        <p id="card-info"></p>
      </div>
    </div>`;

    const source_large = this.shadowRoot.getElementById("card-large-picture");
    source_large.srcset = this.getAttribute("large-pic-src") || "";
    const source_small = this.shadowRoot.getElementById("card-small-picture");
    source_small.src = this.getAttribute("small-pic-src") || "";
    source_small.alt = this.getAttribute("alt") || "No alt provided";

    this.shadowRoot.getElementById("card-title").textContent = this.getAttribute("title") || "No title given."
    this.shadowRoot.getElementById("card-info").textContent = this.getAttribute("info") || "No info given."
  }

  disconnectedCallback(){
    console.log("A personal card has been removed.");
  }

  adoptedCallback(){
    console.log("A personal card has been moved to a new page.");
  }

  attributeChangedCallback(name, oldValue, newValue){
    console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
    updateStyle(this);
  }
}

class ProjectCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
    <style>
      .card {
        display: grid;
        width: 100%;
        max-width: 100%;
        grid-template-columns: 1fr; 
        padding:  0em 0em 2em 0em;
        background-color: var(--tab-background-color);
        border-radius: 3em 3em;
        margin: 0 auto;
      }

      img {
        object-position: center;
        width: 100%;
        max-width: 100%; 
        height: auto;
        border-radius: 3em 3em 0em 0em;
      }

      h2 {
        font-size: 2.5em;
      }

      #section-content {
        padding: 0em;
        margin: .5em;
      }

      @media (max-width: 1400px) {
        .card {
          display: grid;
          width: 100%;
          max-width: 100%;
          grid-template-columns: 1fr; 
          padding:  0em 0em 2em 0em;
          background-color: var(--tab-background-color);
          border-radius: 3em 3em;
          margin: 0 auto;
        }

        img {
          object-position: center;
          width: 100%;
          max-width: 100%; 
          height: auto;
          border-radius: 3em 3em 0em 0em;
        }

        h2 {
          font-size: 2em;
        }

        p {
          font-size: 0.8em;
        }

        #section-content {
            padding: 0em;
            margin: .5em;
        }
    }
    </style>
    <div class="card">
      <picture id="card-picture">
        <source id="card-large-picture" media="(min-width: 1400px)" srcset="">
        <img id="card-small-picture" src="" alt="">
      </picture>

      <div id="section-content">
        <h2 id="card-title"></h2>
        <p id="card-info"></p>
        <br>
            <a id="content-link" href="">Learn more here.</a>
      </div>
    </div>`;
    
    const source_large = this.shadowRoot.getElementById("card-large-picture");
    source_large.srcset = this.getAttribute("large-pic-src") || "";
    const source_small = this.shadowRoot.getElementById("card-small-picture");
    source_small.src = this.getAttribute("small-pic-src") || "";
    source_small.alt = this.getAttribute("alt") || "No alt provided";

    const content_link = this.shadowRoot.getElementById("content-link");
    content_link.href = this.getAttribute("content-link");

    this.shadowRoot.getElementById("card-title").textContent = this.getAttribute("title") || "No title given."
    this.shadowRoot.getElementById("card-info").textContent = this.getAttribute("info") || "No info given."
  }

  disconnectedCallback(){
    console.log("A project card has been removed.");
  }

  adoptedCallback(){
    console.log("A project card has been moved to a new page.");
  }

  attributeChangedCallback(name, oldValue, newValue){
    console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);
    updateStyle(this);
  }
}

customElements.define('project-card', ProjectCard);
customElements.define('personal-card', PersonalCard);
