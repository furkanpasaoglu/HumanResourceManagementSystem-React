import React, {useEffect, useState} from 'react';
import JobAdvertisementService from "../../services/jobAdvertisementService";
import {Card, Grid, GridColumn, GridRow, Label, Segment} from 'semantic-ui-react'
import {NavLink} from "react-router-dom";
import Sidebar from "../../layouts/sidebar/Sidebar";

export default function JobAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    },[])

    return (
        <div>
            <Grid style={{marginTop:'5px'}}>
                <GridRow>
                    <GridColumn width={4}>
                        <Sidebar/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Card.Group>
                            {jobAdvertisements.map((jobAdvertisement) =>
                                <Card style={{width: '100%', textAlign: 'left'}}
                                      key={jobAdvertisement.jobAdvertisementId}
                                      as={NavLink} to={`/is-ilani/${jobAdvertisement.jobAdvertisementId}`}>
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
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    );
};
