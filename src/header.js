import { LitElement, html, css } from 'lit-element';
import style from './styles/galeria-fotos-style';
import './section-fotos';

class Header extends LitElement {
  static properties = {
    isModalOpen: { type: Boolean },
    getUrlAdd: { type: String },
    getEtiquetaAdd: { type: String },
    valueSearh: { type: String },
  };

  static styles = css`
    ${style}
  `;

  constructor() {
    super();
    this.isModalOpen = false;
    this.getUrlAdd = '';
    this.getEtiquetaAdd = '';
    this.valueSearh = '';
    this.photos = JSON.parse(localStorage.getItem('photos')) || [];
  }

  render() {
    return html`
      <div class="container-fotos">
        <div class="ccontent-filter-addFoton">
          <div class="texto-inputFilter">
            <div class="icono-person-text">
              <i>icono</i>
              <div class="texto-double">
                <span class="title-primary">My Unsplash</span>
                <span class="title-secundary">devchallenges.io</span>
              </div>
            </div>
            <div class="box">
              <div class="container-1">
                <span class="icon">
                  <img src="../assets/search_header.svg" class="fa fa-search">
                </span>
                <input type="search" id="search" @input="${this._getValSearch}" placeholder="Search by name" />
              </div>
            </div>
          </div>
          <div class="buton-add-foton">
            <button @click="${this.openModal}" type="submit">Add a photo</button>
          </div>
        </div>
      </div>
      <section-fotos
        .getUrlAdd="${this.getUrlAdd}"
        .getEtiquetaAdd="${this.getEtiquetaAdd}"
        .photos="${this.photos}"
        .valueSearh="${this.valueSearh}"
      ></section-fotos>
      <!-- Modal -->
      ${this.isModalOpen
        ? html`
            <div class="modal-container">
              <!-- Contenido del modal aquí -->
              <div class="modal-content">
                <div class="modal-header">
                  <span>Add a new photo</span>
                </div>
                <div class="modal-body">
                  <div class="label-name-input">
                    <label for="etiqueta">Label</label>
                    <input @input="${this._getInput1}" type="text" id="etiqueta" class="input-data" placeholder="Enter Image Label">
                  </div>
                  <div class="label-name-input">
                    <label for="etiqueta2">Photo URL</label>
                    <input @input="${this._getInput2}" type="text" id="etiqueta2" class="input-data" placeholder="https://images.unsplash.com/photo-1584395630827-860eee694d7b?ixlib=r...">
                  </div>
                </div>
                <div class="modal-footer">
                  <div class="buton-add-foton-closed">
                    <button @click="${this.closeModal}">Cerrar</button>
                  </div>
                  <div class="buton-add-foton">
                    <button @click="${this._getDataImgNew}">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          `
        : ''}
    `;
  }

  openModal() {
    this.isModalOpen = true;
  }

  closeModal() {
    this.isModalOpen = false;
  }

  _getInput1(event) {
    this.getUrlAdd = event.target.value;
  }

  _getInput2(event) {
    this.getEtiquetaAdd = event.target.value;
  }

  _getDataImgNew() {
    const dataAdd = {
      inputUrl: this.getUrlAdd,
      inputEtiqueta: this.getEtiquetaAdd,
    };
    this.photos.push(dataAdd);
    localStorage.setItem('photos', JSON.stringify(this.photos));
    this.getUrlAdd = '';
    this.getEtiquetaAdd = '';
    this.requestUpdate();
    this.closeModal();
    this.reloadPage();
  }

  reloadPage() {
    location.reload();
  }

  _getValSearch(event) {
    const searchText = event.target.value.toLowerCase();
    this.valueSearh = searchText;
    this.requestUpdate();
    const sectionFotos = this.shadowRoot.querySelector('section-fotos');
    sectionFotos.filterImages(searchText);
  }
}

customElements.define('header-galeria', Header);
