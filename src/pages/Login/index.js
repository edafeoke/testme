import React from "react";

const Login = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.span}>
        Test<span style={styles.title}>Me</span>
      </h1>
      <div style={styles.card}>
        <form style={styles.form}>
          <h4 style={styles.label}>Email:</h4>
          <input required style={styles.textBox} type="email" />

          <h4 style={styles.label}>Password:</h4>
          <input required style={styles.textBox} type="password" />

          <input style={styles.button} type="submit" value='Login' />
        </form>
      </div>
    </div>
  );
};

export default Login;

const styles = {
  container: {
    display: "flex",
    flex: 1,
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    borderRadius: 5,
    backgroundColor: "#fff",
    boxShadow: "3px 3px 15px #999",
    padding: 25,
    margin: 15,
    maxWidth: 400,
    width: "50%",
  },
  form: {
    width: "100%",
    display:'flex',
    flexDirection:'column',
  },
  title: {
    color: "#484848",
    fontSize: "2.5rem",
    cursor: "pointer",
    textDecoration: "none",
  },
  span: {
    marginLeft: 10,
    color: "#FF5A5F",
    fontSize: "3rem",
    textDecoration: "none",
    margin: 10,
    marginTop: 20,
    fontFamily:'Courier'
  },
  label: {
    marginBottom: 5,
    color:'#777',
  },
  textBox: {
    marginBottom: 15,
    padding: 7,
    maxWidth: '100%',
    borderRadius: 5,
    borderWidth:.1,
    borderColor:'#ccc',
    outlineColor:'#ff5a5f',
  },
  button: {
    backgroundColor: "#ff5a5f",
    color: "#fff",
    fontWeight: "bold",
    borderRadius: 5,
    padding: 8,
    borderWidth: 0,
  },
};
