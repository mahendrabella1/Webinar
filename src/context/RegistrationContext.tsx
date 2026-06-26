import { createContext, useContext, ReactNode } from 'react';
import { initiatePayment } from '../utils/payment';

interface RegistrationContextType {
  openForm: (ctaName: string) => void;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const openForm = (name: string) => {
    initiatePayment(name);
  };

  return (
    <RegistrationContext.Provider value={{ openForm }}>
      {children}
    </RegistrationContext.Provider>
  );
}

export function useRegistration() {
  const context = useContext(RegistrationContext);
  if (!context) {
    throw new Error('useRegistration must be used within RegistrationProvider');
  }
  return context;
}
