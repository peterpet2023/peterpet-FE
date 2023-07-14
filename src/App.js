import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage';
import Welcome from './pages/Welcome';
import Select_account from './pages/Select_account';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Welcome/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
