import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router";
import Navbar from "../components/Navbar";
import Programs from "../components/ProgramView";


const ProgramsPage: React.FC = () => {
    const [form, setForm] = useState({
      username: "",
      password: "",
      confirmPassword: "",
    });

    return (
      <>
        <Navbar />
        <Programs></Programs>
      </>
    );
  };

export default ProgramsPage;