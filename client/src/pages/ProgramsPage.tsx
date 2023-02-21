import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router";
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