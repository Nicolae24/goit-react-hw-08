import s from "./Contact.module.css";
import { VscAccount, VscCallIncoming } from "react-icons/vsc";
import { useDispatch } from "react-redux";

import { deleteContacts } from "../../../redux/contactsOps";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactItem}>
      <div className={s.iconColumn}>
        <VscAccount className={`${s.contactIcon} ${s.accountIcon}`} />
        <VscCallIncoming className={`${s.contactIcon} ${s.callIcon}`} />
      </div>
      <div className={s.contactInfo}>
        <span className={s.contactName}>{name}</span>
        <span className={s.contactNumber}>{number}</span>
      </div>
      <button
        className={s.deleteButton}
        type="button"
        onClick={() => dispatch(deleteContacts(id))}
        aria-label={`Delete contact ${name}`}
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
