
import Home from "./routes/Home/Home";
import Service from './routes/Service/Service';
import About from './routes/About/About';
import Contact from './routes/Contact/Contact';

import {Routes, Route, BrowserRouter} from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
