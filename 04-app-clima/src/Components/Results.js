// Esto esta dentro de Layout.js
import React from "react";
import { Card, Image } from "semantic-ui-react";

const Results = ({ data }) => { //Componente <Results>
  return (
    <>
      <Card fluid color="green">
        <Card.Content>
          <Image
            // size="mini"
            src={
              "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"
            }
          />
          <Card.Header>{data.name}</Card.Header> {/*La data es lo que viene haciendo */}
          <Card.Description>
            Temperatura: <strong>{data.main.temp}</strong>°C
          </Card.Description>
          <Card.Meta>
            Max.:<strong>{data.main.temp_max}</strong>
          </Card.Meta>
        </Card.Content>

        <Card.Content extra>
          <Card.Description>{data.weather[0].description}</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default Results;
