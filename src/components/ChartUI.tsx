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
                       Chart arrLabels vs Temperature & WindSpeed
                   </Typography>
                   <LineChart
                       height={300}
                       series={[
                           { data: datita.data.hourly.temperature_2m, label: 'value1' },
                           { data: datita.data.hourly.wind_speed_10m, label: 'value2' },
                       ]}
                       xAxis={[{ scaleType: 'point', data: datita.data.hourly.time }]}
                   />
               </>
        )}
    </>
      
   );
}

