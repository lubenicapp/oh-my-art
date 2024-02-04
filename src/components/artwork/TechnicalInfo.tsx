import styled from "styled-components";
import CollapsibleContent from "./atomic/CollapsibleContent.tsx";

const Content = styled.div`
    .keys {
        text-transform: uppercase;
    }
`

interface Props {
    data: object
}

function TechnicalInfo({data}: Props) {
    const title = Object.keys(data).join(', ')

    return (
        <CollapsibleContent title={title}>
            <Content className="columns">
                <div className="column is-2 keys">
                    {Object.keys(data).map((k) =>  <p key={k}>{k}</p> )}
                </div>
                <div className="column">
                    {Object.values(data).map((v) =>  <p key={v}>{v.join(', ')}</p> )}
                </div>

            </Content>
        </CollapsibleContent>
    )
}

export default TechnicalInfo
