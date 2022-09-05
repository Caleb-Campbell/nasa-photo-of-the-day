import React, {useState, useEffect} from "react";
import axios from 'axios'
import theme from "./theme";
import styled from 'styled-components';

//Imported Components
import NasaPhoto from "./components/NasaPhoto";
import Header from "./components/Header/Header";
import Info from "./components/Info";

// const dummyData = {
//   date: "2022-09-05",
//   explanation: "Stars created these cliffs. Specifically, the destructive winds and energetic light from the stars in the open cluster NGC 3324 eroded away part of a mountain of dark interstellar dust in the northern part of the Carina Nebula. Several of these stars are visible toward the top of this highly detailed image taken recently by the James Webb Space Telescope, the largest astronomical telescope ever launched. Webb's large mirror and ability to see dust-piercing infrared light has enabled it to capture fascinating details in the dust, hundreds of previously hidden stars, and even some galaxies far in the distance.  The featured jagged cliffs occur in part of Carina known as the Gabriela Mistral Nebula -- because when viewed in another orientation, they appear similar to the facial profile of the famous Chilean poet.  These nebular cliffs occur about 7,600 light years away toward the southern constellation of Carina.   Astrophysicists: Browse 2,800+ codes in the Astrophysics Source Code Library",
//   hdurl: "https://apod.nasa.gov/apod/image/2209/CarinaCliffs_Webb_2000.jpg",
//   media_type: "image",
//   service_version: "v1",
//   title: "Carina Cliffs from the Webb Space Telescope",
//   url: "https://apod.nasa.gov/apod/image/2209/CarinaCliffs_Webb_1080.jpg"
// }

const StyledApp = styled.div`
text-align: center;
margin: 0 auto;

`

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
    <StyledApp>
      <Header headerInfo={data} theme={theme} />
      <NasaPhoto photo={data} theme={theme} />
      <Info data={data} theme={theme} /> 
    </StyledApp>
  );
}

export default App;
