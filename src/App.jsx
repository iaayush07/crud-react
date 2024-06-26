import { Box, Grid } from '@mantine/core'
import Header from './core/components/Header'
import Navbar from './core/components/Navbar'
import UserList from './pages/UserList'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserForm from './pages/UserForm'
import FormikList from './pages/FormikList'
import FormikForm from './pages/FormikForm'

function App() {

  return (
    <BrowserRouter>
      <Box display="flex" h="100%">
        <Navbar></Navbar>
        <Box className='main-wrapper' bg="#ffffff">
          <Header></Header>
          <Routes>
            <Route path="/" element={<UserList />}/>
            <Route path="/add-user" element={<UserForm />}/>
            <Route path="/formik-list" element={<FormikList />}/>
            <Route path="/formik-form" element={<FormikForm />}/>
            <Route path="/edit-user/:userId" element={<UserForm />} />
          </Routes>
        </Box>
      </Box>
    </BrowserRouter>
  )
}

export default App
