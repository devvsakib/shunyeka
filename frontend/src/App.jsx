import { Route, Routes } from 'react-router-dom';
import UserForm from './components/UserForm';
import UserDetails from './components/UserDetails';
import Layouts from './components/Layouts';
import Home from './pages/Home';
import Users from './pages/Users';

const App = () => {
  return (
    <div className='relative overflow-x-hidden'>
      <div className="hidden sm:block w-[100vw] h-[100vh] absolute -z-10 bg-gradient-to-l from-[#FFE4D4] via-[#ec33] blur-lg opacity-20 right-[-20px] top-0"></div>
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
    </div>

  );
};

export default App;
