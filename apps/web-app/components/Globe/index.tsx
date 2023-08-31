// import * as THREE from "three"
import React, { useEffect, useRef, useState } from "react"
// import { Canvas, useFrame, ThreeElements } from "@react-three/fiber"
import Globe from "react-globe.gl"

const World = () => {
    const [volcanoes, setVolcanoes] = useState([])
    const [countries, setCountries] = useState({ features: [] })
    const globeRef = useRef()

    useEffect(() => {
        // load data
        fetch("/img/world_volcanoes.json")
            .then((res) => res.json())
            .then(setVolcanoes)

        fetch("/countries.geo.json")
            .then((res) => res.json())
            .then(setCountries)
    }, [])

    useEffect(() => {
        console.log(globeRef.current.controls())
        let globeControls = globeRef.current.controls()
        globeControls.autoRotate = true
        globeControls.autoRotateSpeed = 0.3
        // globeRef.current.
    }, [])

    useEffect(() => {
        globeRef.current.pointOfView({ lat: 30, lng: 10, altitude: 2 })
    }, [])

    // const catColor = d3.scaleOrdinal(d3.schemeCategory10.map((col) => transparentize(0.2, col)))

    const getAlt = (d) => d.elevation * 5e-5

    const getTooltip = (d) => `
      <div class="bg-fora-gray200">
        <div><b>${d.name}</b>, ${d.country}</div>
        <div>(${d.type})</div>
        <div>Elevation: <em>${d.elevation}</em>m</div>
      </div>
    `

    // primary: "#00FFEA",
    //                 secondary: "#FF8000",
    //                 magenta: "#FF0062",
    //                 lightBase: "#fbfaf8",
    //                 darkBase: "#2C2A26",
    //                 gray50: "#fbfaf8",
    //                 gray100: "#F8F6F2",
    //                 gray200: "#F2EDE5",
    //                 gray300: "#ECE5D8",
    //                 gray400: "#9C9485",
    //                 gray600: "#706A5F",
    //                 gray700: "#59544C",
    //                 gray800: "#433F39",
    //                 gray900: "#2C2A26",
    //                 gray950: "#1A1916",

    const width =
        window.innerWidth < 768
            ? window.innerWidth
            : window.innerWidth < 1024
            ? window.innerWidth / 2
            : window.innerWidth / 2
    return (
        <Globe
            height={width}
            width={width}
            ref={globeRef}
            globeImageUrl="/img/earth-dark.jpg"
            bumpImageUrl="/img/earth-topology.png"
            waitForGlobeReady={true}
            backgroundColor="#1A1916"
            pointsData={volcanoes}
            hexPolygonsData={countries.features}
            hexPolygonResolution={3}
            hexPolygonMargin={0.7}
            hexPolygonColor={() => "#ECE5D8"}
            onPointHover={(point) => {
                // console.log('point', point);
                console.log(globeRef.current)
                // globeRef.current.pointOfView({ lat: point.lat, lng: point.lon, altitude: 3 });
            }}
            // hexPolygonColor={() => `#${Math.round(Math.random() * Math.pow(2, 24)).toString(16).padStart(6, '0')}`}
            pointLat="lat"
            pointLng="lon"
            atmosphereColor="#00FFEA"
            atmosphereAltitude={0.1}
            pointAltitude={getAlt}
            pointRadius={0.15}
            pointColor={(d) => {
                console.log(d.upcoming)
                return d.upcoming ? "#00FFEA" : "#F8F6F2"
            }}
            pointLabel={getTooltip}
            onPointClick={(point) => window.open(`https://en.wikipedia.org/wiki/${point.name}`, "_blank")}
            labelsData={volcanoes}
            labelLat="lat"
            labelLng="lon"
            labelAltitude={(d) => getAlt(d) + 1e-6}
            labelDotRadius={0.3}
            labelDotOrientation={() => "bottom"}
            labelColor={(d) => "#00FFEA"}
            labelText="name"
            labelSize={1.5}
            labelResolution={0}
            labelLabel={getTooltip}
            onLabelClick={(label) => window.open(`https://en.wikipedia.org/wiki/${label.name}`, "_blank")}
            objectRotation={{ x: 10, y: 0, z: 0 }}
        />
    )
}

// const Tooltip = ({ city }) => {
//     return (
//         <div className="bg-fora-primary">
//             <div>
//                 <b>{city.name}</b>, {city.country}
//             </div>
//             <div>({city.type})</div>
//             <div>Elevation: <em>{city.elevation}</em>m</div>
//         </div>
//     )
// }

export default World
