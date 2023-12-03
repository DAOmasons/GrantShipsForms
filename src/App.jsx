import { useEffect } from 'react'
import './App.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App() {
  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
     }
    }, 
  []
 );

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
    <Typography variant="h4" component="h1" className="registration-form" gutterBottom>
        Grant Ships Registration
      </Typography>
    <Box sx={{ my: 2, mx: 'auto', maxWidth: '650px' }}> {/* Add styling as needed */}
        <Typography variant="body1" paragraph>
          We are currently accepting applications to fill positions in our beta season of Grant Ships. 
          The main roles we need are Grant Ships operators. You must be able to co-ordinate with other 
          people in a decentralized manner because you and your team will design and implement your
          own micro grants program and have the opportunity to distribute almost 30K $Arb tokens during
          the beta round, to projects that provide impact on Arbitrum.
        </Typography>
        <Typography variant="body1" paragraph>
          If you are interested in taking part, please fill out the form:
        </Typography>
      </Box>   
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
