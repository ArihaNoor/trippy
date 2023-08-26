import React from 'react'
import styled from 'styled-components'

const List = (props) => {
    return (
        <ListComponent>
            <ul>
                <li><b>{props.l1}</b></li>
                <li>{props.l2}</li>
                <li>{props.l3}</li>
                <li>{props.l4}</li>
                <li>{props.l5}</li>
            </ul>
        </ListComponent>
    )
}

export default List

const ListComponent = styled.div`
li{
    list-style-type: none;
}
`