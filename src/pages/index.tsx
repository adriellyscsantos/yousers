import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { useAuth } from "../context/auth";
import Button from "../components/Button";
import * as S from "./styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface FormData {
  email: string;
  senha: string;
}

const schema = yup.object({
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite o seu email"),

  senha: yup.string().required("Digite a sua senha"),
});

const Login: NextPage = () => {
  const { signIn } = useAuth();

  const {
    register,

    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function handleSign() {
    if (!email || !senha) {
      return alert("Digite o seu email e senha!");
    }
    signIn(email, senha);
  }

  return (
    <S.Container>
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
      <S.FormWrapper>
        <S.FormBlock>
          <div>
            <S.TitleLogin>Faça o seu Login!</S.TitleLogin>
          </div>

          <S.Input
            {...register("email")}
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <S.Error>{errors.email?.message}</S.Error>
          <S.Input
            {...register("senha")}
            type="text"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <S.Error>{errors.senha?.message}</S.Error>
          <Button text="Entrar" type="primary" onClick={handleSign} />
          <Link href="/cadastro">
            <a className="btn__criarconta">Criar conta</a>
          </Link>
        </S.FormBlock>
      </S.FormWrapper>
    </S.Container>
  );
};

export default Login;
