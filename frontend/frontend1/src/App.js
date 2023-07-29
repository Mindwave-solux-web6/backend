import "./App.css";
import Creative from "./components/Creative";
import Header from "./components/Header";
import AppRoutes from "./routes";
import axios from "axios";


function App() {
  return (
    <div className="App">
      <Header />
      <AppRoutes />
      {/* <Creative /> */}
    </div>
  );
}

export default App;
