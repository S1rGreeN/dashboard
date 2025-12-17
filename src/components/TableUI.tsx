import Box from '@mui/material/Box';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';
import type { proceDatita } from '../functions/useFetchData';
import { useState, useEffect } from 'react';

function combineArrays(arrLabels: Array<string>, arrValues1: Array<number>, arrValues2: Array<number>) {
   return arrLabels.map((label, index) => ({
      id: index,
      label: label,
      value1: arrValues1[index],
      value2: arrValues2[index]
   }));
}

const columns: GridColDef[] = [
   { field: 'id', headerName: 'ID', width: 90 },
   {
      field: 'label',
      headerName: 'Fecha',
      width: 200,
   },
   {
      field: 'value1',
      headerName: 'Temperature',
      width: 125,
   },
   {
      field: 'value2',
      headerName: 'Wind',
      width: 125,
   },
   /*{
      field: 'resumen',
      headerName: 'Resumen',
      description: 'No es posible ordenar u ocultar esta columna.',
      sortable: false,
      hideable: false,
      width: 100,
      valueGetter: (_, row) => `${row.label || ''} ${row.value1 || ''} ${row.value2 || ''}`,
   }, */
];


export default function TableUI(datita: proceDatita) {
   {datita.isLoading && console.log("Loading")}
   {datita.error && console.log(datita.error)}
   const [rows, setRows] = useState(combineArrays([""], [0], [0]));
   useEffect(()=> {
      if(datita.data){
         setRows(combineArrays(datita.data.hourly.time, datita.data.hourly.temperature_2m, datita.data.hourly.wind_speed_10m))
      }
   }, [datita]);

   return (
      <>
         {datita.isLoading && <p>Loading...</p>}
         {datita.error && <p>`${datita.error}`</p>}
         {datita.data && (
            <Box sx={{ height: 350, width: '100%' }}>
            <DataGrid
               rows={rows}
               columns={columns}
               initialState={{
                  pagination: {
                     paginationModel: {
                        pageSize: 5,
                     },
                  },
               }}
               pageSizeOptions={[5]}
               disableRowSelectionOnClick
            />
         </Box>
         )}
         
      </>
   );
}