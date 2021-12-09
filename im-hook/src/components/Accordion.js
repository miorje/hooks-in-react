import React, {useState} from "react";
const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const onTitleClick = (index) => {
        setActiveIndex(index)
    }
    const itemlist = items.map((item,index) => {
        return(
            <React.Fragment key={item.name}>
                <div
                    className="title active"
                    onClick={()=>onTitleClick(index)}
                >
                    <i className="dropdown icon"></i>
                    {item.name}
                </div>
                <div className="content hidden">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return(
        <div className="ui styled accordion">
            {itemlist}
            <h1>{activeIndex}</h1>
        </div>
    )
}

export default Accordion;
