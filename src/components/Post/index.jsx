import { Card } from "../Card";

export const Post = (props) => {
  return (
    <Card>

      <div>
        <h4>{props.title}</h4>
        
        <p>{props.body}</p>
       <button className="btn btn-danger circle">X</button>
      </div>
      
    </Card>
  );
};
