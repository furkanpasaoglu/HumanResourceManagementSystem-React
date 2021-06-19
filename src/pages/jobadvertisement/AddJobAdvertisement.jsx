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
                            header='Sitemize hoşgeldiniz!'
                            content='Yeni bir ilan açmak için aşağıdaki formu doldurun'
                        />
                            <Form.Field>
                                <label>Şirket Bilgileri</label>
                                <TextInput placeholder='Şirket Adı' />
                            </Form.Field>
                            <Form.Field>
                                <label>Açıklama</label>
                                <Textarea type="text"
                                       name="description"
                                       onChange={handleChange}
                                       value={values.description || ''}
                                       placeholder='İlan Açıklama'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Minimum Maaş</label>
                                <TextInput type="number"
                                       name="salaryMin"
                                       onChange={handleChange}
                                       value={values.salaryMin || ''}
                                       placeholder='Minimum Maaş'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Maximum Maaş</label>
                                <TextInput type="number"
                                       name="salaryMax"
                                       onChange={handleChange}
                                       value={values.salaryMax || ''}
                                       placeholder='Maximum Maaş'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Alınacak Personel Sayısı</label>
                                <TextInput type="number"
                                       name="numberOfOpenJobPosition"
                                       onChange={handleChange}
                                       value={values.numberOfOpenJobPosition || ''}
                                       placeholder='Personel Sayısı'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Son Başvuru Tarihi</label>
                                <TextInput type="date"
                                       name="applicationDeadline"
                                       onChange={handleChange}
                                       value={values.applicationDeadline || ''}
                                       placeholder='Son Başvuru Tarih'/>
                            </Form.Field>
                            <Form.Field>
                                <label>Şehir</label>
                                <Select
                                    name="cityId"
                                    onChange={handleChange}
                                    value={values.cityId || ''}
                                    onBlur={handleBlur}
                                    touched={values.cityId}
                                    style={{ display: 'block' }}>
                                    <option placeholder="Şehir Seçiniz" value="">Şehir Seçiniz</option>
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
                                    <option placeholder="Pozisyon Seçiniz" value="">Pozisyon Seçiniz</option>
                                    {jobPosition.map((jobPos) =>
                                        <option key={jobPos.jobPositionId} value={jobPos.jobPositionId}>{jobPos.name}</option>
                                    )}
                                </Select>
                            </Form.Field>
                            <Form.Field>
                                <label>Çalışma Tipi</label>
                                <Select
                                    name="jobTypeId"
                                    onChange={handleChange}
                                    value={values.jobTypeId || ''}
                                    onBlur={handleBlur}
                                    touched={values.jobTypeId}
                                    style={{ display: 'block' }}>
                                    <option placeholder="Çalışma Tipi Seçiniz" value="">Çalışma Tipi Seçiniz</option>
                                    {jobType.map((job) =>
                                        <option key={job.jobTypeId} value={job.jobTypeId}>{job.name}</option>
                                    )}
                                </Select>
                            </Form.Field>
                            <Form.Field>
                                <label>Çalışma Şekli</label>
                                <Select
                                    name="typeOfWorkId"
                                    onChange={handleChange}
                                    value={values.typeOfWorkId || ''}
                                    onBlur={handleBlur}
                                    touched={values.typeOfWorkId}
                                    style={{ display: 'block' }}>
                                    <option placeholder="Çalışma Şekli Seçiniz" value="">Çalışma Şekli Seçiniz</option>
                                    {typeOfWork.map((type) =>
                                        <option key={type.typeOfWorkId} value={type.typeOfWorkId}>{type.typeOfWorkName}</option>
                                    )}
                                </Select>
                            </Form.Field>
                            <Button appearance="primary" type="submit" style={{float:"right", marginBottom:"75px"}}>İlanı Kaydet</Button>
                        </Form>
                    )}
            </Formik>
        </div>
    );
};
