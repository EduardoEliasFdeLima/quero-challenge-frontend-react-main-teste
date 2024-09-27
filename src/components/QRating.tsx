import { FC } from "react";
import QText from "./QText";
import QIconStar from "./QIconStar";

interface QBadgeProps {
  rating: number;
}

const QRating: FC<QBadgeProps> = ({ rating }) => {

  
  // alert('oi')
  const n = {rating}

  return (
    <div className="flex items-center gap-2">
      <QText tag="span">{rating}</QText>
      <div className="flex items-center space-x-1 text-yellow-500">
       
        
        {/* <QIconStar />
        <QIconStar />
        <QIconStar />
        <QIconStar  />
        <QIconStar half /> */}

      {Array.from({ length: 5 }, (_, index) => {
            if (index < Math.floor(rating)) {
              return <QIconStar key={index} />;
            } else if (index < rating) {
              return <QIconStar half key={index} />;
            } else {
              return <QIconStar key={index} empty />;
            }
          })}
      </div>
    </div>
  );
};

export default QRating;
