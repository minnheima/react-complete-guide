import React, { Fragment } from "react";
import Header from "../src/components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
function App() {
  return (
    <Fragment>
      <Cart /> {/* Modal확인차 잠시 넣어둔 것 */}
      <Header />
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
