import React from 'react';
import Nav from '../components/Nav';
import Breakpoint from '../components/Breakpoint';
import Footer from '@/components/Footer';

const NotFound: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1 items-center justify-center">
        <Breakpoint
          header="💀 Oops! Nothing here"
          texts={[
            "Try one of these 👇"
          ]}
        />
      </div>
      <Footer />
    </main>
  );
};

export default NotFound;