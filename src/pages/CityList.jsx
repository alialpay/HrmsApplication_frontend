import React, { useState, useEffect } from 'react'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import CityService from '../services/cityService';

export default function CityList() {

    const [cities, setCities] = useState([]);

    useEffect(() => {
        let cityService = new CityService()
        cityService.getCities().then(result=>setCities(result.data.data))
    }, [])

    return (
        <div>
            <Table celled>
        <Table.Header>   
          <Table.Row>
            <Table.HeaderCell>Şehirler</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {cities.map((city) => (
            <Table.Row key={city.id}>
              <Table.Cell>{city.cityName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
