import { TextField } from "@mui/material";

function LoginForm() {
  return (
    <div>
      <h1>Login</h1>
      <label>Email:</label>
      <br />
      <TextField id="standard-basic" label="Standard" variant="standard" />
    </div>
  );
}

export default LoginForm;
