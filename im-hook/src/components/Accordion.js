import React from "react";
const Accordion = ({items}) => {

    const onTitleClick = (index) => {
        console.log('Title clicked', index)
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
                <div className="content active">
                    <p>{item.content}</p>
                </div>
            </React.Fragment>
        )
    })
    return(
        <div className="ui styled accordion">{itemlist}</div>
    )
}

export default Accordion;
