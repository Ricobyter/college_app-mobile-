import React from 'react';
import { useSelector } from 'react-redux';

export const AdminOnly = ({ children }) => {
const {designation, uid} = useSelector((state) => state.user);
  if (designation === 'Admin') {
    return <>{children}</>;
  }
  return null;
};



export const PermissionOnly = ({ children }) => {
  const { designation } = useSelector((state) => state.user);

  if (["Professor", "Visiting Faculty", "Assistant Professor", "Admin"].includes(designation)) {
    return <>{children}</>;
  }

  return null;
};

export const LoginOnly = ({ children }) => {
  const { uid } = useSelector((state) => state.user);

  if (uid) {
    return <>{children}</>;
  }

  return null;
};
