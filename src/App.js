import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import One from './pages/One';
import Two from './pages/Two';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Client from './pages/Client';
import Admin from './pages/Admin';
import Employee from './pages/Employee';
import ArticleOne from './pages/ArticleOne';
import ArticleTwo from './pages/ArticleTwo';
import ArticleThree from './pages/ArticleThree';
import ArticleFour from './pages/ArticleFour';
// #8e0000 red #e1d476 yellow #153e8d blue

export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home/articleOne' element={<ArticleOne />} />
        <Route path='/home/articleTwo' element={<ArticleTwo />} />
        <Route path='/home/articleThree' element={<ArticleThree />} />
        <Route path='/home/articleFour' element={<ArticleFour />} />
        <Route path='/one' element={<Two />} />
        <Route path='/two' element={<One />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/client-panel' element={<Client />} />
        <Route path='/admin-panel' element={<Admin />} />
        <Route path='/employee-panel' element={<Employee />} />
      </Routes>
    </div>
  );
}
