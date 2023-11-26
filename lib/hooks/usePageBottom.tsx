import React, { useEffect, useState } from 'react';

const usePageBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.scrollHeight;

    // Check if the user has scrolled to the bottom
    if (windowHeight + scrollTop >= fullHeight) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Adding an empty dependency array to ensure the effect runs only once

  return isBottom;
};

export default usePageBottom;
