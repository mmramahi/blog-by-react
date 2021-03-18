import { useState } from "react";

const SignUp = () => {
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
        <h2>Sign up</h2>
        <label for="email">Email</label>
        <input type="text" name="email" required />
        <div className="email error"></div>
        <label for="password">Password</label>
        <input type="password" name="password" required />
        <div className="password error"></div>
        <button type="submit">Sign up</button>
      </form>
    </>
  );
};

export default SignUp;
