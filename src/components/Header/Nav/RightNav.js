import React, { useRef, useState } from 'react';
import { NavLink } from "react-router-dom";
import { Ul } from './styles';
import { ModalButton } from '../styles';
import ModalWindow from '../../ModalWindow/ModalWindow';
import emailjs from 'emailjs-com';
import LangSelector from '../LangSelector';
import { useTranslation } from "react-i18next";
import '../../../assets/i18n';

const RightNav = ({ open }) => {
  const { t } = useTranslation();

  const [modalActive, setModalActive] = useState(false);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_4bo6iou', form.current, 'user_tr68b8kir6s34pLp7jpEU')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset();
    alert(`${t("modal-form.send")}`);
  };

  return (
    <>
      <Ul open={open}>
        <li><NavLink exact to="/">{t("header.link.home")}</NavLink></li>
        <li><NavLink to="/About">{t("header.link.about")}</NavLink></li>
        <li><NavLink to="/Contacts">{t("header.link.contacts")}</NavLink></li>
        <ModalButton className="modal-btn" onClick={() => setModalActive(true)}><p>{t("modal-form.button")}</p></ModalButton>
        <LangSelector />
        <ModalWindow active={modalActive} setActive={setModalActive}>
          <div className="g-recaptcha" data-sitekey="6LdjckIbAAAAAP-hzKk0cLlB93ziFs7uqZzETZYm"></div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder={t("modal-form.name")} required />
            <textarea name="message" placeholder={t("modal-form.textarea")} required></textarea>
            <input type="submit" value={t("modal-form.submit")} style={{ background: '#181818', color: '#fff', border: 'none', padding: '5px', cursor: 'pointer' }} />
          </form>
        </ModalWindow>
      </Ul>
    </>
  )
}

export default RightNav;