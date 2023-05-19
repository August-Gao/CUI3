
export const matrix = /^*matrix(3d)?\((([-+]?(\d*\.)?\d+(e[-+]?\d+)?) +( ){0,1}){16}\)$/i

export const isMatrix = (value: string) => matrix.test(value)

