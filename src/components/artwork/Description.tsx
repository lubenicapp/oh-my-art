import styled from "styled-components";
import CollapsibleContent from "./atomic/CollapsibleContent.tsx";

const Panel = styled.div`
    margin-top: 2rem;
`

const Content = styled.p`
    
`

interface Props {
    content: string
}

function Description({content}: Props) {

    return (
        <CollapsibleContent title="Desctiption">
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
            <p>Hello</p>
        </CollapsibleContent>
    )
}

export default Description
