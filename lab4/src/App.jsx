import { Route, Redirect, Switch } from "react-router-dom";
import { Posts } from "./pages/Posts";
import { UserDetails } from "./pages/UserDetails";
import { Users } from "./pages/Users";
import { Contact } from "./components/contact"
import { Login } from "./login"
import { Protected } from "./proudaction"
import { MainPage} from "./mainpage"




export const App = () => {
  return (
    <>
     
      
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Protected path="/posts">
            <Posts />
          </Protected>
          <Route path="/users/:id">
            <UserDetails />
          </Route>
          <Protected path="/users">
            <Users />
          </Protected>
          <Protected path="/contact">
            <Contact />
          </Protected>
          <Protected path="/mainpage">
            <MainPage />
          </Protected>
          <Route path="/">
          <Redirect to="/login" />
          </Route>
        </Switch>
   
    </>
  );
};
