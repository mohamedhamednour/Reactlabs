import {Todo} from "./post";

export const App = () => {
  const posts = [
    { td: "coffe" , ap:'apple' , ma:"mango" , ki:"kiwi" ,or:"orange" },
    
   
  ];
  return (
    <div>
      <h1>menu juice</h1>

      {/* <Post title={posts[0].title} body={posts[0].body} />
      <Post title={posts[1].title} body={posts[1].body} />
      <Post title={posts[2].title} body={posts[2].body} />
      <Post title={posts[3].title} body={posts[3].body} /> */}

      {posts.map((p) => (
        <Todo td={p.td} ap={p.ap} ma={p.ma} ki={p.ki} or={p.or}/>
      ))}

    </div>
  );
};

