export const validateCNS = (cns: string): boolean => {
  if (cns.trim().length !== 15) {
    return false;
  }

  if (cns[0] !== '1' && cns[0] !== '2') {
    return validateCns12(cns);
  }
  return validateCns789(cns);
};

export const validateCns12 = (cns: string): boolean => {
  let soma: number;
  let resto;
  let dv: number;
  let pis: string = '';
  let resultado: string = '';
  pis = cns.substring(0, 11);

  soma =
    parseInt(pis.substring(0, 1), 10) * 15 +
    parseInt(pis.substring(1, 2), 10) * 14 +
    parseInt(pis.substring(2, 3), 10) * 13 +
    parseInt(pis.substring(3, 4), 10) * 12 +
    parseInt(pis.substring(4, 5), 10) * 11 +
    parseInt(pis.substring(5, 6), 10) * 10 +
    parseInt(pis.substring(6, 7), 10) * 9 +
    parseInt(pis.substring(7, 8), 10) * 8 +
    parseInt(pis.substring(8, 9), 10) * 7 +
    parseInt(pis.substring(9, 10), 10) * 6 +
    parseInt(pis.substring(10, 11), 10) * 5;

  resto = soma % 11;
  dv = 11 - resto;

  if (dv === 11) {
    dv = 0;
  }

  if (dv === 10) {
    soma =
      parseInt(pis.substring(0, 1), 10) * 15 +
      parseInt(pis.substring(1, 2), 10) * 14 +
      parseInt(pis.substring(2, 3), 10) * 13 +
      parseInt(pis.substring(3, 4), 10) * 12 +
      parseInt(pis.substring(4, 5), 10) * 11 +
      parseInt(pis.substring(5, 6), 10) * 10 +
      parseInt(pis.substring(6, 7), 10) * 9 +
      parseInt(pis.substring(7, 8), 10) * 8 +
      parseInt(pis.substring(8, 9), 10) * 7 +
      parseInt(pis.substring(9, 10), 10) * 6 +
      parseInt(pis.substring(10, 11), 10) * 5 +
      2;

    resto = soma % 11;
    dv = 11 - resto;
    resultado = `${pis}001${dv.toString()}`;
  } else {
    resultado = `${pis}000${dv.toString()}`;
  }

  if (!(cns === resultado)) {
    return false;
  }
  return true;
};

export const validateCns789 = (cns: string): boolean => {
  let dv: number;
  let resto;
  let soma: number;

  soma = 0;
  for (let i = 0; i < 15; i++) {
    soma += parseInt(cns.substring(i, i + 1), 10) * 15 - i;
  }

  resto = soma % 11;

  if (resto !== 0) {
    return false;
  }
  return true;
};

export const validateCPF = (cpf: string): boolean => {
  cpf = cpf.replace(/[^\d]+/g, '');
  if (cpf === '') return false;
  // Elimina CPFs invalidos conhecidos
  if (
    cpf.length !== 11 ||
    cpf === '00000000000' ||
    cpf === '11111111111' ||
    cpf === '22222222222' ||
    cpf === '33333333333' ||
    cpf === '44444444444' ||
    cpf === '55555555555' ||
    cpf === '66666666666' ||
    cpf === '77777777777' ||
    cpf === '88888888888' ||
    cpf === '99999999999'
  )
    return false;
  // Valida 1o digito
  let add: number = 0;
  for (let i = 0; i < 9; i++) add += parseInt(cpf.charAt(i), 10) * (10 - i);
  let rev: number = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(9))) return false;
  // Valida 2o digito
  add = 0;
  for (let i = 0; i < 10; i++) add += parseInt(cpf.charAt(i), 10) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf.charAt(10), 10)) return false;
  return true;
};
