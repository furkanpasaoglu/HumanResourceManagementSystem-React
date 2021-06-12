import React, {useEffect, useState} from 'react';
import JobAdvertisementService from "../../services/jobAdvertisementService";
import {Card, Label} from 'semantic-ui-react'

export default function JobAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    })

    return (
        <div>
            <Card.Group>
                {jobAdvertisements.map((jobAdvertisement) =>
                    <Card style={{width: '100%', textAlign: 'left'}}
                          key={jobAdvertisement.jobAdvertisementId}
                          href='#card-example-link-card'>
                        <Card.Content>
                            <Card.Header>{jobAdvertisement.jobPosition.name}</Card.Header>
                            <Card.Meta>{jobAdvertisement.employer.companyName}</Card.Meta>
                            <Card.Meta>{jobAdvertisement.city.cityName}</Card.Meta>
                            <Card.Description>
                            </Card.Description>
                            <div>
                                <Label style={{float:"left",marginTop:"15px"}}>{jobAdvertisement.jobType.name}</Label>
                                <Label style={{float:"right",marginTop:"15px",backgroundColor:'white'}}>Son Tarih:{jobAdvertisement.applicationDeadline}</Label>
                            </div>
                        </Card.Content>
                    </Card>
                )}
            </Card.Group>
        </div>
    );
};
