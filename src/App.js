import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { Header } from "./Shared/Header";
import MerchControl from "./components/MerchList/MerchControl";

function App() {
  return (
    <div className="App">
      <Header />
      <MerchControl />
    </div>
  );
}

export default App;
