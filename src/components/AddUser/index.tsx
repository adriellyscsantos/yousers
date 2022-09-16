import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../Button";
import * as yup from "yup";
import * as S from "./styles";
import { useAuth } from "../../context/auth";

interface IAdd {
  onSave: any;
}

interface FormData {
  nome: string;
  email: string;
  usuario: string;
  cpf: string;
  mae: string;
  nascimento: string;
  telefone: string;
  senha: string;
  confirmar: string;
  status: string;
}

const schema = yup.object({
  nome: yup.string().required("Digite o seu nome"),
  email: yup
    .string()
    .email("Digite um email válido")
    .required("Digite o seu email"),
  usuario: yup.string().required("Digite o seu usuario"),
  cpf: yup.string().required("Digite o seu cpf"),
  mae: yup.string().required("Digite o nome da sua mãe"),
  nascimento: yup.string().required("Digite a data do seu nascimento"),
  telefone: yup.string().required("Digite o seu telefone"),
  senha: yup.string().required("Uma senha senha"),
  confirmar: yup
    .string()
    .required("Digite a senha novamente")
    .oneOf([yup.ref("senha"), null], "A senha precisa ser a mesma"),
  status: yup.string().required("Digite o seu nome"),
});

const AddUser = ({ onSave }: IAdd) => {
  const {
    control,
    reset,
    handleSubmit,
    register,

    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {},
    resolver: yupResolver(schema),
  });

  const { signIn } = useAuth();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [usuario, setUsuario] = useState("");
  const [cpf, setCpf] = useState("");
  const [nascimento, setNascimento] = useState("");
  const [mae, setMae] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");
  const [status, setStatus] = useState("");

  const [checked, setChecked] = useState(true);

  const onSubmit = () => {
    const usersStorage = JSON.parse(localStorage.getItem("@users"));

    const hasUser = usersStorage?.filter((user) => user.email === email);

    if (hasUser?.length) {
      alert("Já tem uma conta com esse E-mail");
    } else {
      onSave({
        nome,
        email,
        usuario,
        cpf,
        mae,
        nascimento,
        telefone,
        status,
        senha,
      });
      signIn(email, senha);
      setNome("");
      setEmail("");
      setUsuario("");
      setCpf("");
      setNascimento("");
      setMae("");
      setTelefone("");
      setSenha("");
      setConfirmar("");
      setStatus("");
    }
  };

  return (
    <form>
      <S.Input
        {...register("nome")}
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <S.Error>{errors.nome?.message}</S.Error>
      <S.Input
        {...register("email")}
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <S.Error>{errors.email?.message}</S.Error>

      <S.Input
        {...register("cpf")}
        type="text"
        placeholder="CPF"
        value={cpf}
        onChange={(e) => setCpf(e.target.value)}
      />
      <S.Error>{errors.cpf?.message}</S.Error>
      <S.Input
        {...register("mae")}
        placeholder="Nome da mãe"
        value={mae}
        onChange={(e) => setMae(e.target.value)}
      />
      <S.Error>{errors.mae?.message}</S.Error>
      <S.Input
        {...register("nascimento")}
        type="date"
        placeholder="Data de nascimento"
        value={nascimento}
        onChange={(e) => setNascimento(e.target.value)}
      />
      <S.Error>{errors.nascimento?.message}</S.Error>
      <S.Input
        {...register("telefone")}
        placeholder="Telefone"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <S.Error>{errors.telefone?.message}</S.Error>
      <S.Input
        {...register("usuario")}
        type="text"
        placeholder="Usuario"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <S.Error>{errors.usuario?.message}</S.Error>
      <S.Input
        {...register("senha")}
        type="text"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <S.Error>{errors.senha?.message}</S.Error>
      <S.Input
        {...register("confirmar")}
        type="text"
        placeholder="Confirmar senha"
        value={confirmar}
        onChange={(e) => setConfirmar(e.target.value)}
      />
      <S.Error>{errors.confirmar?.message}</S.Error>
      <p>Usuario Ativo?</p>
      <label>
        <input
          {...register("status")}
          type="checkbox"
          onClick={() => setChecked(!checked)}
          value={checked ? "ativo" : "inativo"}
          onChange={(e) => setStatus(e.target.value)}
        />
        sim
      </label>

      <Button text="Criar" type="primary" onClick={handleSubmit(onSubmit)} />
    </form>
  );
};

export default AddUser;
