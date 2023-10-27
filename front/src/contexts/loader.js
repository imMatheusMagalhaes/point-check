import { createContext, useContext, useState } from "react";
import Loader from "../components/Loader";
const LoaderContext = createContext({});

function LoaderProvider({ children }) {
  const [loading, set_loading] = useState(false);

  function show_loader() {
    set_loading(true)
  }

  function hide_loader() {
    set_loading(false)
  }

  return <LoaderContext.Provider value={{ loading, show_loader, hide_loader, }}>
    {loading ? <Loader /> :  children }
  </LoaderContext.Provider>
}

function useLoader() {
  const context = useContext(LoaderContext);
  if (!context)
    throw new Error('useAuth must be used within an LoaderProvider.');
  return context;
}

export { LoaderProvider, useLoader };