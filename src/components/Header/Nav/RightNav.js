import React from 'react';
import { Link } from "react-router-dom";
import { Ul } from './styles';
import { ModalButton } from '../styles';
import { useState } from "react";
import ModalWindow from '../../ModalWindow/ModalWindow';
import LangSelector from '../LangSelector';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';

const RightNav = ({ open }) => {
  const { t } = useTranslation();

  const [modalActive, setModalActive] = useState(false);

  return (
    <>
    <Ul open={open}>
      <li><Link to="/">{t("header.link.home")}</Link></li>
      <li><Link to="/About">{t("header.link.about")}</Link></li>
      <li><Link to="/Contacts">{t("header.link.contacts")}</Link></li>
      <ModalButton className="modal-btn" onClick={() => setModalActive(true)}><p>{t("modal-form.button")}</p></ModalButton>
      <LangSelector />
      <ModalWindow active={modalActive} setActive={setModalActive}>
        <form method="POST">
          <input type="text" name="name" placeholder={t("modal-form.name")} />
          <textarea name="text" placeholder={t("modal-form.textarea")} ></textarea>
          <input type="submit" name="do_post" value={t("modal-form.submit")} />
        </form>
      </ModalWindow>
    </Ul>
    </>
  )
}

export default RightNav;