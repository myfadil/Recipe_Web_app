import { useState } from 'react'
import { Navigate, Route, Routes, BrowserRouter, Link, useParams } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import Menu from './pages/menu'
import UpdateMenu from './pages/UpdateMenu'
import AddMenu from './pages/inputmenu';
import SearchMenu from './pages/SearchMenu';
import MenuById from './pages/SearchMenu/_id';
import Login from './pages/Auth/Login'
import AuthChecker from './components/AuthChecker'
import Register from './pages/Auth/Register';
import DetailProfile from './pages/Profile/DetailProfile';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to="/menu" replace={true} />} />
          {/* <Route path='/menu' element={<Menu />} /> */}
          <Route path='/menu' element={<AuthChecker><Menu/></AuthChecker>} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/update-menu/:menuId' element={<UpdateMenu />} />
          <Route path='/input-menu' element={<AddMenu />} />
          <Route path='/search-menu' element={<SearchMenu />} />
          <Route path='/detail-menu/:id' element={<MenuById />} />
          <Route path='/detail-profile/:id' element={<DetailProfile />} />

          {/* <Route path='/menu-detail/:menuId' element={<MenuDetail />} />
        <Route path='/inputmenu' element={<InputMenu />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App