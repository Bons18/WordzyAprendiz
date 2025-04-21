// Simulación de un servicio de autenticación
// En un entorno real, esto haría llamadas a una API

export const loginUser = async (credentials) => {
  // Simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Basic validation
  if (!credentials.email || !credentials.password) {
    throw new Error("Todos los campos son requeridos")
  }

  // Email validation (updated to allow soy.sena.edu.co domain)
  const emailRegex = /^[a-zA-Z0-9]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(credentials.email)) {
    throw new Error("Formato de email inválido")
  }

  // Check for specific admin credentials
  if (
    credentials.email === "aprendiz@soy.sena.edu.co" &&
    credentials.password === "aprendiz000"
  ) {
    return {
      id: "1",
      name: "Admin",
      email: credentials.email,
      role: "admin"
    }
  }

  // Allow login with soy.sena.edu.co domain
  if (credentials.email.endsWith("@soy.sena.edu.co") && credentials.password.length >= 4) {
    return {
      id: "2",
      name: "Usuario SENA",
      email: credentials.email,
      role: "student"
    }
  }

  throw new Error("Correo o contraseña invalidos")
}

export const registerUser = async (userData) => {
  // Simulamos un retraso de red
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Validación básica
  if (!userData.email || !userData.password || !userData.name) {
    throw new Error("Todos los campos son requeridos")
  }

  // Simulación de registro exitoso
  return {
    id: Math.floor(Math.random() * 1000).toString(),
    name: userData.name,
    email: userData.email,
  }
}

