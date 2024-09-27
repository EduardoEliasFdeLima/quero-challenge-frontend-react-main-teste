import { FC } from "react";
import QHeading from "./QHeading";
import QFieldset from "./QFieldset";
import QInputCheckbox from "./QInputCheckbox";
import QInputRange from "./QInputRange";


const allcards = document.getElementsByClassName('allcard') as HTMLCollectionOf<HTMLElement>;
const bacharelado = document.getElementsByClassName('bacharelado') as HTMLCollectionOf<HTMLElement>;
const tecnologo = document.getElementsByClassName('tecnologo') as HTMLCollectionOf<HTMLElement>;
const licenciatura = document.getElementsByClassName('licenciatura') as HTMLCollectionOf<HTMLElement>;

const ead = document.getElementsByClassName('ead') as HTMLCollectionOf<HTMLElement>;
const presencial = document.getElementsByClassName('presencial') as HTMLCollectionOf<HTMLElement>;

function toggleDisplay(elements: HTMLCollectionOf<HTMLElement>, displayStyle: string) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].style.display = displayStyle;
  }
}

let isBacharelado = true;

function filtrarBacharelado(){
    if (isBacharelado) {
      toggleDisplay(allcards, "none");
      toggleDisplay(bacharelado, "block");
      isBacharelado = false;

      if(isTecnologo == false){
        toggleDisplay(tecnologo, 'block')
      }
      if(isLicenciatura == false){
        toggleDisplay(licenciatura, 'block');
      }
    } else {
    
      
      toggleDisplay(allcards, "block");
      isBacharelado = true;

      if(isTecnologo == false){
        toggleDisplay(tecnologo, 'block');
        toggleDisplay(bacharelado, 'none');
      }else{
        toggleDisplay(tecnologo, 'none');
        toggleDisplay(bacharelado, 'block')
      }

      if(isLicenciatura == false){
        toggleDisplay(licenciatura, 'block');
        toggleDisplay(bacharelado, 'none')
      }else{
        toggleDisplay(licenciatura, 'none')
      }
    }
    all();
}


let isLicenciatura = true;
function filtrarLicenciatura(){
  if(isLicenciatura){
    toggleDisplay(allcards, "none");
    toggleDisplay(licenciatura, "block");
    isLicenciatura = false;

    if(isTecnologo == false){
      toggleDisplay(tecnologo, 'block')
    }
    if(isBacharelado == false){
      toggleDisplay(bacharelado, 'block');
    }
  }else{
    toggleDisplay(allcards, "block");
    isLicenciatura = true;

      if(isTecnologo == false){
        toggleDisplay(tecnologo, 'block');
        toggleDisplay(licenciatura, 'none');
      }else{
        toggleDisplay(tecnologo, 'none');
        toggleDisplay(licenciatura, 'block')
      }

      if(isBacharelado == false){
        toggleDisplay(bacharelado, 'block');
        toggleDisplay(licenciatura, 'none')
      }else{
        toggleDisplay(bacharelado, 'none');
      }
  }
  all();
}

let isTecnologo = true;
function filtrarTecnologo(){
  if(isTecnologo){
    toggleDisplay(allcards, 'none');
    toggleDisplay(tecnologo, 'block');
    isTecnologo = false;

      if(isLicenciatura == false){
        toggleDisplay(licenciatura, 'block')
      }
      if(isBacharelado == false){
        toggleDisplay(bacharelado, 'block');
      }


  }else{
    toggleDisplay(allcards, 'block');
    

    if(isLicenciatura == false){
      toggleDisplay(licenciatura, 'block');
      toggleDisplay(tecnologo, 'none');
    }else{
      toggleDisplay(licenciatura, 'none')
    }


    if(isBacharelado == false){
      toggleDisplay(bacharelado, 'block');
      toggleDisplay(tecnologo, 'none')
    }else{
      toggleDisplay(bacharelado, 'none');
    }

    isTecnologo = true;
  }

  all();
}

function all(){
  if(isBacharelado == true && isLicenciatura == true && isTecnologo == true){
    toggleDisplay(licenciatura, "block");
    toggleDisplay(bacharelado, "block");
    toggleDisplay(tecnologo, 'block');
  } 
  
}

let isPresencial = true;
function filtrarPresencial(){
  if(isPresencial){
    toggleDisplay(ead, 'none');
    isPresencial = false;

  }else{
    toggleDisplay(ead, 'block');
    isPresencial = true;
  }
  allKinds();
  filtrarBacharelado();
  filtrarLicenciatura();
  filtrarTecnologo();
}

let isEad = true;
function filtrarEAD(){
  if(isEad){
    toggleDisplay(presencial, 'none');
    isEad = false;
  }else{
    toggleDisplay(presencial, 'block');
    isEad = true;
  }
  allKinds();
  filtrarBacharelado();
  filtrarLicenciatura();
  filtrarTecnologo();
}

function allKinds(){
  if(isEad == true && isPresencial == true || isEad == false && isPresencial == false){
    toggleDisplay(presencial, 'block');
    toggleDisplay(ead, 'block')
  }
}


const QFormFilterOffer: FC = () => {
  return (
    <form action="#" className="">
      <QHeading tag="h1">Filtros</QHeading>

      <hr className="my-5" />

      <QFieldset legend="Graduação">
        <QInputCheckbox label="Bacharelado" onClick={filtrarBacharelado}/>

        <QInputCheckbox label="Licenciatura" onClick={filtrarLicenciatura}/>

        <QInputCheckbox label="Técnologo" onClick={filtrarTecnologo}/>
      </QFieldset>

      <hr className="my-5" />

      <QFieldset legend="Modalidade do curso">
        <QInputCheckbox label="Presencial" onClick={filtrarPresencial}/>

        <QInputCheckbox label="A distância - EaD" onClick={filtrarEAD}/>
      </QFieldset>

      <hr className="my-5" />

      <QFieldset legend="Preço da mensalidade">
        <QInputRange label="R$ 340,00" />
      </QFieldset>

      <hr className="mt-5" />
    </form>
  );
};

export default QFormFilterOffer;
