import styled from "styled-components";
import CollapsibleContent from "./atomic/CollapsibleContent.tsx";


const Content = styled.p`
    
`

interface Props {
    content: string
}

function Description({content}: Props) {

    return (
        <CollapsibleContent title="Desctiption">
            <Content>{content}</Content>
        </CollapsibleContent>
    )
}

export default Description
