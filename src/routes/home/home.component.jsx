import { Outlet } from 'react-router-dom';
import Directory from '../../components/directory/directory.component';



 export const Home = () => {

    return (
      <div>
         <Outlet />
        <Directory />;
      </div>
    );
  
};

  export default Home;