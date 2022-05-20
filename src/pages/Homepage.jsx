import React from "react";
//import burgers from "../burgersdata";
import Burger from "../components/Burger";
import axios from "axios";

function Homepage() {
  const [burgersList, setBurgersList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("http://localhost:3005/api/burgers")
      .then((response) => {
        setBurgersList(response.data);
      })
      .catch((err) => console.log(err.data));
  }, []);
  return (
    <div>
      <div className="row">
        {burgersList.map((burger) => {
          return (
            <div className="col-md-4">
              <div>
                <Burger burger={burger} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Homepage;
