import { useHistory } from "react-router-dom";
import { Navbar } from "./components/Navbar";

export const MainPage = () => {
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem("token");
    history.replace("/login");
  };
  return (
    <>
    <div className="continer">
      <Navbar />
      <h4>MainPage</h4>
      <button className="btn btn-danger" onClick={handleLogout}>
        Log-out
      </button>
      </div>
    </>
  );
};
