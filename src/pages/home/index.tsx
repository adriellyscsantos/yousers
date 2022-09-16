import React, { useState, useEffect, useRef } from "react";
import { renderToString } from "react-dom/server";
import { useForm } from "react-hook-form";
import type { NextPage } from "next";
import { useAuth } from "../../context/auth";
import * as S from "./styles";
import { v4 as uuidv4 } from "uuid";
import AddUser from "../../components/AddUser";
import Users from "../../components/Users";
import Modal from "../../components/Modal";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { jsPDF } from "jspdf";

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
  nome: yup.string(),
  email: yup.string().email("Digite um email válido"),
  usuario: yup.string(),
  cpf: yup.string(),
  mae: yup.string(),
  nascimento: yup.string(),
  telefone: yup.string(),
  senha: yup.string(),
  confirmar: yup
    .string()
    .oneOf([yup.ref("senha"), null], "A senha precisa ser a mesma"),
  status: yup.string(),
});

const Home: NextPage = () => {
  const { userCredentials, signOut, signed } = useAuth(); //Context data

  const [loading, setloading] = useState(true);
  const [checked, setChecked] = useState(true);

  const [users, setUsers] = useState([]); // Users state

  const [search, setSearch] = useState(""); // Search state
  const [userFilter, setUserFilter] = useState([]); // Search state



  //edit users data
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

  // Pagination
  const [itensPerPage, setItensPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(0);
  const pages = Math.ceil(users.length / itensPerPage);
  const startIndex = currentPage * itensPerPage;
  const endIndex = startIndex + itensPerPage;
  const currentItens = userFilter.slice(startIndex, endIndex);

  const {
    register,

    formState: { isValid, errors },
  } = useForm<FormData>({
    mode: "onChange",
    resolver: yupResolver(schema),
    reValidateMode: 'onChange',
    defaultValues: {},
  });

  function handleSignOut() {
    signOut();
  }

  const exportToPdf = () => {
    var doc = new jsPDF("p", "pt");

    doc.html(document.body, {
      callback: function (doc) {
        doc.save("arquivo.pdf");
      },
      x: 0,
      y: 0,
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1000);
    setUserFilter(
      users.filter((item) => {
        return (
          item?.nome?.includes(search) ||
          item?.login?.includes(search) ||
          item?.email?.includes(search) ||
          item?.cpf?.includes(search) ||
          item?.nascimento?.includes(search) ||
          item?.telefone?.includes(search) ||
          item?.mae?.includes(search)
        );
      })
    );
    // console.log(userFilter, "filtro aq");
    
  }, [search, users]);

  const addUser = (user) => {
    const id = uuidv4();
    const newUser = { id, ...user };

    setUsers([...users, newUser]);
    localStorage.setItem("@users", JSON.stringify([...users, newUser]));
  };

  const deleteUser = (id: any) => {
    const deleteUser = users.filter((user) => user.id !== id);

    setUsers(deleteUser);

    localStorage.setItem("@users", JSON.stringify(deleteUser));
  };

  const editUser = (id: any) => {
    let data = JSON.parse(localStorage.getItem("@users"));
   

    const myData = data.map((item) => {
      if (item?.id === id) {
        // console.log(id)
        // console.log(item.id)
        // console.log(nome, 'nome')
        console.log("aq");

        return {
          ...item,
          nome: !nome ? item.nome : nome ,
          email: !email ? item.email : email,
          usuario:!usuario ? item.usuario : usuario,
          cpf: !cpf ? item.cpf : cpf,
          mae: !mae ? item.mae : mae,
          nascimento: !nascimento ? item.nascimento : nascimento,
          telefone: !telefone ? item.telefone : telefone,
          senha: !senha ? item.senha : senha,
          status: !status ? item.status : status,
          id: item.id,
        };
      }
      return item;
    });


    localStorage.setItem("@users", JSON.stringify(myData));
    window.location.reload();
  };

  useEffect(() => {
    const getUsers = JSON.parse(localStorage.getItem("@users"));
    if (getUsers == null) {
      setUsers([]);
    } else {
      setUsers(getUsers);
    }
  }, [nome]);
 

  return (
    <S.Container>
      <S.Box>
        <S.Box>
        </S.Box>
        <S.Wrapper>
          <S.SignOut onClick={handleSignOut}>Sair</S.SignOut>
          <S.ContainerTitle>
            
            <S.Title>
              Oi, {userCredentials?.email}! <br /> Aqui estão todos os usuários do
              sistema.
            </S.Title>
            <S.ContainerButton>
              <Modal title="Novo usuário" buttonTitle="Novo usuário">
                <AddUser onSave={addUser} />{" "}
              </Modal>
            </S.ContainerButton>
          </S.ContainerTitle>

          {loading ? (
            <span>Carregando...</span>
          ) : (
            <S.Box>
              <S.WrapperSearch>
                <S.ContainerSearch>
                  <S.InputSearch
                    type="text"
                    placeholder="Buscar por..."
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                  />
                </S.ContainerSearch>
                <S.UsersSignUp>
                  Total de usuários cadastrados: {users.length}
                </S.UsersSignUp>
                <S.WrapperExport>
                  <ReactHTMLTableToExcel
                    className="export"
                    table="tableExcel"
                    filename="exportado"
                    buttonText="Gerar Excel"
                    sheet="pagina 1"
                  />
                  <button onClick={exportToPdf} className="export">
                    Gerar PDF
                  </button>
                </S.WrapperExport>
              </S.WrapperSearch>
              {search && (
                <S.Box>
                  <S.Result>
                    Resultados para:
                    <i>
                      <b>{search}</b>
                    </i>
                  </S.Result>
                </S.Box>
              )}
              
              {currentItens.length > 0 ? (
                <Users
                  users={currentItens}
                  onDelete={deleteUser}
                  onEdit={editUser}
                >
                  <S.Input
                    {...register("nome")}
                    type="text"
                    placeholder="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    defaultValue={users.nome}
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
                </Users>
              ) : (
                "Sem usuários cadastrados :("
              )}
            </S.Box>
          )}

          <S.WrapperPagination>
            {Array.from(Array(pages), (item, index) => {
              return (
                <S.Pagination
                  style={
                    index === currentPage
                      ? { backgroundColor: "#2F295B", color: "#fff" }
                      : { backgroundColor: "transparent", color: "#fff" }
                  }
                  key={index}
                  value={index}
                  onClick={(e) => setCurrentPage(Number(e.target.value))}
                >
                  {index + 1}
                </S.Pagination>
              );
            })}
          </S.WrapperPagination>
        </S.Wrapper>
      </S.Box>
    </S.Container>
  );
};

export default Home;
