import { FC, ReactNode } from "react";
import './Qrow.css'

type QRowProps = {
  sidebar: ReactNode;
  children: ReactNode;
};

const QRow: FC<QRowProps> = ({ sidebar, children }) => {
  return (
    <div className="w-full px-4 lg:px-8 grid testegrid"> 
    {/* grid grid-cols-2  */}
      <div>{sidebar}</div>
      <div className="w-full pl-0 lg:pl-8 ">{children}</div>
    </div>
  );
};

export default QRow;
