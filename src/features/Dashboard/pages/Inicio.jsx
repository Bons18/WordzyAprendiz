"use client";

import React from "react";
import { useAuth } from "../../auth/hooks/useAuth";

const Dashboard = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white p-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-[#1f384c] mb-4">
          WELCOME BACK, Apprentice!
        </h1>
        <p className="text-lg text-gray-600">
          Your learning dashboard is ready for you.
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
