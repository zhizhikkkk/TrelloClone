import React from "react";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-green-200">
      <h1 className="text-4xl font-bold mb-4">Profile Page</h1>
      <Link to="/">
        <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Profile;
