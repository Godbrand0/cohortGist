import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SendMessage from "./components/sendMessage";
import ConnectWallet from "./components/Connect";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ConnectWallet />} />
        <Route path="/home" element={<SendMessage />} />
      </Routes>
    </Router>
  );
}

export default App;
