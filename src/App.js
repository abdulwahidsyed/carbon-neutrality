import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import MainPage from "./Containers/MainPage/MainPage";
import imgg from "./Assets/forest2.jpg";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <img className="main-img" src={imgg} />
      <main>
        <div className="app-name">
          <h1 className="app-name-h1">CARBON NEUTRALITY</h1>
        </div>
        <MainPage />
      </main>
      {/* <footer></footer> */}
    </div>
  );
}

export default App;
