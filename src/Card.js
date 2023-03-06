import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';
import {Stack } from '@mui/material';
import QrCodeIcon from '@mui/icons-material/QrCode';

export default function ActionAreaCard() {
  return (
    <Card sx={{ 
      
      maxWidth: 300, 
      height: 450, 
      }}>
    
   <Stack variant="outlined" 
   sx={{
    display:"flex", 
    flexDirection:"row",
    justifyContent:"center",
    padding:4,
    margin:2,
    bgcolor:"#0F52BA",
    border: '1px solid black',
    borderRadius:2
    
    }}>
    <QrCodeIcon sx={{fontSize:180, color:"white"}}/>
    </Stack>
    
        <CardContent>
          <Typography gutterBottom variant="h6" component="h1" fontWeight={700} pY={2} color="hsl(218, 44%, 22%)">
            Improve your front-end skills by building projects.
          </Typography>
          <Typography variant="body2" color="text.secondary" fontWeight={400} textAlign={'center'}>
           Scan the qrcode to visit Frontend Mentor and take your coding skills to the next level
          </Typography>
        </CardContent>
    </Card>
  );
}