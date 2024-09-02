"use client";

import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);

  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>
    </div>
  );
};