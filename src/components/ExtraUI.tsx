 import Card from '@mui/material/Card';
 import CardContent from '@mui/material/CardContent';
 import Typography from '@mui/material/Typography';
 import type {proceDatita} from '../functions/useFetchData';

 interface ExtraUIProps {
     title?: string;
     description?: string;
 }
  export default function ExtraUI(props: ExtraUIProps) {
    
      return (
        <>
            <Typography variant="body1" component="p" color="white" sx={{ fontSize: "24px" }} marginBottom={2}>
                Dia mas caluroso
            </Typography>
            <Card>
                <CardContent sx={{ height: '100%' }}>
                <Typography variant="h5" component="div">
                    {props.description}
                </Typography>
                <Typography variant="body2" component="p" color="text.secondary">
                    {props.title}
                </Typography>
                </CardContent>
            </Card>
        </>
      )
    
  }