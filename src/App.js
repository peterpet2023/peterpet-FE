import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import Welcome from './pages/Welcome';
import Select_account from './pages/Select_account';
import Login_email from './pages/LoginEmail';
import Login_password from './pages/LoginPassword';
import New_agree from './pages/New_agree'; 
import New_password from './pages/New_password';
import New_detail from './pages/New_detail';
import Logo from './pages/Logo';
import Reception2 from './pages/reception/Reception2';
import Reception3 from './pages/reception/Reception3';
import GuidePage from './pages/GuidePage/GuidePage';
import FullView from './pages/FullView/FullView';
import DesignPage from './pages/DesignPage/DesignPage';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import DetailPage from './pages/DetailPage/DetailPage';
import Reception4 from './pages/reception/Reception4';
import Reception5 from './pages/reception/Reception5';
import DesignUpload1 from './pages/DesignUpload/DesignUpload1';
import DesignUpload2 from './pages/DesignUpload/DesignUpload2';
import DesignUpload3 from './pages/DesignUpload/DesignUpload3';
import DesignUpload4 from './pages/DesignUpload/DesignUpload4';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
          <Route path='/select' element={<Select_account/>} />
          <Route path='/Login_email' element={<Login_email/>} />
          <Route path='/Login_password' element={<Login_password/>} />
          <Route path='/New_agree' element={<New_agree/>} />
          <Route path='/New_password' element={<New_password/>} />
          <Route path='/New_detail' element={<New_detail/>} />
          <Route path='/Logo' element={<Logo/>}/>
          <Route path="*" element={ <div>없는페이지임</div> } />
          <Route path='/main' element={<MainPage />} />
          <Route path='/guide' element={<GuidePage />} />        

          <Route path='/Reception2' element={<Reception2 />} />
          <Route path='/full-view' element={<FullView />} />
          <Route path='/design/:petType' element={<DesignPage />} />
          <Route path='/detail/:designId' element={<DetailPage />} />
          <Route path="/Reception3" element={<Reception3/>} />
          <Route path="/Reception4" element={<Reception4/>} />
          <Route path="/Reception5" element={<Reception5/>} />

          <Route path="/DesignUpload1" element={<DesignUpload1/>}/>
          <Route path="/DesignUpload2" element={<DesignUpload2/>}/>
          <Route path="/DesignUpload3" element={<DesignUpload3/>}/>
          <Route path="/DesignUpload4" element={<DesignUpload4/>}/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
