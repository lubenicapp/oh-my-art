import styled from "styled-components";
import {useState, useRef, useEffect} from "react";

const Panel = styled.div`
`

const Title = styled.h2`
    text-transform: uppercase;
    color: rgba(0, 0, 0, 0.7);
    margin-bottom: 1.2rem;
`

const Separator = styled.hr`
    height: 3px;
    color: black;
    background-color: black;
`

interface Props {
    title: any;
    children: any
}

function CollapsibleContent({title, children}: Props) {
    const contentRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if(visible) {
            // @ts-ignore:next-line
            contentRef.current.scrollIntoView();
        }
    }, [visible]);

    return (
        <div>
            <Panel onClick={() => setVisible(!visible)}>
                <Title>{title}</Title>
                {visible && children}
            </Panel>

            <Separator ref={contentRef} />
        </div>
    );
}
export default CollapsibleContent
