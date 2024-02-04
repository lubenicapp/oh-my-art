import styled from "styled-components";

const List = styled.ul`
    font-size: 1.2rem;
    display: flex;
    padding: 0.5rem;
    list-style: none;
    li:last-child{
        font-weight: bold;
    }
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
            {items.slice(0, items.length -1).map((item, index) => <ListItem key={index}> {item}   &gt;</ListItem>)}
            <ListItem>{items[items.length -1]}</ListItem>
        </List>
    )
}

export default Breadcrumb
