import React from 'react';
import { Link } from "react-router-dom";
import { Ul } from './styles';
import { ModalButton } from '../styles';
import { useState } from "react";
import ModalWindow from '../../ModalWindow/ModalWindow';
import LangSelector from '../LangSelector';

const RightNav = ({ open }) => {
  const [modalActive, setModalActive] = useState(false);
  return (
    <>
    <Ul open={open}>
      <li><Link to="/">Головна</Link></li>
      <li><Link to="/About">Про мене</Link></li>
      <li><Link to="/Contacts">Контакти</Link></li>
      <ModalButton className="modal-btn" onClick={() => setModalActive(true)}><p>Написати мені</p></ModalButton>
      <LangSelector />
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <form method="POST">
          <input type="text" name="name" placeholder="name" />
          <input type="text" name="nickname" placeholder="nickname" />
          <input type="text" name="email" placeholder="email" />
          <textarea name="text" placeholder="text comment" ></textarea>
          <input type="submit" name="do_post" value="add comment" />
        </form>
      </ModalWindow>
    </Ul>
    </>
  )
}

export default RightNav;