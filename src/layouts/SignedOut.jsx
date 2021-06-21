import React from 'react'
import { Button, Menu } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

export default function SignedOut(props) {
    return (
        <div>
            <Menu.Item>
            <Button primary onClick={props.signIn}>Giriş yap</Button>
            <Button style={{marginLeft:"0.5em"}}><Link to={"/register"}>Kayıt ol</Link></Button>
            </Menu.Item>
        </div>
    )
}
