import { FC } from "react";
import QHeading from "./QHeading";
import QRating from "./QRating";
import QPrice from "./QPrice";
import QText from "./QText";
import QButton from "./QButton";

interface QCardOfferProps {
  courseName: string;
  rating: number;
  fullPrice: string;
  offeredPrice: string;
  discount: number;
  kind: string;
  level: string;
  iesLogo: string;
  iesName: string;
}



const QCardOffer: FC<QCardOfferProps> = ({
  courseName,
  rating,
  fullPrice,
  offeredPrice,
  discount,
  kind,
  level,
  iesLogo,
  iesName,
}) => {

  {discount = ((Number(fullPrice) - Number(offeredPrice)) / Number(fullPrice)) * 100}
  // {kind.charAt(0).toUpperCase()
  // kind.charAt(kind.length-1).toUpperCase()}
  return (
    
    <article className="bg-white p-6 m-4 rounded-lg shadow-sm border flex flex-col justify-between items-start gap-3 ">
      <img src={iesLogo} alt={iesName} className="h-10 object-contain" />
      <QHeading tag="h2" size="sm">
        {courseName}
      </QHeading>
      <QRating rating={rating} />
      <QPrice
        fullPrice={fullPrice}
        offeredPrice={`R$${Number(offeredPrice).toFixed(2).replace('.', ',')}`}
        discount={`- ` + discount.toFixed(0) + `%`}
      />
      <div>
        <QText tag="p">{kind}</QText>
        <QText tag="p" color="minor" size="sm">
          {`Graduação (`+level+`)`}
        </QText>
      </div>
      <QButton tag="a" size="sm" className="w-full">
        Quero esta bolsa
      </QButton>
    </article>
  );
};

export default QCardOffer;
