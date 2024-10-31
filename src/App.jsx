import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import Loading from './components/pages/Loading';

// Import components using lazy
const Header = lazy(() => import('./components/Header'));

const Landing = lazy(() => import('./components/pages/Landing'));
const Vision = lazy(() => import('./components/pages/Vision'));
const Explore = lazy(() => import('./components/pages/Explore'));
const Unique = lazy(() => import('./components/pages/Unique'));
const President = lazy(() => import('./components/pages/President'));
const Numerics = lazy(() => import('./components/pages/Numerics'));
const Footer = lazy(() => import('./components/pages/Footer'));
const DotsV = lazy(() => import('./components/pages/DotsV'));
const Goldenchatbot = lazy(() => import('./components/chat-bot/Goldenchatbot'));
const Events = lazy(() => import('./components/pages/Events'));
const Banner = lazy(() => import('./components/pages/Banner'));
const FetchData = lazy(() => import('./components/pages/FetchData'));
const Service = lazy(() => import('./components/pages/Service'));


function App() {
  return (
    <div className='bg-1'>
      <Helmet>
        <title>Golden Stars College - Premier Education in Ethiopia</title>
        <meta name="description" content="Golden Stars College Ethiopia offers premier education for the golden generation. Visit our campuses in Addis Ababa, Hawassa, and Hossana." />
        <meta property="og:title" content="Golden Stars College Ethiopia" />
        <meta property="og:description" content="Open for registration. Visit Golden Stars College campuses in Addis Ababa, Hawassa, and Hossana." />
        <meta name="keywords" content="Golden Stars College, Ethiopia, education, Addis Ababa, Hawassa, Hossana" />
      </Helmet>
      <Suspense fallback={<><Header />  <Loading /></> }>
        <Header />
        
        <Landing />
        <Vision />
        <Explore />
        <Unique />
        <President />
        <Numerics />
        <Events />
        <DotsV />
        <Banner/>
        <Footer />
        <Goldenchatbot />
      </Suspense>
    </div>
  );
}

export default App;
