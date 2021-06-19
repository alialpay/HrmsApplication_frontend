import React from 'react'
import { Button, Menu } from 'semantic-ui-react'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
            <Button primary onClick={props.signIn}>Giriş yap</Button>
            <Button primary style={{marginLeft:"0.5em"}}>Kayıt ol</Button>
            </Menu.Item>
        </div>
    )
}
