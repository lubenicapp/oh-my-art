import styled from "styled-components";
import {useState} from "react";

const Panel = styled.div`
`

const Title = styled.h2`
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0, 0.7);
`

const Separator = styled.hr`
    height: 3px;
    color: black;
    background-color: black;
`

interface Props {
    title: string;
    children: any
}

function CollapsibleContent({title, children}: Props) {
    const [visible, setVisible] = useState(true);


    return (
        <Panel onClick={()=>{setVisible(!visible)}}>
            <Title>{title}</Title>
            {visible && children}
            <Separator/>
        </Panel>
    )
}

export default CollapsibleContent
