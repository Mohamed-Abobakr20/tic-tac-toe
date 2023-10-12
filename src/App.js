import { Helmet } from "react-helmet";
import "./App.css";
import TicTacToeContextProvider from "./Context/TicTacToe";
import TicTacToe from "./components/TicTacToe/TicTacToe";

function App() {
  return (
    <TicTacToeContextProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tic Tac Toe</title>
      </Helmet>
      <div className="App">
        <TicTacToe />
      </div>
    </TicTacToeContextProvider>
  );
}

export default App;
