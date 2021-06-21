import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown } from 'semantic-ui-react'

export default function CartSummary() {
    return (
        <div>
            <Dropdown item text='Başvurularım'>
                <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/applications">Listele</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/applications">Listele</Dropdown.Item>
                    <Dropdown.Divider/>
                        <Dropdown.Item as={NavLink} to="/applications">Listele</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
