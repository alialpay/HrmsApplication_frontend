import React from 'react'
import { NavLink } from 'react-router-dom'
import { Dropdown, Label } from 'semantic-ui-react'
import { useSelector } from 'react-redux'

export default function CartSummary() {

    const { cartItems } = useSelector(state => state.cart)

    return (
        <div>
            <Dropdown item text='Başvurularım'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem) => (
                            <Dropdown.Item key={cartItem.jobAdvertisement.id}>
                                {cartItem.jobAdvertisement.jobDescription}
                                
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider />
                    <Dropdown.Item as={NavLink} to="/applications">Listele</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
