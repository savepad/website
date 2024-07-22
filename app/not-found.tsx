import React from 'react';
import Nav from '../components/Nav';
import Breakpoint from '../components/Breakpoint';

const NotFound: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <Nav />
      <div className="flex flex-1 items-center justify-center">
        <Breakpoint
          header="💀 Oops!"
          texts={[
            "There's nothing here",
          ]}
        />
      </div>
    </main>
  );
};

export default NotFound;