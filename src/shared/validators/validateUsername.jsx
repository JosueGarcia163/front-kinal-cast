export const validateUsername = (username) => {
  // Es una expresion regular que valida el nombre de usuario.
  const regex = /^\S{3,8}$/
  return regex.test(username)
}

export const validateUsernameMessage = 'El nombre de usuario debe tener entre 3 y 8 caracteres sin espacios'