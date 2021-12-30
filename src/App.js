import "./App.css";
import Navbar from "./Components/Navbar"
import Textarea from "./Components/Textarea"

function App() {
  return (
    <>
      <Navbar title="Text-Utils" />
      <div className="container my-3">
      <Textarea head="Enter your Text" />
      </div>


    </>
  );
}

export default App;
