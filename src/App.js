import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import Welcome from './pages/Welcome';
import Select_account from './pages/Select_account';
import Login_email from './pages/Login_email';
import Login_password from './pages/Login_password';
import New_agree from './pages/New_agree';
import New_password from './pages/New_password';
import New_detail from './pages/New_detail';
import Logo from './pages/Logo';
import Reception2 from './pages/reception/Reception2';
import GuidePage from './pages/GuidePage/GuidePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Welcome />} />
          <Route path='/test' element={<MainPage />} />
          <Route path='/select' element={<Select_account />} />
          <Route path='/Login_email' element={<Login_email />} />
          <Route path='/Login_password' element={<Login_password />} />
          <Route path='/New_agree' element={<New_agree />} />
          <Route path='/New_password' element={<New_password />} />
          <Route path='/New_detail' element={<New_detail />} />
          <Route path='/Logo' element={<Logo />} />
          <Route path='*' element={<div>없는페이지임</div>} />
          <Route path='/login' element={<Login_email />} />
          <Route path='/main' element={<MainPage />} />
          <Route path='/guide' element={<GuidePage />} />
          <Route path='/Reception2' element={<Reception2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
