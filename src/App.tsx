import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Landing from './components/pages/Landing';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/" element={<Landing />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

