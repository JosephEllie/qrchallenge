import { Container, Box } from '@mui/material'
import ActionAreaCard from './Card'
import './index.css'
function App() {
  return (
    <Container> 
    <Box sx={{ 
     bgcolor: '#cfe8fc', 
     height: '80vh', 
     marginY: 15,
     marginX:1,
     display:"flex",
     justifyContent:"center",
     alignItems:"center"
     }}>
       <ActionAreaCard 
      sx={{
    

      }}
       />
     </Box>
</Container>
  );
}

export default App;
