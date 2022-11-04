import React from "react";
import { Header, Hero, Footer, Compliance } from "./components";

const App = () => {
     return (
          <div className="min-h-screen overflow-hidden antialiased bg-slate-900">
               {/* Global Linear Gradients */}
               <Header />
               <Hero />
               <Compliance />
               <Footer />
          </div>
     );
};

export default App;
