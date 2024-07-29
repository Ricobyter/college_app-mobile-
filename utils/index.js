import React from 'react';
import { useSelector } from 'react-redux';

export const AdminOnly = ({ children }) => {
const {designation} = useSelector((state) => state.user);
  if (designation === 'Admin') {
    return <>{children}</>;
  }
  return null;
};