import {useState} from "react";
import ProductList from "./components/ProductList";

function App(){
  const [showProducts,setShowProducts]=useState(true);
  const [name,setName]=useState("");

  function handleClick(){
    setShowProducts(!showProducts);
  }

  return(
    <div>
      <h1>React Product Dashboard</h1>

      <button onClick={handleClick}>
        {showProducts ? "Hide Products":"Show Products"}
      </button>

      <input
        type="text"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        placeholder="Enter your name"
      />

      <p>Hello,{name}</p>

      {showProducts && <ProductList />}
    </div>
  );
}

export default App;
