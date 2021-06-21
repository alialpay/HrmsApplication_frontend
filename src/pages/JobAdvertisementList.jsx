import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Icon, Label, Menu, Table } from 'semantic-ui-react'
import JobAdvertisementService from '../services/jobAdvertisementService';

export default function JobAdvertisementList() {

  const [jobAdvertisements, setJobAdvertisements] = useState([])

  useEffect(() => {
    let jobAdvertisementService = new JobAdvertisementService()
    jobAdvertisementService.getJobAdvertisements().then(result=>setJobAdvertisements(result.data.data))
}, [])

  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>İlan Başlığı</Table.HeaderCell>
            <Table.HeaderCell>Pozisyon Tanımı</Table.HeaderCell>
            <Table.HeaderCell>Min Maaş</Table.HeaderCell>
            <Table.HeaderCell>Max Maaş</Table.HeaderCell>
            <Table.HeaderCell>Açık Poz.</Table.HeaderCell>
            <Table.HeaderCell>Yayın_Tarihi</Table.HeaderCell>
            <Table.HeaderCell>Son_Başvuru</Table.HeaderCell>
            <Table.HeaderCell>İşveren_Kurum</Table.HeaderCell>
            <Table.HeaderCell>Şehir</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {jobAdvertisements.map((jobAdvertisement) => (
            <Table.Row key={jobAdvertisement.id}>
              <Table.Cell>{jobAdvertisement.jobPosition.title}</Table.Cell>
              <Table.Cell>{jobAdvertisement.jobDescription}</Table.Cell>
              <Table.Cell>{jobAdvertisement.minSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.maxSalary}</Table.Cell>
              <Table.Cell>{jobAdvertisement.numberOfOpenPositions}</Table.Cell>
              <Table.Cell>{jobAdvertisement.createdAt}</Table.Cell>
              <Table.Cell><Link to={`/advertisements/${jobAdvertisement.applicationDeadline}`}>{jobAdvertisement.applicationDeadline}</Link></Table.Cell>
              <Table.Cell>{jobAdvertisement.employer.companyName}</Table.Cell>
              <Table.Cell>{jobAdvertisement.city.cityName}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>


        { <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer> }
      </Table>
    </div>
  )
}