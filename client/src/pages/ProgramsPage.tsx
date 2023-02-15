import React from 'react';
import Navbar from "../components/Navbar";
import Programs from "../components/ProgramView";


const ProgramsPage: React.FC = () => {

    return (
      <>
        <Navbar />
        <Programs></Programs>
      </>
    );
  };

export default ProgramsPage;