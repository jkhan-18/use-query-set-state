import { useState, useEffect } from "react";

const useQuerySetState = () => {

  const [searchParams, setSearchParams] = useState(new URLSearchParams(window.location.search));

  useEffect(() => {
    const handlePopState = () => {
      setSearchParams(new URLSearchParams(window.location.search));
    }

    // Listen for changes in the nrowser history
    window.addEventListener('popstate', handlePopState);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('popstate', handlePopState);
    }
  }, []);

  const updateSearchParams = (newParams) => {
    const mergedParams = new searchParams(searchParams.toString());

    // Update or add new parameters
    for (const [key, value] of Object.entries(newParams)) {
      mergedParams.set(key, value);
    }

    // Replace the current URL without triggering a page reload
    const newUrl = `${window.location.pathname}?${mergedParams.toString()}`;
    window.history.replaceState({ path: newUrl }, '', newUrl );

    // Update the state with the new search parameters
    setSearchParams(mergedParams);
  };

  return [searchParams, updateSearchParams];
}

export default useQuerySetState;
