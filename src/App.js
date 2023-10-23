import logo from "./logo.svg";
import "./App.css";

import SearchBar from "./components/SearchBar";
import Result from "./components/Result";

function App() {
  return (
    <div className="App">
      <h1>📖 Easy Book Study 📚</h1>
      {/* Render the SearchBar component */}
      <SearchBar></SearchBar>
      {/* Render the Result component */}
      <Result></Result>
    </div>
  );
}

export default App;
