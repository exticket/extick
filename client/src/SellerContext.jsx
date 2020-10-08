import React, { useEffect } from 'react';
import url from './apis/backend-url';

const SellerContext = React.createContext({
  seller: undefined,
  recheck: () => { }
});

export default SellerContext;
export { SellerContext };

export function useSellerSingleton() {
  const [seller, setSeller] = React.useState(undefined);

  useEffect(() => {
    updateSellerStatus();
  }, [])

  async function updateSellerStatus() {
    const resp = await fetch(`${url}/authentication/me`);

    if (resp.ok) {
      const sellerFromServer = await resp.json();
      setSeller(sellerFromServer.user);
    } else {
      setSeller(null);
    }

  }

  return {
    recheck() {
      return updateSellerStatus();
    },
    seller
  };
}

export function useSeller() {
  return React.useContext(SellerContext);
}
