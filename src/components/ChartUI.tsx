import { LineChart } from '@mui/x-charts/LineChart';
import Typography from '@mui/material/Typography';
import type {proceDatita} from '../functions/useFetchData';



export default function ChartUI(datita: proceDatita) {
    
   return (
    <>
        {datita.isLoading && <p>datita cargando</p>}
        {datita.error && <p>{datita.error}</p>}
        {datita.data && (
               <>
                   <Typography variant="h5" component="div">
                       Temperature & WindSpeed
                   </Typography>
                   <LineChart
                       height={300}
                       series={[
                           { data: datita.data.hourly.temperature_2m, label: 'Temperature' },
                           { data: datita.data.hourly.wind_speed_10m, label: 'Wind' },
                       ]}
                       xAxis={[{ scaleType: 'point', data: datita.data.hourly.time }]}
                   />
               </>
        )}
    </>
      
   );
}

