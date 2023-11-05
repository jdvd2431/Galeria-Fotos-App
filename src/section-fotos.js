import { LitElement, html, css } from 'lit-element';
import style from './styles/galeria-fotos-style';

class SectionFotos extends LitElement {
  static properties = {
    photos: { type: Array },
    valueSearh: { type: String },
    isModalOpenDelete: { type: Boolean },
    password: { type: String },
    valorFotoDelete: { type: String },
  };

  static styles = css`
    ${style}
    /* Agrega tus estilos personalizados aquí */
  `;

  constructor() {
    super();
    this.photos = [];
    this.valueSearh = '';
    this.isModalOpenDelete = false;
    this.password = '';
    this.valorFotoDelete = '';
  }

  async connectedCallback() {
    super.connectedCallback();
    this.initializeData();
  }

  async initializeData() {
    const photosData = JSON.parse(localStorage.getItem('photos')) || [];
    this.photos = photosData;
  }

  render() {
    return html`
      <div class="container-fa">
        <section class="grid">
          ${this.photos.map(photo => html`
            <div class="item">
              <img src="${photo.inputEtiqueta}" alt="${photo.inputUrl}" class="gimage" />
              <div class="overlay"></div>
              <div class="title-img">
                <h2 class="title-img-h2">${photo.inputUrl}</h2>
              </div>
              <button @click="${this._getFotoDelete}" class="delete-button">Delete</button>
            </div>
          `)}
          ${this.isModalOpenDelete
            ? html`
                <div class="modal-container ">
                  <!-- Contenido del modal aquí -->
                  <div class="modal-content-delete">
                    <div class="modal-header">
                      <span>Add a new photo</span>
                    </div>
                    <div class="modal-body">
                      <div class="label-name-input">
                        <label for="etiqueta">Label</label>
                        <input @input="${this._getInput1}" type="password" id="etiqueta" class="input-data" placeholder="Please enter your GitHub username.">
                      </div>
                    </div>
                    <div class="modal-footer">
                      <div class="buton-add-foton-closed">
                        <button @click="${this.closeModal}">Cancel</button>
                      </div>
                      <div class="buton-add-foton-delete">
                        <button @click="${this._deleteFoto}">Delete</button>
                      </div>
                    </div>
                  </div>
                </div>
              `
            : ''}
        </section>
      </div>
    `;
  }

  openModal(e) {
    this.isModalOpenDelete = true;
  }

  closeModal() {
    this.isModalOpenDelete = false;
  }

  _getInput1(event) {
    this.password = event.target.value;
  }

  updated(changedProperties) {
    if (changedProperties.has('valueSearh')) {
      this.filterImages(this.valueSearh);
    }
  }

  filterImages(searchText) {
    const items = this.shadowRoot.querySelectorAll('.item');

    for (const item of items) {
      const title = item.querySelector('.title-img-h2');
      const text = title.textContent.toLowerCase();

      if (text.includes(searchText) || text.startsWith(searchText)) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    }
  }

  _getFotoDelete(event) {
    this.openModal();
    const btn = event.target;
    const divBeforeButton = btn.previousElementSibling;
    const h2InsideDiv = divBeforeButton.querySelector('h2');
    const valorH2 = h2InsideDiv.textContent;
    this.valorFotoDelete = valorH2;
  }

  async _deleteFoto() {
    const datosAlmacenados = localStorage.getItem('photos');
    const login = this.password;
    const userData = await this.makeApiRequest(login);
    if (userData) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then((result) => {
        if (result.isConfirmed) {
          if (datosAlmacenados) {
            const datosArray = JSON.parse(datosAlmacenados);
            const datosActualizados = datosArray.filter(item => item.inputUrl !== this.valorFotoDelete);
            localStorage.setItem('photos', JSON.stringify(datosActualizados));
          }
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          );
          location.reload();
        }
      });
    }
  }

  async makeApiRequest(login) {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `User '${login}' not found or request failed.`,
      });
      throw error;
    }
  }
}

customElements.define('section-fotos', SectionFotos);
