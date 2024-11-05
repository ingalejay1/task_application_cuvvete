import { HashRouter, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Form from './components/Form';
import { UserProvider, useUser } from './UserContext';
import SharedTask from './components/ShareTask';

function AppRouter() {
  const { user, setUser } = useUser();

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Homepage user={user} />} />
        <Route path="/form" element={<Form setUser={setUser} />} />
        <Route path="/sharedtask/:taskId" element={<SharedTask />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
}

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <AppRouter />
    </UserProvider>
  );
}

export default App;
