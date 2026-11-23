import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
function App() {
 return (
 <Card sx={{ maxWidth: 300 }}>
 <CardContent>
 <Typography variant="h5">
 Student Details
 </Typography>
 <Typography>
 Name: Rahul
 </Typography>
 <Typography>
 Course: React
 </Typography>
 </CardContent>
 </Card>
 );
}
export default App