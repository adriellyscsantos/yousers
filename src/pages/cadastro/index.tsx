import React from "react";
import type { NextPage } from "next";
import AddUser from "../../components/AddUser";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/router";
import * as S from "./styles";

const Cadastro: NextPage = () => {
  const { push } = useRouter();
  const [users, setUsers] = React.useState([]); // UserState

  const addUser = (user: any) => {
    const id = uuidv4();
    const newUser = { id, ...user };

    setUsers([...users, newUser]);
    localStorage.setItem("@users", JSON.stringify([...users, newUser]));
    push("/home");
  };

  React.useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem("@users"));
    if (getUsers == null) {
      setUsers([]);
    } else {
      setUsers(getUsers);
    }
  }, []);
  return (
    <S.Container>
      <S.FormWrapper>
        <S.ContainerWrapper>
          <div>
            <div>
              <S.TitleLogin>Crie seu usuário!</S.TitleLogin>
            </div>
            <AddUser onSave={addUser} />
          </div>
        </S.ContainerWrapper>
      </S.FormWrapper>

      <S.ImageWrapper>
        <div>
          <div>
            <S.Title>Bem vindo(a) ao Yousers!</S.Title>
          </div>
          <div>
            <S.Image src="assets/icon-login.svg" />
          </div>
        </div>
      </S.ImageWrapper>
    </S.Container>
  );
};

export default Cadastro;
