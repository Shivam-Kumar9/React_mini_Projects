import { useEffect, useState } from "react";
import User from "./user";
import "./style.css";

export default function GithubProfileFinder() {
  const [user, setUser] = useState("torvalds");
  const [loading, setLoading] = useState(false);

  const [userdata, setUserdata] = useState(null);

  useEffect(() => {
    handleSearch();
  }, []);

  async function handleSearch() {
    setLoading(true);
    try {
      const res = await fetch(`https://api.github.com/users/${user}`);
      const userdata = await res.json();
      console.log(userdata);
      setUserdata(userdata);
      setUser("");
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }

  function handleInput(e) {
    setUser(e.target.value);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="github_profile_container">
      <div className="input_wrapper">
        <input
          name="search_by_name"
          value={user || ""}
          onChange={handleInput}
          type="text"
          placeholder=" github name"
        />
      <button onClick={handleSearch}>Find</button>
      </div>
      {userdata && <User user={userdata} />}
    </div>
  );
}
