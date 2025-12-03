//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import { Grid } from '@mui/material';
import './App.css'
import HeaderUI from './components/HeaderUI';
import AlertUI from './components/AlertUI';
import SelectorUI from './components/SelectorUI'
import IndicatorUI from './components/IndicatorUI'
import useFetchData from './functions/useFetchData';



function App() {
  //const [count, setCount] = useState(0)
  const dataFetcherOutput = useFetchData();

  

  return (

    <Grid container spacing={5} justifyContent="center" alignItems="center">

      {/* Encabezado */}
      <Grid size={{ xs: 12, md: 12 }}>Elemento: Encabezado <HeaderUI/></Grid>

      {/* Alertas */}
      <Grid container justifyContent="right" alignItems="center">Elemento: Alertas<AlertUI description="No se preveen lluvias"/></Grid>

      {/* Selector */}
      <Grid size={{ xs: 12, md: 3  }}><SelectorUI></SelectorUI></Grid>

      {/* Indicadores */}
      <Grid container size={{ xs: 12, md: 9 }}>Elemento: Indicadores
        <Grid size={{ xs: 12, md: 3 }}>
          {dataFetcherOutput && (<IndicatorUI title='Temperatura (2m)' 
          description={`${dataFetcherOutput.current.temperature_2m} ${dataFetcherOutput.current_units.apparent_temperature}`} />)}
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
         {dataFetcherOutput &&  (<IndicatorUI title='Apparent Temperature' 
         description={`${dataFetcherOutput.current.apparent_temperature} ${dataFetcherOutput.current_units.temperature_2m}`}/>)}
          {/* IndicatorUI con la Temperatura aparente en °C' */}
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          {/* IndicatorUI con la Velocidad del viento en km/h' */}
          {dataFetcherOutput && (<IndicatorUI title='Wind Speed (10 m)' 
          description={`${dataFetcherOutput.current.wind_speed_10m} ${dataFetcherOutput.current_units.wind_speed_10m}`}/>)}
        </Grid>

        <Grid size={{ xs: 12, md: 3 }}>
          {dataFetcherOutput && (<IndicatorUI title='Relative Humidity (2 m)' 
          description={`${dataFetcherOutput.current.relative_humidity_2m} ${dataFetcherOutput.current_units.relative_humidity_2m}`}/>)}
          {/* IndicatorUI con la Humedad relativa en %' */}
        </Grid>
      </Grid>

      {/* Gráfico */}
      <Grid sx={{ display: { xs: "none", md: "block"} }}>Elemento: Gráfico</Grid>

      {/* Tabla */}
      <Grid sx={{ display: { xs: "none", md: "block" } }}>Elemento: Tabla</Grid>

      {/* Información adicional */}
      <Grid>Elemento: Información adicional</Grid>

    </Grid>
  )
}

export default App;
