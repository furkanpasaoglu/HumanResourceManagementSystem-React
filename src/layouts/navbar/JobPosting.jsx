import React from 'react';
import {Button} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export default function JobPosting() {
    return (
        <Button color='green' as={NavLink} to="/is-ilani-ekle" style={{marginRight:"20px"}}>İlan Yayınla</Button>
    );
};
