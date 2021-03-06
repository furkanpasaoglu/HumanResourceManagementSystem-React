import React, {useEffect, useState} from 'react';
import {Formik} from "formik";
import JobAdvertisementService from "../../services/jobAdvertisementService";
import CityService from "../../services/cityService";
import JobTypeService from "../../services/jobTypeService";
import JobPositionService from "../../services/jobPositionService";
import TypeOfWorkService from "../../services/typeOfWorkService";
import {Button,  Select,  Textarea, TextInput} from "evergreen-ui";
import {Form, Message} from "semantic-ui-react";

export default function AddJobAdvertisement() {
    // eslint-disable-next-line no-unused-vars
    const [jobAdvertisements, setJobAdvertisements] = useState([]);
    const [city, setCity] = useState([]);
    const [jobType, setJobType] = useState([]);
    const [jobPosition, setJobPosition] = useState([]);
    const [typeOfWork, setTypeOfWork] = useState([]);

    useEffect(() => {
        let jobAdvertisementService = new JobAdvertisementService();
        let cityService = new CityService();
        let jobTypeService = new JobTypeService();
        let jobPositionService = new JobPositionService();
        let typeOfWorkService = new TypeOfWorkService();
        jobAdvertisementService.getJobAdvertisements().then(result => setJobAdvertisements(result.data.data))
        cityService.getCities().then(result=>setCity(result.data.data))
        jobTypeService.getJobTypes().then(result=>setJobType(result.data.data))
        jobPositionService.getJobPositions().then(result=>setJobPosition(result.data.data))
        typeOfWorkService.getTypeOfWorks().then(result=>setTypeOfWork(result.data.data))
    },[])

    return (
        <div>
            <Formik
                initialValues={{
                    description: "",
                     salaryMin: "",
                     salaryMax: "",
                     numberOfOpenJobPosition: "",
                     applicationDeadline: "",
                     cityId: "",
                     jobPositionId: "",
                    // employerId: "",
                     typeOfWorkId: "",
                     jobTypeId: "",
                }}
                onSubmit={async values => {
                    await new Promise(resolve => setTimeout(resolve, 500));
                    alert(JSON.stringify(values, null, 2));
                }}>
                {({ handleSubmit, handleChange, values, errors, handleBlur }) =>(
                    <Form className='attached fluid segment' style={{ background: "#f1f5f8", borderRadius: 20,position:"relative",margin:"25px",padding:"30px",paddingBottom:"50px",flexDirection:"column"}} onSubmit={handleSubmit}>
                        <Message align="center" style={{ borderRadius: 20,padding:"30px",marginBottom:"15px",flexDirection:"column"}}
                            attached
                            header='Sitemize ho??geldiniz!'
                            content='Yeni bir ilan a??mak i??in a??a????daki formu doldurun'
                        />
                            <Form.Field>
                                <label>??irket Bilgileri</label>
                                <TextInput placeholder='??irket Ad??' />
                            </Form.Field>
                            <Form.Field>
                                <label>A????klama</label>
                                <Textarea type="text"
                                       name="description"
                                       onChange={handleChange}
                                       value={values.description || ''}
                                       placeholder='??lan A????klama'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Minimum Maa??</label>
                                <TextInput type="number"
                                       name="salaryMin"
                                       onChange={handleChange}
                                       value={values.salaryMin || ''}
                                       placeholder='Minimum Maa??'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Maximum Maa??</label>
                                <TextInput type="number"
                                       name="salaryMax"
                                       onChange={handleChange}
                                       value={values.salaryMax || ''}
                                       placeholder='Maximum Maa??'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Al??nacak Personel Say??s??</label>
                                <TextInput type="number"
                                       name="numberOfOpenJobPosition"
                                       onChange={handleChange}
                                       value={values.numberOfOpenJobPosition || ''}
                                       placeholder='Personel Say??s??'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Son Ba??vuru Tarihi</label>
                                <TextInput type="date"
                                       name="applicationDeadline"
                                       onChange={handleChange}
                                       value={values.applicationDeadline || ''}
                                       placeholder='Son Ba??vuru Tarih'/>
                            </Form.Field>
                            <Form.Field>
                                <label>??ehir</label>
                                <Select
                                    name="cityId"
                                    onChange={handleChange}
                                    value={values.cityId || ''}
                                    onBlur={handleBlur}
                                    touched={values.cityId}
                                    style={{ display: 'block' }}>
                                    <option placeholder="??ehir Se??iniz" value="">??ehir Se??iniz</option>
                                    {city.map((c)=>
                                        <option key={c.cityId} value={c.cityId}>{c.cityName}</option>
                                    )}
                                </Select>
                            </Form.Field>
                            <Form.Field>
                                <label>Pozisyon</label>
                                <Select
                                    name="jobPositionId"
                                    onChange={handleChange}
                                    value={values.jobPositionId || ''}
                                    onBlur={handleBlur}
                                    touched={values.jobPositionId}
                                    style={{ display: 'block' }}>
                                    <option placeholder="Pozisyon Se??iniz" value="">Pozisyon Se??iniz</option>
                                    {jobPosition.map((jobPos) =>
                                        <option key={jobPos.jobPositionId} value={jobPos.jobPositionId}>{jobPos.name}</option>
                                    )}
                                </Select>
                            </Form.Field>
                            <Form.Field>
                                <label>??al????ma Tipi</label>
                                <Select
                                    name="jobTypeId"
                                    onChange={handleChange}
                                    value={values.jobTypeId || ''}
                                    onBlur={handleBlur}
                                    touched={values.jobTypeId}
                                    style={{ display: 'block' }}>
                                    <option placeholder="??al????ma Tipi Se??iniz" value="">??al????ma Tipi Se??iniz</option>
                                    {jobType.map((job) =>
                                        <option key={job.jobTypeId} value={job.jobTypeId}>{job.name}</option>
                                    )}
                                </Select>
                            </Form.Field>
                            <Form.Field>
                                <label>??al????ma ??ekli</label>
                                <Select
                                    name="typeOfWorkId"
                                    onChange={handleChange}
                                    value={values.typeOfWorkId || ''}
                                    onBlur={handleBlur}
                                    touched={values.typeOfWorkId}
                                    style={{ display: 'block' }}>
                                    <option placeholder="??al????ma ??ekli Se??iniz" value="">??al????ma ??ekli Se??iniz</option>
                                    {typeOfWork.map((type) =>
                                        <option key={type.typeOfWorkId} value={type.typeOfWorkId}>{type.typeOfWorkName}</option>
                                    )}
                                </Select>
                            </Form.Field>
                            <Button appearance="primary" type="submit" style={{float:"right", marginBottom:"75px"}}>??lan?? Kaydet</Button>
                        </Form>
                    )}
            </Formik>
        </div>
    );
};
