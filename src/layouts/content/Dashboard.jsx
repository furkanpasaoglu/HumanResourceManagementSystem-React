import {Grid, GridColumn, GridRow} from "semantic-ui-react";
import JobAdvertisementList from "../../pages/jobadvertisement/JobAdvertisementList";
import {Route} from "react-router";
import JobAdvertisementDetail from "../../pages/jobadvertisement/JobAdvertisementDetail";
import AddJobAdvertisement from "../../pages/jobadvertisement/AddJobAdvertisement";
import AdminJobAdvertisementList from "../../pages/jobadvertisement/AdminJobAdvertisementList";
import Login from "../../pages/login/Login";
import Navi from "../navbar/Navi";

export default function Dashboard() {
    return(
        <div>
            <Grid style={{marginTop:'5px'}}>
                <GridRow>
                    <GridColumn width={16}>
                        <Route exact path="/" component={JobAdvertisementList} />
                        <Route exact path="/is-ilanlari" component={JobAdvertisementList} />
                        <Route exact path="/is-ilani/:id" component={JobAdvertisementDetail} />
                        <Route path="/is-ilani-ekle" component={AddJobAdvertisement} />
                        <Route path="/is-ilani-onayla" component={AdminJobAdvertisementList} />
                        <Route path="/giris-yap" component={Login} />
                    </GridColumn>
                </GridRow>
            </Grid>
        </div>
    )
}