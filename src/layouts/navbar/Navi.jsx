import {Container, Menu, Button} from 'semantic-ui-react'
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    function handleSignOut(){
        setIsAuthenticated(false)
    }

    function handleSignIn(){
        setIsAuthenticated(true)
    }

    return(
        <div>
            <Menu>
                <Container>
                    <Menu.Item  name='Anasayfa' as={NavLink} to="/"/>
                    <Menu.Menu position="right">
                        <Menu.Item>
                        {isAuthenticated ? <SignedIn signOut={handleSignOut }/> : <SignedOut signIn={handleSignIn} />}
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}


{/*<Menu.Item>*/}
{/*    <img src='https://react.semantic-ui.com/logo.png' />*/}
{/*</Menu.Item>*/}