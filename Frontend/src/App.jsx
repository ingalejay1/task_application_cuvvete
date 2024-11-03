import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Homepage from './components/Homepage'
import NotFound from './components/NotFound';
import Form from './components/Form'
import { UserProvider, useUser } from './UserContext';
import SharedTask from './components/ShareTask';

function AppRouter() {
  const { user, setUser } = useUser();

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Homepage user={user} />,
    },
    {
      path: '/form',
      element: <Form setUser={setUser} />,
    },
    {
      path: '/sharedtask/:taskId',
      element: <SharedTask />,
    },
    {
      path: '*',
      element: <NotFound />
    }
  ]);

  return <RouterProvider router={appRouter} />;
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
