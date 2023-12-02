import { useEffect } from 'react'
import './App.css'

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
    <h1 className="registration-form">
      Grant Ships Registration
    </h1>  
  
    <iframe 
      data-tally-src="https://tally.so/embed/wLPkGy?alignLeft=1&hideTitle=1&dynamicHeight=1"
      loading="lazy" 
      width="650em" 
      height="200" 
//      frameborder="0" 
//      marginheight="0" 
//      marginwidth="0" 
      title="Registration Form"
    ></iframe>
  </>
);
}

export default App;
