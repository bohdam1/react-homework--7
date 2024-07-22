import React, { useEffect } from "react";
import css from "./contactlist.module.css";
import { useSelector, useDispatch } from "react-redux";

import { fetchContactsThunk,deleteContactsThunk} from "../../redux/Contact/thunk"

export const ContactsList = () => {
    const dispatch = useDispatch();
    const contacts = useSelector((state) => state.contacts.items);
    
    const filter = useSelector((state) => state.filter.filter); // Отримуємо фільтр з Redux
   

    useEffect(() => {
        dispatch(fetchContactsThunk())
    },[dispatch])
    // Фільтруємо контакти за значенням фільтра
    const filteredContacts = contacts && contacts.length > 0
    ? contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
    )
    : [];

    const handleDelete = (id) => {
        dispatch(deleteContactsThunk(id));
    };
 
    
    return (
        <ul className={css.contact_list}>
            {filteredContacts.map(({ id, name, phone }) => (
                <li key={id} className={css.contact_item}>
                    {name}: {phone}
                    <button onClick={() => handleDelete(id)} className={css.button_close}>
                        x
                    </button>
                </li>
            ))}
        </ul>
    );
};
