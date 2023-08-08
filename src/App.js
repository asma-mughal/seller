import './App.css';
import { Route,Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/home/home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import './style/style.scss';
import 'react-quill/dist/quill.snow.css'
import { useContext } from 'react';
import {DarkModeContext} from './context/darkModeContext';
import KanbanBoard from './components/Kanban/KanbanBoard';
import Kanban from './pages/Kanban/Kanban';
import GoogleCalendar from './components/google/Calendar';
import PageCalendar from './pages/Calendar/PageCalendar';
import TextEditor from './pages/TextEditor/TextEditor';
import Newfolder from './pages/Zoom/Newfolder';

function App() {
  const {darkMode} = useContext(DarkModeContext)
//#0fa3b1
  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Home  />} />
          <Route path="login" element={<Login />} />
          <Route path="users">
            <Route index element={<List />} />
            <Route path=":userId" element={<Single />} />
            <Route path=":userId/edit" element={<TextEditor />} />
            <Route path="kanban" element={<Kanban />} />
            <Route path='calendar'  element={<PageCalendar />}/>
            <Route path='zoom'  element={<Newfolder />}/>
          </Route> 
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
