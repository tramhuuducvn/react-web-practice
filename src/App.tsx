import RangeDatePicker from "./components/RangeDatePicker";
import Dropdown from "./components/Dropdown";

function App() {
    return (
        <div className="App">
            <RangeDatePicker />
            <Dropdown label="Select product" options={["Product 1", "Product 2", "Product 3"]} />
            <Dropdown label="Select Application" options={["App 1", "App 2", "App 3"]} />
        </div>
    );
}

export default App;
