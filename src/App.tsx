import Dropdown from "@components/Dropdown";


function App() {
    return (
        <div className="App">
            <Dropdown label="Select product" options={["Product 1", "Product 2", "Product 3"]} />
        </div>
    );
}

export default App;
