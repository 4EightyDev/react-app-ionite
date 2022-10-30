import React from "react";
import { Header, Hero, Footer } from "./components";

const App = () => {
     return (
          <div className="min-h-screen overflow-hidden bg-white antialiased bg-sky-400 bg-gradient-to-br from-slate-900 to-slate-900/90">
               {/* Global Linear Gradients */}
               <Header />
               <Hero />
               <Footer />
          </div>
     );
};

export default App;
