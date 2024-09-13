import "./App.css";
import UseIsOnline from "./Hooks/UseIsOnline";

function App() {
  const online = UseIsOnline();

  if (online) {
    return "Online";
  }
  s;
  return "Offline";
}

//custom hooks

export default App;
