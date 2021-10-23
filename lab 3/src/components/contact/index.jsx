import {useHistory} from "react-router-dom"
import { Inp } from "./input"
export const Contact = () => {
  const history = useHistory();

   const handels = (props) =>{
   history.push("./Users")
  }
  return (


    <div className="col-6">

      <Inp />
      <Inp />
      <button onClick={handels} className="btn btn-danger" > click here</button>
    </div>


  );
};