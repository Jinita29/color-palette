import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AuthRoutes, UserRoutes } from './route/PageRoute';

const AuthLayout = lazy( () => import('./layout/AuthLayout') );
const PublicLayout = lazy( () => import('./layout/PublicLayout') );
const Error = lazy( () => import('./components/common/Error') );

const App = () => {
  return (
    <Routes>
      <Route element={<Suspense fallback={'Loading'} ><AuthLayout /></Suspense>} >
        {AuthRoutes?.map((authRoute, index)=>{
          return <Route key={index} path={authRoute?.path} element={authRoute?.component} />
        })
        }
      </Route>
      <Route element={<Suspense fallback={'Loading'} ><PublicLayout /></Suspense>} >
        {UserRoutes?.map((userRoute, index)=>{
          return <Route key={index} path={userRoute?.path} element={userRoute?.component} />
        })
        }
      </Route>
      <Route path='*' element={<Suspense fallback={'Loading'} ><Error /></Suspense>} />
    </Routes>
  );
}

export default App;
