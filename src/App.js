import React from 'react';
import { Header, Hero, Footer } from './components'

const App = () => {
     return (
          <div className='min-h-screen overflow-hidden bg-white dark:bg-slate-900 antialiased'>
               {/* Global Linear Gradients */}
               <Header />
               <Hero />
               <Footer />
          </div>
     );
}

export default App;
