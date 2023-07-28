import "./App.css";
import Creative from "./components/Creative";
import Header from "./components/Header";
import AppRoutes from "./routes";


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
