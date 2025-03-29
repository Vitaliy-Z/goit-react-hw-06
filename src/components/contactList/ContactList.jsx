import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList() {
  const contactsStore = useSelector((state) => state.contacts.items);
  const filterValue = useSelector((state) => state.filters.name);

  const filteredContacts = contactsStore.filter((el) =>
    el.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <ul className={styles.list}>
      {filteredContacts.map((el) => (
        <li className={styles.item} key={el.id}>
          <Contact data={el} />
        </li>
      ))}
    </ul>
  );
}
