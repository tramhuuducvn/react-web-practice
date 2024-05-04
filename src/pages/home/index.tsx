import { useEffect, useState } from "react";
import LearnReact from "~/components/LearnReact";

const Home = () => {
    const [state, setState] = useState("Hello World!");

    // Bad: Using any explicitly
    function processData(data: any) {
        // Do something with data
    }

    // This will trigger the warning
    const result: any = processData({});

    console.log(result);

    useEffect(() => {
        setTimeout(() => {
            setState("Hello React!");
        }, 2000);
    }, []);

    return (
        <div>
            <p>{state}</p>
            <LearnReact />
        </div>
    );
};

export default Home;
