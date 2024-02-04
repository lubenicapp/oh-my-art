import { useState } from "react";
import styled from "styled-components";
import LinkWithLogo from "./atomic/LinkWithLogo.tsx";


const Panel = styled.div`
    margin-top: 2rem;
    a {
        text-transform: none;
    }
    a:last-child{
    }
`

const Form = styled.form`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    label {
        font-size: 1.2rem;
        font-weight: bold;
    }
    div {
        display: flex;
        justify-content: space-between;
        margin-top: 1.5rem;
    }
    div input {
        text-transform: uppercase;
        background-color: lightgrey ;
    }
    div input:first-child {
        width: 50%;
        margin-right: 2rem;
    }
    div input:last-child{
        width: 50%;
    }
    
    div:last-child{
        margin-top: 0.5rem;
    }
`

const Bold = styled.span`
    font-weight: bold;
`


const PickUp = styled.div`
    div {
        margin-left: 1rem;
        text-align: left;
    }
`


function DeliveryDetails() {
    const [fee, setFee] = useState(129)

    const updateFee = () => {
        setFee(generateDeliveryFees())
    }

    return(
        <Panel>
            <LinkWithLogo logo={"fa-solid fa-check"}> <Bold>131€ estimated delivery fee</Bold>  for France</LinkWithLogo>
            <Form>
                <label htmlFor="">In order to obtain an accurate delivery fee, please enter your country of residence and zip code:</label>
                <div>
                    <input type="text" placeholder="SPAIN" onChange={updateFee}/>
                    <input type="text" placeholder="81932" onChange={updateFee}/>
                </div>
                <div>
                    <LinkWithLogo logo={"fa-solid fa-truck"}>{"Delivery fee is " + fee + " €"} </LinkWithLogo>
                </div>
            </Form>
            <PickUp>
                <LinkWithLogo logo={"fa-solid fa-location-dot"}> free pickup in <Bold>Bruxelles, Belgium</Bold> </LinkWithLogo>
                <LinkWithLogo logo={"fa-solid fa-check"}> try 14 days at home for free </LinkWithLogo>
            </PickUp>
        </Panel>
    )
}

function generateDeliveryFees() {
    return Math.floor(Math.random() * 100 + 100)
}

export default DeliveryDetails
