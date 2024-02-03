import styled from "styled-components";


const List = styled.ul`
    display: flex;
    padding: 0.5rem;
    list-style: none;
`

const ListItem = styled.li`
    padding: 0.5rem;
`

interface Props {
    items: string[]
}

function Breadcrumb({ items }: Props){
    return (
        <List>
            {items.slice(0, items.length -1).map((item, index) => <ListItem key={index}> {item} ›</ListItem>)}
            <ListItem>{items[items.length -1]}</ListItem>
        </List>
    )
}

export default Breadcrumb
