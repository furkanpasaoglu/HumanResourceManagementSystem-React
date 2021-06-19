import React from 'react';
import {Dropdown, Image} from "semantic-ui-react";
import JobPosting from "./JobPosting";
import AdminButton from "./AdminButton";

export default function SignedIn({signOut}) {
    return (
        <div>
             <JobPosting/>
            <AdminButton/>
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
