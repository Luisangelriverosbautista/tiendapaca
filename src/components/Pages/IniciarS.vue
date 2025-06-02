<template>
    <div class="login-container mt-4">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">Usuario:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
  
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
  
        <button type="submit">Ingresar</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "Login",
    data() {
      return {
        username: "",
        password: "",
        error: ""
      };
    },
    methods: {
      handleLogin() {
        if (this.username === "admin" && this.password === "1234") {
          alert("¡Inicio de sesión exitoso!");
          this.error = "";
          // Aquí podrías redirigir a otra vista, por ejemplo:
          // this.$router.push('/dashboard');
        } else {
          this.error = "Credenciales incorrectas. Intenta nuevamente.";
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background: #f5f5f5;
    border-radius: 10px;
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
  }
  
  button {
    padding: 10px 20px;
    background-color: #3490dc;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2779bd;
  }
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>
