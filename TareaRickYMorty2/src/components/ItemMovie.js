import React, {useState} from "react";

import { Card, Button } from "semantic-ui-react";

import Api from "../utils.js/Api";

import DetailMovie from "./DetailMovie";

const ItemMovie = ({image,name,id,species,gender}) => {
    const [detail, setDetail] = useState({});
    const [showDetail, setShowDetail] = useState(false);

    const clickShowDetail = (e) =>{
        console.log(e.target.id);
        Api.getMoviesDetail(e.target.id)
        .then((resp)=>{
            // console.log(resp.data);
                console.log(resp.data)
                setDetail(resp.data);
                setShowDetail(true);
        })
        .catch((err)=>{
            console.log(err);
        });
    };
  return (
    <>
      <Card style={{width:"270px"}}>
        <Card.Content header={name}/>
        <Card.Content style={{
            height:"300px",
            backgroundImage:`url(${image})`,
            backgroundSize:"cover",
        }}>
          
        </Card.Content>
        <Card.Content extra>
            <Button
            color="blue"
            floated="right"
            id={id}
            onClick={clickShowDetail}>
                Details
            </Button>
        </Card.Content>
      </Card>

      <DetailMovie
      detail={detail}
      showDetail={showDetail}
      setShowDetail={setShowDetail}
      />
    </>
  );
};

export default ItemMovie;
