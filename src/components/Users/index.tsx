import User from "../User";
import * as S from "../styles";

interface IUsers {
  users: any;
  onDelete: Function;
  onEdit: Function;
  children?: any;
}

const Users = ({ users, onDelete, onEdit, children }: IUsers) => {
  return (
    <S.Table id="tableExcel">
      <thead>
        <S.FirstTableItems>
          <S.TableItem>Nome</S.TableItem>
          <S.TableItem>Login</S.TableItem>
          <S.TableItem>Email</S.TableItem>
          <S.TableItem>CPF</S.TableItem>
          <S.TableItem>Nascimento</S.TableItem>
          <S.TableItem>Nome da mãe</S.TableItem>
          <S.TableItem>Telefone</S.TableItem>
          <S.TableItem>Dt Inclusão</S.TableItem>
          <S.TableItem>Dt Alteração</S.TableItem>
          <S.TableItem>Status</S.TableItem>
          <S.TableItem>Ações</S.TableItem>
        </S.FirstTableItems>
      </thead>
      {users.map((user: any) => (
        <User key={user.id} user={user} onDelete={onDelete} onEdit={onEdit}>
          {children}
        </User>
      ))}
    </S.Table>
  );
};

export default Users;
