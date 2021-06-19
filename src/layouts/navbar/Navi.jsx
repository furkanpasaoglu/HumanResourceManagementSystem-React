import {Container, Menu} from 'semantic-ui-react'
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const history = useHistory()

    function handleSignOut(){
        setIsAuthenticated(false)
        history.push("/")
    }

    function handleSignIn(){
        setIsAuthenticated(true)
        history.push("/")
    }

    return(
        <div>
            <Menu>
                <Container>
                    <Menu.Item><img src='https://media-public.canva.com/o9cLU/MAEg2oo9cLU/2/tl.png' /></Menu.Item>
                    <Menu.Item  name='Anasayfa' as={NavLink} to="/"  style={{backgroundColor:"white"}}/>
                    <Menu.Item  name='Hakkımda' href="/"/>
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