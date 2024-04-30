// import { useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import Threads from "./Threads";

function App() {
  // const navigate = useNavigate()
  // const handleForm = () => {
  //     navigate('/Form')
  // }
  // const handleView = () => {
  //     navigate('/View')
  // }

  
  return (
    <div>
      <Header />
      <main>
      <Threads />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
