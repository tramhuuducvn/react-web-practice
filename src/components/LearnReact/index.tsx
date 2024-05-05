import Dropdown from "@components/Dropdown";

const LearnReact = () => {
    return (
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
            <Dropdown label="adf" options={[]} />
        </a>
    );
};

export default LearnReact;
