
import { createContext, useContext, useState } from "react";
import type {AuthModalContextType, ModalType} from '../types/board';

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export const AuthModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const openLogin = () => setOpenModal("login");
  const openSignup = () => setOpenModal("signup");
  const closeModal = () => setOpenModal(null);
  
  return (
    <AuthModalContext.Provider value={{ openModal, openLogin, openSignup, closeModal }}>
      {children}
    </AuthModalContext.Provider>
  );
};

export const useAuthModal = () => {
  const context = useContext(AuthModalContext);
  if (!context) throw new Error("modal error");
  return context;
};