import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Homepage />
      </header>
    </div>
  );
}

export default App;
