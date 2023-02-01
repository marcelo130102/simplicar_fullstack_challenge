import './App.css';
import { MantineProvider} from '@mantine/core';
import { Route, Routes } from "react-router-dom";
import { AuthenticationForm } from './components/Login';
import Schudle from './pages/Schudle';


function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <Routes>
      <Route path="/" element={<AuthenticationForm />} />
      <Route path="/schudle/:id" element={<Schudle />} />
    </Routes>
    </MantineProvider>
  );
}

export default App;
