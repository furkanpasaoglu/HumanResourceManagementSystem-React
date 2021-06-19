import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router'
import JobAdvertisementService from "../../services/jobAdvertisementService";
import {Button, Card, Container, Icon, Label} from "semantic-ui-react";

export default function JobAdvertisementDetail() {
    let { id } = useParams();

    const [job, setJob] = useState({});

    useEffect(() => {
        let jobAdService = new JobAdvertisementService();
        jobAdService.getById(id).then((result) => setJob(result.data.data));
    },[id]);

    return (
        <div>
            <Card.Group style={{marginLeft:"150px",marginRight:"150px"}}>
                <Card fluid>
                    <Card.Content>
                        <Card.Header>{job.jobPosition?.name}</Card.Header>
                        <Card.Meta>{job.employer?.companyName}</Card.Meta>
                        <Card.Description>
                            {job.description}
                        </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <div className="ui two buttons">
                            <Button basic color="green">
                                Başvur
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
}