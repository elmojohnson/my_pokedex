import React from "react";

const PokemonItemLoading = () => {
  return (
    <div className="bg-white shadow rounded p-4 flex items-center space-x-4">
      <div className="bg-gray-200 h-6 w-16 animate-pulse rounded" />
      <div className="bg-gray-200 h-6 w-full animate-pulse rounded" />
    </div>
  );
};

export default PokemonItemLoading;
