
import { createContext, useContext, useState } from "react";

type ModalType = "login" | "signup" | null;

interface AuthModalContextType {
  openModal: ModalType;
  openLogin: () => void;
  openSignup: () => void;
  closeModal: () => void;
}

const AuthModalContext = createContext<AuthModalContextType | undefined>(undefined);

export const AuthModalProvider = ({ children }: { children: React.ReactNode }) => {
  const [openModal, setOpenModal] = useState<ModalType>(null);

  const openLogin = () => setOpenModal("login");
  const openSignup = () => {
    console.log('응답해라')
    setOpenModal("signup");
  }
  const closeModal = () => {
    setOpenModal(null);

  }
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