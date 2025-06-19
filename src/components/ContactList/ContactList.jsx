import { useSelector } from "react-redux";
// import { useMemo } from "react";
// import { useDebounce } from "use-debounce";
import s from "./ContactList.module.css";
import Contact from "./Contact/Contact";
// import { selectFilter, selectContacts } from "../../redux/selectors";
import { selectFilteredContacts } from "../../redux/selectors";

const ContactList = () => {
  // const contacts = useSelector(selectContacts);
  // const filter = useSelector(selectFilter);

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={s.contactList}>
      {filteredContacts.map(({ id, name, number }) => (
        <Contact key={id} id={id} name={name} number={number} />
      ))}
    </ul>
  );
};

export default ContactList;
