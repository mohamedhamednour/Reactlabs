import {Todo} from "./post";

export const App = () => {
  const posts = [
    { td: "coffe" , ap:'apple' , ma:"mango" , ki:"kiwi" ,or:"orange" },
    
   
  ];
  return (
    <div className="container danger">
      <h1>menu juice</h1>
      <div class="row">
    <div class="col-6">
      {posts.map((p) => (
        <Todo td={p.td} ap={p.ap} ma={p.ma} ki={p.ki} or={p.or}/>
      ))}
    </div>
    <div class="col">
    
    </div>
    
  </div>

      

     

    </div>
  );
};

