import { Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import Layouts from './components/Layouts';
import Home from './pages/Home';
import Users from './pages/Users';

const App = () => {
  return (
    <Layouts>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/create" element={<UserForm />} />
        <Route path="/:userId/edit" element={<UserForm />} />
        <Route path="/:userId" element={<UserDetails />} />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Layouts>
  );
};

export default App;
