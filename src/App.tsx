import { useEffect, useState } from "react";

import QHeader from "./components/QHeader";
import QInput from "./components/QInput";
import QButton from "./components/QButton";
import QCardOffer from "./components/QCardOffer";
import QFooter from "./components/QFooter";
import QLayout from "./components/QLayout";
import QListCard from "./components/QListCard";
import QFormOrderByOffer from "./components/QFormOrderByOffer";
import QFormFilterOffer from "./components/QFormFilterOffer";
import QSectionForm from "./components/QSectionForm";
import './App.css'

const App: React.FC = () => {
  const [offers, setOffers] = useState([]); //Fazer um useEffect Com o fetch
  

  useEffect(() => { 
    fetch('http://localhost:3000/offers')
    .then(response => {
      if(!response.ok){
        throw new Error('erro na requisição')
      }
      return response.json();
    }).then(offers =>{
      setOffers(offers);

    })


  }, []);


  return (
    <QLayout
      header={
        <QHeader>
          <QInput
            type="search"
            id="site-search"
            name="q"
            placeholder="Busque o curso ideal para você"
            aria-label="Buscar cursos e bolsas"
          />
          <QButton type="submit">Buscar</QButton>
        </QHeader>
      }
      sidebar={<QFormFilterOffer />}
      footer={<QFooter />}
    >
      <QSectionForm
        title="Veja as opções que encontramos"
        orderBy={<QFormOrderByOffer />}
        filter={<QFormFilterOffer />}
      />

          <div className="w-full mt-8 lg:flex justify-start align-center testeclass">

         
                <QListCard cards={offers}>
                  {(card) => (
            
                  <QCardOffer
                    key={card.id}
                    courseName={card.courseName}
                    rating={card.rating}
                    fullPrice={String(card.fullPrice)}
                    offeredPrice={String(card.offeredPrice)}
                    discount={String(card.discount)}
                    kind={card.kind}
                    level={card.level}
                    iesLogo={card.iesLogo}
                    iesName={card.iesName}
                  />
                
                )}
            
              </QListCard>
          
          </div>
         
    </QLayout>
  );
};

export default App;
