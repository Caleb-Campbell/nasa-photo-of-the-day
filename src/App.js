import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios'

//Imported Components
import NasaPhoto from "./components/NasaPhoto";
import Header from "./components/Header/Header";
import Info from "./components/Info";

// Used this varible 'dataDump' for building the app so there wouldn't be overloading
// const dataDump = {
//   copyright: "Wang Letian",
//   date: "2022-09-03",
//   explanation: "On August 25 Sun and Moon could both be seen in planet Earth's daytime skies. And so could the International Space Station. The ISS crossed the disk of the waning crescent Moon as seen from Shunyi district, Beijing, China at about 11:02 am local time. Some 40 kilometers to the southwest, in Fengtai district, the ISS was seen to cross the Sun's disk too. The solar transit was observed only 29 seconds later. Both transits are compared in these panels, composed of processed and stacked video frames from the two locations. The coordinated captures were made with different equipment, but adjusted to show the Sun and Moon at the same scale. The ISS was at a calculated range of 435 kilometers for the lunar transit and 491 kilometers when passing in front of the Sun.   Artemis I: Launch Update",
//   hdurl: "https://apod.nasa.gov/apod/image/2209/Interval29seconds_Transit.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "Sun and Moon and ISS",
//   url: "https://apod.nasa.gov/apod/image/2209/Interval29seconds_Transit1200.jpg"
// }



function App() {
  const [data, setData] = useState({})

  useEffect(()=> {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=iDawMAeL8rS7oZ3L6ZTXhNxX9Sk4tbmkj7NgqjfL')
    .then(res=> {
  setData(res.data)
},[])
.catch(err => console.error(err))
  })

  return (
    <div className="App">
      <Header headerInfo={data} />
      <NasaPhoto photo={data} />
      <Info data={data} /> 
    </div>
  );
}

export default App;
