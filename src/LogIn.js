import { useState } from "react";

const LogIn = () => {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };
  return (
    <>
      {submitting && <div>Submitting Form ....</div>}
      <form onSubmit={handleSubmit}>
        <h2>Log in</h2>
        <label for="email">Email</label>
        <input type="text" name="email" required />
        <div className="email error"></div>
        <label for="password">Password</label>
        <input type="password" name="password" required />
        <div className="password error"></div>
        <button type="submit">Log in</button>
      </form>
    </>
  );
};

export default LogIn;
