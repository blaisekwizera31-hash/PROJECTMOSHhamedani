// import "./App.css";
import ListGroup from "./ListGroup";

function App() {
   let items = ["Kigali", "Musanze", "Rubavu", "Huye", "Nyagatare"];

   const handleSelectItem = (item: string) => {
    console.log(item)
   }
  return (
    <div className="App">
      <h1>List of Cities</h1>
      <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/>
    </div>
  );
}

export default App;
 