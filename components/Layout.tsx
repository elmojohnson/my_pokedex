import PokedexContext from "@/contexts/PokedexContext";
import usePokedex from "@/hooks/usePokedex";
import React from "react";
import Navbar from "./Navbar";

interface LayoutProps {
  children: any;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const pokedex = usePokedex();

  return (
    <PokedexContext.Provider value={pokedex}>
      <div>
        <Navbar />
        <main className="wrapper py-3">{children}</main>
      </div>
    </PokedexContext.Provider>
  );
};

export default Layout;
