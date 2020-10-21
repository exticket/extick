import React from 'react';
import Login from '../components/Login';
import { useLocation } from "react-router-dom";

export default function LoginPage() {
  return (
    <div>
      <Login location={useLocation()}/>
    </div>
  )
}
