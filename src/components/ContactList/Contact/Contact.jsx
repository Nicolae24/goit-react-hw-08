import s from "./Contact.module.css";
import { VscAccount, VscCallIncoming } from "react-icons/vsc";
import { useDispatch } from "react-redux";
import { GiBroadsword } from "react-icons/gi";
import { deleteContacts } from "../../../redux/contacts/operations";

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    // <li className={s.contactItem}>
    //   <div className={s.iconColumn}>
    //     <VscAccount className={`${s.contactIcon} ${s.accountIcon}`} />
    //     <VscCallIncoming className={`${s.contactIcon} ${s.callIcon}`} />
    //   </div>
    //   <div className={s.contactInfo}>
    //     <span className={s.contactName}>{name}</span>
    //     <span className={s.contactNumber}>{number}</span>
    //   </div>
    //   <button
    //     className={s.deleteButton}
    //     type="button"
    //     onClick={() => dispatch(deleteContacts(id))}
    //     aria-label={`Delete contact ${name}`}
    //   >
    //     Delete
    //   </button>
    // </li>
    <li className={s.contactItem}>
      <div className={s.contactInfo}>
        <span className={s.contactName}>{name}</span>
        <span className={s.contactNumber}>{number}</span>
      </div>
      <button
        className={s.deleteButton}
        onClick={() => dispatch(deleteContacts(id))}
      >
        <GiBroadsword className={s.swordIcon} />
        Delete
      </button>
    </li>
  );
};

export default Contact;
