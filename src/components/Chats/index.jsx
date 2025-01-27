import style from './style.module.css';
import { AiOutlineSearch } from 'react-icons/all';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadContacts } from '../../redux/ducks/contacts';

function Chats() {
  const contacts = useSelector(state => state.contacts.items);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(loadContacts())
  }, [])


  return (
    <div className={style.chats}>
      <div className={style.search}>
        <div className="icon">
          <AiOutlineSearch />
        </div>
        <input type="text"
               placeholder="Search contact"
        />
      </div>
      {contacts.map((contact) => {
        return <div className={style.contact}>
          <div className={style.fullName}>{contact.fullname}</div>
        </div>
      })}

    </div>
  );
}

export default Chats;
