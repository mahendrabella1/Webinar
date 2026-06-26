import { createContext, useContext, ReactNode, useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';

interface RegistrationContextType {
  openForm: (ctaName: string) => void;
  closeForm: () => void;
  isFormOpen: boolean;
  ctaName: string;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export function RegistrationProvider({ children }: { children: ReactNode }) {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [ctaName, setCtaName] = useState('Secure My Seat');

  const openForm = (name: string) => {
    setCtaName(name);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
  };

  return (
    <RegistrationContext.Provider value={{ openForm, closeForm, isFormOpen, ctaName }}>
      {children}
      <RegistrationForm isOpen={isFormOpen} onClose={closeForm} ctaName={ctaName} />
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
