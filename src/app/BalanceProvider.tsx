import { createContext, useContext, ReactNode } from "react";
import { useAccount, useBalance } from "wagmi";

// Create a context for balance data
const BalanceContext = createContext<any>(null);

// Provider component to fetch and provide balance data
export const BalanceProvider = ({ children }: { children: ReactNode }) => {
  const { address, chain } = useAccount();
  const { data: balanceData } = useBalance({
    address,
    chainId: chain?.id,
  });

  return (
    <BalanceContext.Provider value={balanceData}>
      {children}
    </BalanceContext.Provider>
  );
};

// Custom hook to access the balance data
export const useBalanceData = () => {
  return useContext(BalanceContext);
};
