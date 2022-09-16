import React, { createContext, useState, useEffect, useContext } from "react";
import{ useRouter } from "next/router";

interface User {
  usuario: string;
  senha: string;
}

interface AuthContextData {
  signed: boolean;
  userCredentials: User | null;
  loading: boolean;
  signIn(credentials: User): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {
  const [userCredentials, setUserCredentials] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    async function loadLocalStorage() {
      const userToken = localStorage.getItem("@token");
      const usersStorage = localStorage.getItem("@users");
  
      if (userToken && usersStorage) {
        const hasUser = JSON.parse(usersStorage)?.filter(
          (user) => user.email === JSON.parse(userToken).email
        );
  
        if (hasUser) setUserCredentials(hasUser[0]);
      }

    }
    loadLocalStorage();
  }, []);

  async function signIn(email: string, senha: string) {

    const usersData = JSON.parse(localStorage.getItem("@users"));

    const hasUserData = usersData?.filter((user) => user.email === email);

    if (hasUserData?.length) {
      if (hasUserData[0].email === email && hasUserData[0].senha=== senha) {
        const token = 'jfg0df0d5f1s0d02s2d1s5d0s21sda56d0asa651da0sad51';
        localStorage.setItem("@token", JSON.stringify({ email, token }));
        setUserCredentials({ email, senha });
        return push('/home');
      } else {
        alert( "E-mail ou senha incorretos");
      }
    } else {
      alert( "Usuário não cadastrado");
    }
  }

  async function signOut() {
    // await localStorage.clear();
    await localStorage.removeItem("@token");
    setUserCredentials(null);
    push("/");
  }

  return (
    <AuthContext.Provider
      value={{ signed: !!userCredentials, userCredentials, loading, signIn, signOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}

export { AuthProvider, useAuth };
