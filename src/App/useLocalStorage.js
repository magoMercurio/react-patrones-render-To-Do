import React from 'react';

function useLocalStorage(itemName, initialValue) {
  const [sincronizeditem, setSincronizeditem] = React.useState(true)
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  
  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
        
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizeditem(true)
      } catch(error) {
        setError(error);
      }
    }, 3000);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sincronizeditem]);
  
  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifiedItem);
      setItem(newItem);
    } catch(error) {
      setError(error);
    }
  };

  const sincronize = () => {
    setLoading(true);
    setSincronizeditem(false);
  }

  return {
    item,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
