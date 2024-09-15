import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from '../common/header/Header';
import Footer from '../common/footer/Footer';

const Home = lazy(() => import('../home/Home'));
const About = lazy(() => import('../about/About'));
const Services = lazy(() => import('../services/Services'));
const Rentals = lazy(() => import('../Rentals/Rentals'));
const Pricing = lazy(() => import('../pricing/Pricing'));
const Contact = lazy(() => import('../contact/Contact'));
const SignUp = lazy(() => import('../SignUp/SignUp'));
const Login = lazy(() => import('../Login/Login'));
const Details = lazy(() => import('../Detail/Viewdetails'));

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/services', component: Services },
  { path: '/Rentals', component: Rentals },
  { path: '/pricing', component: Pricing },
  { path: '/contact', component: Contact },
  { path: '/SignUp', component: SignUp },
  { path: '/Login', component: Login },
  { path: '/Viewdetails', component: Details },
];

const Pages = () => {
  return (
    <Router>
      <Header />
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            exact
            path={route.path}
            render={() => (
              <Suspense fallback={<div>Loading...</div>}>
                <route.component />
              </Suspense>
            )}
          />
        ))}
        <Route render={() => <div>Not Found</div>} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Pages;