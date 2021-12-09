import React from "react";
import Accordion from "./components/Accordion";

const items = [
    {
        name: "Mior",
        content: "Is a boy"
    },
    {
        name: "Faezah",
        content: "Is a girl"
    },
    {
        name: "Umar",
        content: "Is a son"
    }
]

export default () => {
    return(
        <div>
            <Accordion items={items}/>
        </div>
    )
}