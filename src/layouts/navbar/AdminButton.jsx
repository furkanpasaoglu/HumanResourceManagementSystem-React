import React from 'react';
import {Button} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export default function AdminButton() {
    return (
        <Button color='red' as={NavLink} to="/is-ilani-onayla" style={{marginRight:"20px"}}>İş İlani Onayla</Button>
    );
};
