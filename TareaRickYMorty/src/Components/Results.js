// Esto esta dentro de Layout.js
import React from "react";
import { Card,Image } from "semantic-ui-react";

const Results = ({ data }) => { //Componente <Results>
  return (
    <>
      <Card fluid color="green">
        <Card.Content>
         <Card.Header>{data.results[0].name}
         <Image src={data.results[0].image} wrapped ui={false} />
         </Card.Header> {/*La data es lo que viene haciendo */}
          <Card.Description>
            Nombre: <strong>{data.results[0].name}</strong>
          </Card.Description>
          <Card.Description>
            Especie:<strong>{data.results[0].species}</strong>
          </Card.Description>
          <Card.Description>
            Estatus:<strong>{data.results[0].status}</strong>
          </Card.Description>
          <Card.Description>
            Origen:<strong>{data.results[0].origin.name}</strong>
          </Card.Description>
          <Card.Description>
            Genero<strong>{data.results[0].gender}</strong>
          </Card.Description>
        </Card.Content>

        <Card.Content extra>
          <Card.Description>Description</Card.Description>
        </Card.Content>
      </Card>
    </>
  );
};

export default Results;
