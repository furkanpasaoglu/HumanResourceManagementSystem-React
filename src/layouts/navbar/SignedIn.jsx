import React from 'react';
import {Button, Dropdown, Image, Menu} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export default function SignedIn({signOut}) {
    return (
        <div>
            <Button color='green' as={NavLink} to="/is-ilani-ekle">İş İlanı Ekle</Button>
            <Image avatar spaced="right" src="https://envri.eu/wp-content/uploads/2016/08/software-developer-copy.jpg"/>
                <Dropdown pointing="top left" text="Furkan">
                    <Dropdown.Menu>
                        <Dropdown.Item text="Bilgilerim" icon="info"/>
                        <Dropdown.Item onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                    </Dropdown.Menu>
                </Dropdown>
        </div>
    );
};
