import { useEffect } from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';


function App() {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
     }
    }, 
  []
 );

// Inside your App function
return (
    <>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: 'grey.900', color: 'white' }}>
        <Toolbar>
          <img src="./gsgradsmall.svg" alt="Logo" style={{ height: 50 }} /> {/* Logo */}
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {/* Middle remains blank */}
          </Typography>
          <Button variant ="outlined" color="inherit" component="a" href="https://rules.grantship.fun" target="_blank">Rule Book</Button>
        </Toolbar>
      </AppBar>
    </Box>
    <h1 className="registration-form">
      Grant Ships Registration
    </h1>  
  
    <iframe 
      className="tally-iframe"
      data-tally-src="https://tally.so/embed/wLPkGy?alignLeft=1&hideTitle=1&dynamicHeight=1"
      loading="lazy" 
      title="Registration Form"
    ></iframe>

  </>
);
}

export default App;
