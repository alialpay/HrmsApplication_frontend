import React from 'react'
import JobPositionList from '../pages/JobPositionList'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import CityList from '../pages/CityList'
import { Route } from 'react-router-dom'
import AdvertisementDetail from '../pages/AdvertisementDetail'
import ApplicationDetail from '../pages/ApplicationDetail'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { ToastContainer } from 'react-toastify'
import JobAdvertisementAdd from '../pages/JobAdvertisementAdd'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {3}>
                        <JobPositionList/>
                        <CityList/>
                    </Grid.Column>
                    <Grid.Column width = {13}>
                        <Route exact path="/" component={JobAdvertisementList}/>
                        <Route exact path="/advertisements" component={JobAdvertisementList}/>
                        <Route path="/advertisements/:applicationDeadline" component={AdvertisementDetail}/>
                        <Route path="/applications" component={ApplicationDetail}/>
                        <Route exact path="/login" component={Login}/>
                        <Route exact path="/register" component={Register}/>
                        <Route path="/jobAdvertisement/add" component={JobAdvertisementAdd} />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
