import React from 'react';
import url from './apis/backend-url';

const SellerContext = React.createContext({
  seller: undefined,
  recheck: () => {}
});

export default SellerContext;
export { SellerContext };

export function useSellerSingleton() {
  const [seller, setSeller] = React.useState(undefined);
  const [forceUpdate, setForceUpdate] = React.useState(0);

  React.useEffect(() => {
    // this is here to show that use effect need to run when forceUpdate change
    forceUpdate.toString();
    fetch(`${url}/authentication/me`)
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((sellerFromServer) => {
            setSeller(sellerFromServer.user);
          });
        } else {
          setSeller(null);
        }
      });
  }, [forceUpdate]);

  return {
    recheck() {
      setForceUpdate((v) => v + 1);
    },
    logOut() {
      setSeller(null);
    },
    seller
  };
}

export function useSeller() {
  return React.useContext(SellerContext);
}
