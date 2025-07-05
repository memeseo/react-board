import { onAuthStateChanged } from "firebase/auth";
import type { User } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase";
import type { AuthUserContextType } from "../types/board";
import { getDoc, doc } from "firebase/firestore";
import type { UserRole } from '../types/board';

const AuthUserContext = createContext<AuthUserContextType | undefined>(
  undefined
);

export const AuthUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser({
        uid: firebaseUser?.uid,
        email: firebaseUser?.email ?? "",
        role: "",
      });

      if (!firebaseUser) return;

      const docRef = doc(db, "users", firebaseUser.uid);
      const userSnap = await getDoc(docRef);

      if (userSnap.exists()) {
        const role = userSnap.data().role as UserRole;

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          role,
        });
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthUserContext.Provider value={{ user }}>
      {children}
    </AuthUserContext.Provider>
  );
};

export const useAuthUser = () => {
  const context = useContext(AuthUserContext);
  if (!context) throw new Error("login state error");
  return context;
};
