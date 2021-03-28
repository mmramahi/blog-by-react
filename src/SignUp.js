import { useState } from "react";
import { setUser } from "./services/blogs";

const SignUp = () => {
  const [submitting, setSubmitting] = useState(false);
  const [newUserEmail, setUserEmail] = useState("");
  const [newUserPass, setUserPass] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    await setUser({ email: newUserEmail, password: newUserPass })
      .then(setSubmitting(false))
      .then(setUserEmail(""))
      .then(setUserPass(""))
      .catch((err) => console.log(err));
  };
  return (
    <>
      {submitting && <div>Submitting Form ....</div>}
      <form onSubmit={handleSubmit}>
        <h2>Sign up</h2>
        <label for="email">Email</label>
        <input
          type="text"
          name="email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={newUserEmail}
          required
        />
        <div className="email error"></div>
        <label for="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={(e) => setUserPass(e.target.value)}
          value={newUserPass}
          required
        />
        <div className="password error"></div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default SignUp;
