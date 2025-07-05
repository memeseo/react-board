import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import type { UserRole, UserInfo } from "../types/board";

export const signUp = async (
  email: string,
  password: string,
  role: UserRole
): Promise<void> => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      role: role
    });

    alert("회원가입이 완료되었습니다.");
  } catch (error: any) {
    console.error("❌ 회원가입 실패:", error.message);
    alert('이메일 형식 또는 인터넷 연결 상태를 확인해주세요.');
    throw error;
  }
};

export const logIn = async (
  email: string,
  password: string
): Promise<UserInfo> => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    const userDoc = await getDoc(doc(db, "users", user.uid));

    if (!userDoc.exists()) {
      throw new Error("사용자 역할 정보 없음");
    }

    const userInfo = userDoc.data() as UserInfo;
    return userInfo;
  } catch (error: any) {
    alert('로그인에 실패하였습니다.')
    console.error("❌ 로그인 실패:", error.message);
    throw error;
  }
};

export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    alert("로그아웃이 완료되었습니다.");
    
  } catch (error: any) {
    console.error("❌ 로그아웃 실패:", error.message);
    throw error;
  }
};
