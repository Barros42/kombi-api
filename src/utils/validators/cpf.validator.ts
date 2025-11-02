export function isValidCpf(cpf: string): boolean {
  if (typeof cpf !== 'string') return false;

  const cpfLimpo = cpf.replace(/[^\d]/g, '');

  if (cpfLimpo.length !== 11) {
    return false;
  }

  if ([...new Set(cpfLimpo)].length === 1) {
    return false;
  }

  let soma = 0;
  for (let i = 0; i < 9; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (10 - i);
  }
  let resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpfLimpo.charAt(9))) {
    return false;
  }

  soma = 0;
  for (let i = 0; i < 10; i++) {
    soma += parseInt(cpfLimpo.charAt(i)) * (11 - i);
  }
  resto = (soma * 10) % 11;
  if (resto === 10 || resto === 11) {
    resto = 0;
  }
  if (resto !== parseInt(cpfLimpo.charAt(10))) {
    return false;
  }

  return true;
}
