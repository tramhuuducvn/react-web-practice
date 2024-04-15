import { useEffect, useState } from "react";
import LearnReact from "~/components/LearnReact";

const Home = () => {
    const [state, setState] = useState("Hello World!");

    // useEffect(() => {
    //     setTimeout(() => {
    //         setState("Hello React!");
    //     }, 2000);
    // }, []);

    return (
        <div>
            <p>{state}</p>
            <LearnReact />
        </div>
    );
};

export default Home;
