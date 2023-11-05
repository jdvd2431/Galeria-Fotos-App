import { css } from 'lit-element';
export default css`
    .container-fotos{
        width: 100%;
        height: 100%;
        top: -921px;
        left: -2256px;
        border-radius: 24px;
    }
    :host{
        display:grid;
        place-content:center;
        gap:20px;
        background-color: #f7f6f6;
        width:100%;
        height:100%;
    }
    .ccontent-filter-addFoton{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        margin: 20px;
        align-items: center;
    }
    .texto-inputFilter{
        width: 138px;
        top: 43px;
        left: 99px;
        padding-right: 380px;

    }
    .texto-inputFilter, .icono-person-text{
      display: flex;
      width: 100%;
      gap: 5px;
      
      height: 100px;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }
    .texto-inputFilter .icono-person-text .texto-double{
        display: flex;
        flex-direction: column;
        width: 77px;
    }
    .texto-inputFilter .icono-person-text .texto-double .title-secundary{
        font-family: Noto Sans;
        font-size: 9px;
        line-height: 12px;

    }
    .texto-inputFilter .icono-person-text .texto-double .title-primary{
        font-family: Noto Sans;
        font-size: 14px;
        font-weight: 500;
        line-height: 12px;
        letter-spacing: 0em;
        text-align: left;

    }
    .buton-add-foton {
        border-radius: 12px;
        box-shadow: 0px 4px 10px 0px rgba(61, 180, 109, 0.2);
        display:flex;
        align-items:center;
        
    }
    .buton-add-foton button{
        border-radius: 12px;
        box-shadow: 0px 4px 10px 0px rgba(61, 180, 109, 0.2);
        background: rgba(61, 180, 109, 1);
        border: none;
        width: 105px;
        height: 55px;
        top: 32px;
        left: 1204.87px;
        border-radius: 12px;
        cursor: pointer;
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: rgba(255, 255, 255, 1);
        text-align: center
    }
    .buton-add-foton-delete button{
        border-radius: 12px;
        box-shadow: 0px 4px 10px 0px rgba(61, 180, 109, 0.2);
        background: rgba(235, 87, 87, 1);
        border: none;
        width: 105px;
        height: 55px;
        top: 32px;
        left: 1204.87px;
        border-radius: 12px;
        cursor: pointer;
        font-family: Noto Sans;
        font-size: 16px;
        font-weight: 700;
        line-height: 22px;
        letter-spacing: 0em;
        text-align: left;
        color: white;
        text-align: center
    }
    .buton-add-foton-closed {
      border-radius: 12px;
      display:flex;
      align-items:center;
      width: 61px;
      
  }
  .buton-add-foton-closed button{
      border-radius: 12px;
      background: transparent;
      border: none;
      border-radius: 12px;
      cursor: pointer;
      color: rgba(189, 189, 189, 1);
      text-align: center;
      font-family: Noto Sans;
      font-size: 16px;
      font-weight: 500;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;
      width: 105px;
      height: 55px;
      top: 539.05px;
      left: 903.74px;
      border-radius: 12px;

  }
    .container-1{
        width: 300px;
        vertical-align: middle;
        white-space: nowrap;
        position: relative;
      }
      .container-1 input#search::-webkit-input-placeholder {
        color: #65737e;
     }
     .container-1 input#search:-moz-placeholder {
        color: #65737e;  
     }
     .container-1 input#search::-moz-placeholder { 
        color: #65737e;  
     }
     .container-1 input#search:-ms-input-placeholder {  
        color: #65737e;  
     }
     .container-1 .icon{
        position: absolute;
        top: 50%;
        margin-left: 17px;
        margin-top: 12px;
        z-index: 1;
        color:  rgba(189, 189, 189, 1);
      }
      .container-1 input#search:hover, .container-1 input#search:focus, .container-1 input#search:active{
        outline:none;
        background: #ffffff;
      }
      .container-1 input#search{
        width: 250px;
        height: 49px;
        background: #feffff;
        border: none;
        font-size: 10pt;
        float: left;
        color: #262626;
        border: 1px solid rgba(189, 189, 189, 1);
        padding-left: 45px;
        -webkit-border-radius: 5px;
        -moz-border-radius: 5px;
        border-radius: 5px;
        
          -webkit-transition: background .55s ease;
        -moz-transition: background .55s ease;
        -ms-transition: background .55s ease;
        -o-transition: background .55s ease;
        transition: background .55s ease;
      }
      .container-galery {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 305px;
        width: 100%;
        
      }
      ::-webkit-scrollbar {
        display: none;
        }
      .contentFoto:nth-child(1){
        gap: 20px;
      }
      .contentFoto:nth-child(2){
        grid-row-start:span 2 ;
      }
      .contentFoto:nth-child(5){
        grid-row-start:span 2 ;
      }
      .contentFoto:nth-child(7){
        grid-row-start:span 2 ;
      }
      .image{
        object-fit: cover;
        border-radius: 22px;
        width: 81%;
      }
    /* Estilos para el modal */
    .modal-container {
      display: flex;
      justify-content: center;
      align-items: center;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      z-index: 999;
    }
    .modal-content-delete {
      box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 10px;
    overflow: hidden;
    width: 620px;
    height: 276.12px;
    top: 250.64px;
    left: 424.36px;
    border-radius: 12px;
    background: rgb(255, 255, 255);
    }

    .modal-content {
      background-color: white;
      border-radius: 5px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
      overflow: hidden;
      width: 620px;
      height: 367.2px;
      top: 250.64px;
      left: 424.36px;
      border-radius: 12px;
      background: rgba(255, 255, 255, 1);
    }

    .modal-header {
      color: rgba(51, 51, 51, 1);
      padding: 31px 31px 10px 31px;
      font-family: Noto Sans;
      font-size: 24px;
      font-weight: 500;
      line-height: 33px;
      letter-spacing: 0em;
      text-align: left;

    }

    .modal-body {
      padding: 0px 31px 15px 31px;
    display: flex;
    flex-direction: column;
    }

    .modal-footer {
      text-align: right;
      display: flex;
      gap: 10px;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      margin-right: 31px;
    }

    .close-button {
      cursor: pointer;
    }
    .label-name-input{
      display:flex;
      flex-direction: column;
      gap: 10px;
    }
    .label-name-input input{
      width: 552.33px;
      height: 55px;
      top: 357.53px;
      left: 456.41px;
      border-radius: 12px;
      margin-bottom: 15px;
      border: 1px solid rgba(79, 79, 79, 1)
    }
    .label-name-input input::placeholder{
      padding-left: 15px;
    }
    .label-name-input label{
      font-family: Noto Sans;
      font-size: 14px;
      font-weight: 500;
      line-height: 19px;
      letter-spacing: 0em;
      text-align: left;
      color: rgba(79, 79, 79, 1);
    }
    .content-flex-dyna{
      display: flex;
      flex-wrap: wrap;
      max-height: 587px;
      overflow-y: auto;
    }
    .contentFoto{
      width: 333px;
      height: 120px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      margin: -15px;
    }
    .container-fa{
      max-height: 600px;
  overflow-y: auto;
    }
    
    .grid {
      margin: 1rem auto;
      width: 100%;
      max-width: 960px;
      column-count: 3; 
      column-gap: 20px; 
      overflow-y: auto;
    }

    .item {
      display: flex;
    text-align: center;
    position: relative;;
    margin: 0px 11px 25px;
    }

    .gimage {
      width: 100%;
      max-height: 100%;
      object-fit: cover;
      border-radius: 16px;
    }
    .overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 99%;
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 0; 
      transition: opacity 0.3s;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 16px;
    }
    
    .item:hover .overlay {
      opacity: 1;
    }
    .title-img {
      position: absolute;
      bottom: 0; 
      left: 10px; 
      padding: 10px; 
      color: #fff;
      transition: opacity 0.3s; 
      opacity: 0;
    }
    .title-img h2{
      font-family: Montserrat;
      font-size: 18px;
      font-weight: 700;
      line-height: 22px;
      letter-spacing: 0em;
      text-align: left;

    }
    
    .item:hover .overlay,
    .item:hover .title-img {
      opacity: 1; 
    }
    .confirm-button-class {
  float: right;
}

.cancel-button-class {
  float: right;
  margin-right: 10px; /* Añade margen entre los botones si es necesario */
  background-color:red !important;
}
    .delete-button {
      position: absolute;
      top: 10px; 
      right: 10px; 
      padding: 5px 10px;
      background: transparent;
      border: 2px solid red; 
      color: red; 
      cursor: pointer; 
      opacity: 0; 
      transition: opacity 0.3s; 
      border-radius: 16px;
    }
    
    .delete-button:hover {
      background-color: red; 
      color: white; 
    }
    .item:hover .delete-button {
      opacity: 1; 
    }
    .overlay:hover .gimage{
      transform: scale(1.05);
    }
    @media (max-width: 767px) { 
    .grid {
        columns:2;
    }
    @media (max-width: 480px) {
      .grid {
          columns: 1;
      }
  }
 
`;