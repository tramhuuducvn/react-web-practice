import "./App.css";
import { useRef } from "react";
import { DropdownRefType } from "./components/Dropdown/index.props";
import RangeDatePicker from "./components/RangeDatePicker";
import Dropdown from "./components/Dropdown";

function App() {
    const productRef = useRef<DropdownRefType>;

    return (
        <div className="App">
            <RangeDatePicker />
            <Dropdown label="Select product" options={["Product 1", "Product 2", "Product 3"]} />
            <Dropdown label="Select Application" options={["App 1", "App 2", "App 3"]} />
        </div>
    );
}

export default App;
