import React, {useEffect, useState} from 'react';
import {Button, Modal, Table} from "semantic-ui-react";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import {CogIcon, IconButton, majorScale, toaster} from "evergreen-ui";

export default function AdminJobAdvertisementList() {
    const [jobAdvertisements, setJobAdvertisements] = useState([]);
    const [state, dispatch] = React.useReducer(exampleReducer, {
        open: false,
        size: undefined,
    })
    const { open, size } = state

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
    },[])

    function exampleReducer(state, action) {
        switch (action.type) {
            case 'close':
                return {open: false }
            case 'open':
                return { open: true, size: action.size }
            default:
                throw new Error('Desteklenmiyor')
        }
    }

    function isActiveTrue(job) {
        job.active = true;
        const jobService = new JobAdvertisementService();
        jobService.update(job).then(response => {
            toaster.success('Etkinleştirildi!',{duration:1})
        })
    }

    function isActiveFalse(job) {
        job.active = false;
        const jobService = new JobAdvertisementService();
        jobService.update(job).then(response => {
            toaster.warning('Etkinleştirilmedi',{duration:1})
        })
    }

    return (
        <div>
            <Table fixed>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>İş Veren Adı</Table.HeaderCell>
                        <Table.HeaderCell>İş Pozisyonu</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Şekli</Table.HeaderCell>
                        <Table.HeaderCell>Çalışma Tipi</Table.HeaderCell>
                        <Table.HeaderCell>Açıklama</Table.HeaderCell>
                        <Table.HeaderCell>Aktif</Table.HeaderCell>
                        <Table.HeaderCell>Durum</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {jobAdvertisements.map((job) =>
                        <Table.Row key={job.jobAdvertisementId}>
                            <Table.Cell>{job.employer.companyName}</Table.Cell>
                            <Table.Cell>{job.jobPosition.name}</Table.Cell>
                            <Table.Cell>{job.typeOfWork.typeOfWorkName}</Table.Cell>
                            <Table.Cell>{job.jobType.name}</Table.Cell>
                            <Table.Cell>{job.description}</Table.Cell>
                            {
                                job.active? <Table.Cell style={{color:"green"}}><b>Aktif</b></Table.Cell>:<Table.Cell style={{color:"red"}}><b>Aktif Değil</b></Table.Cell>
                            }
                            <Table.Cell>
                                <IconButton icon={CogIcon} marginRight={majorScale(2)} onClick={() => dispatch({ type: 'open', size: 'tiny' })}/>
                            </Table.Cell>
                            <Modal
                                size={size}
                                open={open}
                                onClose={() => dispatch({ type: 'close' })}
                            >
                                <Modal.Header>İş İlanı Durumu</Modal.Header>
                                <Modal.Content>
                                    <p>{job.employer.companyName} Firmanın İş İlanını <b>Aktif Et/Aktif Etme</b> </p>
                                </Modal.Content>
                                <Modal.Actions>
                                    <Button negative onClick={() => dispatch({ type: 'close' },isActiveFalse(job))}>
                                        Aktif Etme
                                    </Button>
                                    <Button positive onClick={() => dispatch({ type: 'close' },isActiveTrue(job))}>
                                        Aktif Et
                                    </Button>
                                </Modal.Actions>
                            </Modal>
                        </Table.Row>
                    )}

                </Table.Body>
            </Table>
        </div>
    );
};
