// Results.js Se ejecuta dentro de este archivo
import React, {useState} from 'react';
import { Grid, Header,Segment,Form ,Button,Icon,Message} from 'semantic-ui-react'; 
import { Input } from 'semantic-ui-react' //Para hacer importaciones que no son default -> {}
import Api from "../Utils/Api";
import Results from './Results';
import Mapa from "./Mapa";

const Layout=()=> {

    const [ciudad, setCiudad] = useState("");
    const [data, setData] = useState({});
    const [showSearch, setShowSearch] = useState(false);
    const [showError, setShowError] = useState(false);

    const inputHandler = (e) => {
        // console.log(e.target.value);
        const {value}=e.target;
        setCiudad(value);
    };

    const onClickHandler=()=>{
        console.log("Click para consulta");

        Api.getWeather(ciudad)
        .then((respuesta)=>{
            console.log(respuesta);
            setData(respuesta.data);
            setShowSearch(true);
            setShowError(false);
        })
        .catch((err)=>{
            console.log(err);
            setShowSearch(false);
            setShowError(true);
        });
    };

    return ( //Aqui adentro se usa la sintaxis de JSX por ende las condicionales con con {}
        <>
            
            <Input icon='search' placeholder='Search...' />
                                        
            <Grid textAlign="center" style={{height:"90vh"}} verticalAlign="middle"> 
                <Grid.Column style={{maxWidth:450}}>
                    <Header as="h1" color="green" size='huge'>Search for Weater</Header>
                    <Segment piled color="green">
                        <Grid>
                            <Grid.Column>
                                <Form>
                                    <Form.Input placeholder="City" onChange={inputHandler}></Form.Input>
                                    <Button animated onClick={onClickHandler}>
                                    <Button.Content visible>Next</Button.Content>
                                    <Button.Content hidden>
                                    <Icon name='arrow right' />
                                    </Button.Content>
                                    </Button>
                                </Form>
                            </Grid.Column>
                        </Grid>
                    </Segment>
                {showSearch && <Results data={data}/>}
                {showSearch && <Mapa nombre={data.name} lon={data.coord.lon} lat={data.coord.lat}/>}

                {showError && <Message color="red">
                    <Message.Header>Aviso</Message.Header>
                    <p>No hay información</p>
                </Message>}
                </Grid.Column>
            </Grid>
        </>
    )
}

export default Layout;