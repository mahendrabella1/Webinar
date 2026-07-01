import { createContext, useContext, ReactNode } from 'react';

// The enquiry form is now always visible in the Hero section (above the fold).
// Any CTA that previously opened the modal now scrolls to that form instead.
// This removes the modal overlay, improving performance and reducing cognitive load.

interface RegistrationContextType {
  openForm: (ctaName: string) => void;
  closeForm: () => void;
  isFormOpen: boolean;
  ctaName: string;
}

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

function scrollToForm() {
  const el = document.getElementById('enquiry-form');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

export function RegistrationProvider({ children }: { children: ReactNode }) {
  // openForm now scrolls to the above-fold enquiry form instead of opening a modal.
  // ctaName is kept for backward-compat with existing components.
  const openForm = (_ctaName: string) => {
    scrollToForm();
  };

  const closeForm = () => {
    // No-op — modal no longer used
  };

  return (
    <RegistrationContext.Provider
      value={{ openForm, closeForm, isFormOpen: false, ctaName: 'Secure My Seat' }}
    >
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
