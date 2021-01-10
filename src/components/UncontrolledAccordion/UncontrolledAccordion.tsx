import React, {useState} from "react";

type UncontrolledAccordionPropsType = {
    titleValue: string
}

function UncontrolledAccordion(props: UncontrolledAccordionPropsType) {

    let [collapsed, setCollapsed] = useState<boolean>(false)

    return (
        <div>
            <AccordionTitle titleValue={props.titleValue} onClick={() => setCollapsed(!collapsed)}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type UncontrolledAccordionTitlePropsType = {
    titleValue: string
    onClick: () => void
}

function AccordionTitle(props: UncontrolledAccordionTitlePropsType) {
    return <h3 onClick={() => props.onClick()}>{props.titleValue}</h3>
}

function AccordionBody() {
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>
}

export default UncontrolledAccordion