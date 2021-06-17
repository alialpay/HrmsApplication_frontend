import React from 'react'
import JobPositionList from '../pages/JobPositionList'
import { Grid } from 'semantic-ui-react'
import JobAdvertisementList from '../pages/JobAdvertisementList'
import CityList from '../pages/CityList'

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
                        <JobAdvertisementList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
