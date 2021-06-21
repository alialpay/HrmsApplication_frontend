import React from 'react'
import JobPositionList from '../pages/JobPositionList'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import CityList from '../pages/CityList'
import { Route } from 'react-router-dom'
import AdvertisementDetail from '../pages/AdvertisementDetail'
import ApplicationDetail from '../pages/ApplicationDetail'
import Login from '../pages/Login'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {4}>
                        <JobPositionList/>
                        <CityList/>
                    </Grid.Column>
                    <Grid.Column width = {12}>
                        <Route exact path="/" component={JobAdvertisementList}/>
                        <Route exact path="/advertisements" component={JobAdvertisementList}/>
                        <Route path="/advertisements/:applicationDeadline" component={AdvertisementDetail}/>
                        <Route path="/applications" component={ApplicationDetail}/>
                        <Route exact path="/login" component={Login}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
