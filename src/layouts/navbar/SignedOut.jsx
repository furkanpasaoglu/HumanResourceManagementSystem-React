import React from 'react';
import {Button} from "semantic-ui-react";

export default function SignedOut({signIn}) {
    return (
        <div>
                <Button onClick={signIn} >Giriş yap</Button>
                <Button primary style={{marginLeft:"0.5em"}}>Kayıt Ol</Button>
        </div>
    );
};
