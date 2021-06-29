import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";



const Mapa = ({nombre,lon,lat}) => {
  return (
    <ComposableMap 
    projectionConfig={{
      scale: 148
    }}>
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies
            .map(geo => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#DDD"
                stroke="#FFF"
              />
            ))
        }
      </Geographies>
        <Marker key={nombre} coordinates={[lon,lat]}>
          <circle r={10} fill="#F00" stroke="#fff" strokeWidth={2} />
          <text
            textAnchor="middle"
            y={-15}
            style={{ fontFamily: "system-ui", fill: "#5D5A6D" }}
          >
            {nombre}
          </text>
        </Marker>
    </ComposableMap>
  );
};

export default Mapa;
