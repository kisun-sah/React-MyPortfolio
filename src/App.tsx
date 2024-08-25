import '@mantine/core/styles.css';
import './App.css';
import { MantineProvider } from '@mantine/core';
import HomePage from './components/HomePage';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { pdfjs } from 'react-pdf'; // You can also use <link> for styles
import { useEffect } from 'react';
// ..
AOS.init();

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();




function App() {

  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <MantineProvider >
    <HomePage/>
  </MantineProvider>
  
  );
}

export default App;
