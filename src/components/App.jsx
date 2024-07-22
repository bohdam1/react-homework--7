
import { FormBook } from './form/Form';
import { ContactsList } from './ContactsList/ContactsList';
import  Filter  from "./Filter/Filter";


export const App = () => {

  return (
    <div>
      <h1>Phonebook</h1>
      <FormBook />
      <h2>Contacts</h2>
      <Filter  />
      <ContactsList  />
    </div>
  );

}
