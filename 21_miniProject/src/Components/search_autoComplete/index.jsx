import { useEffect, useState } from "react";
import "./style.css";
import Suggest from "./suggest";

export default function SearchAutoComplete() {
  const [inputQuery, setInputQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const [filterdUsers, setFilteredUsers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  function handleQuery(e) {
    let query = e.target.value.toLowerCase();
    setInputQuery(query);
    if (query.length > 1) { //  jab 2 se zyada letter type ho jaye tabhi search kare
      let filtered =
        users && users.length
          ? users.filter((user) => user.toLowerCase().indexOf(query) > -1) //  indexof  'sexuence wise  ek pure string or array me  serial wise jo find karna ha wo search karta ha ' (mila to  index  nahi to  -1) /// > -1  ye true false validate karne lia ha
          : [];
      setFilteredUsers(filtered);
      setShowDropdown(true);
      console.log(users);
      console.log(filtered);
    } else setShowDropdown(false);
  }

  async function fetchAPI() {
    setLoading(true);
    try {
      let res = await fetch("https://dummyjson.com/users");
      let data = await res.json();

      if (data && data.users && data.users.length) {
        setUsers(data.users.map((list) => list.firstName));
      }
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div>
      {/* <p>{JSON.stringify(users)}</p> */}
      {
        loading ? <p>Loading...</p> :  <input
        type="text"
        value={inputQuery}
        onChange={handleQuery}
        name=""
        id=""
        placeholder="Search User by name..."
      />
      }
     
      {showDropdown && <Suggest data={filterdUsers} setSuggest={setInputQuery} setDropdown={setShowDropdown}/>}
    </div>
  );
}

