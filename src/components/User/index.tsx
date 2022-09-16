import React from "react";
import {  FaTimes } from "react-icons/fa";
import * as S from "../styles";
import Modal from "../Modal";
import Button from "../Button";

interface IUser {
  user: any;
  onDelete: Function;
  onEdit: Function;
  children?: any;
}

const User = ({ user, onDelete, onEdit, children }: IUser) => {
  return (
    <tbody>
      <S.TableItems>
        <S.TableItemLast>{user?.nome}</S.TableItemLast>
        <S.TableItemLast>{user?.usuario}</S.TableItemLast>
        <S.TableItemLast>{user?.email}</S.TableItemLast>
        <S.TableItemLast>{user?.cpf}</S.TableItemLast>
        <S.TableItemLast>{user?.nascimento}</S.TableItemLast>
        <S.TableItemLast>{user?.mae}</S.TableItemLast>
        <S.TableItemLast>{user?.telefone}</S.TableItemLast>
        <S.TableItemLast>{user?.nascimento}</S.TableItemLast>
        <S.TableItemLast>{user?.nascimento}</S.TableItemLast>
        <S.TableItemLast>{user?.status}</S.TableItemLast>
        <td>
          <Modal title="editar" buttonTitle="editar" type="edit">
            {children}
            <Button
              text="editar"
              type="primary"
              onClick={() => onEdit(user.id)}
            />
          </Modal>
        </td>
        <td>
          <FaTimes onClick={() => onDelete(user.id)} color="#fff" />
        </td>
      </S.TableItems>
    </tbody>
  );
};

export default User;
