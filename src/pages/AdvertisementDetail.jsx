import React, { useState ,useEffect} from "react";
import { useParams } from "react-router";
import { Button, Card, Image } from 'semantic-ui-react'
import JobAdvertisementService from "../services/jobAdvertisementService";

export default function AdvertisementDetail() {
    let { applicationDeadline } = useParams();
  
    const [jobAdvertisement, setJobAdvertisement] = useState({});

    useEffect(()=>{
        let jobAdvertisementService = new JobAdvertisementService()
        jobAdvertisementService.getByApplicationDeadline(applicationDeadline).then(result=>setJobAdvertisement(result.data.data))
      },[])

    return (
        <div>
            Detay Sayfaları Yapılandırılıyor...
      <Card.Group>
        <Card fluid>
          <Card.Content>
            <Image
              floated="right"
              size="mini"
              src="/images/avatar/large/steve.jpg"
            />
            <Card.Header>İşveren</Card.Header>
            <Card.Meta>Pozisyon</Card.Meta>
            <Card.Description>
              Açık pozisyoon için detaylı bilgi metni <strong></strong>
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green">
                Approve
              </Button>
              <Button basic color="red">
                Decline
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </div>
    )
}
