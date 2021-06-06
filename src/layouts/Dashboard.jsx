import React from 'react'
import JobPositionList from '../pages/JobPositionList'
import Categories from './Categories'
import { Grid } from 'semantic-ui-react'

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width = {4}>
                        <JobPositionList/>
                    </Grid.Column>
                    <Grid.Column width = {12}>
                        <JobPositionList/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    )
}
