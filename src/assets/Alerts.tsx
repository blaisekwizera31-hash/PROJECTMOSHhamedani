import type { ReactNode } from "react";

interface Props {
     children : ReactNode; 
}

const Alert = ({children}: Props) => {
  return <div className="alert alert-primary">{children}</div>;
 <button type="button" className="btn btn-primary"></button>
};
export default Alert;
