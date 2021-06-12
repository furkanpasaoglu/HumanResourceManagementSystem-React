import {Grid, GridColumn, GridRow} from "semantic-ui-react";
import JobAdvertisementList from "../../pages/jobadvertisement/JobAdvertisementList";
import Sidebar from "../sidebar/Sidebar";
import {Route} from "react-router-dom";
import JobAdvertisementDetail from "../../pages/jobadvertisement/JobAdvertisementDetail";
import AddJobAdvertisement from "../../pages/jobadvertisement/AddJobAdvertisement";

export default function Dashboard() {
    return(
        <div>
            <Grid style={{marginTop:'5px'}}>
                <GridRow>
                    <GridColumn width={4}>
                        <Sidebar/>
                    </GridColumn>
                    <GridColumn width={12}>
                        <Route exact path="/" component={JobAdvertisementList} />
                        <Route exact path="/is-ilanlari" component={JobAdvertisementList} />
                        <Route exact path="/is-ilanlari/:id" component={JobAdvertisementDetail} />
                        <Route path="/is-ilani-ekle" component={AddJobAdvertisement} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}