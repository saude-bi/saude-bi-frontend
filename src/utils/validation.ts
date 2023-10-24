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
  let soma: number;

  soma = 0;
  for (let i = 0; i < 15; i += 1) {
    soma += parseInt(cns.substring(i, i + 1), 10) * 15 - i;
  }

  const resto = soma % 11;

  if (resto !== 0) {
    return false;
  }
  return true;
};

export const validateCPF = (cpf: string): boolean => {
  const cpf_parsed = cpf.replace(/[^\d]+/g, '');
  if (cpf_parsed === '') return false;
  // Elimina CPFs invalidos conhecidos
  if (
    cpf_parsed.length !== 11 ||
    cpf_parsed === '00000000000' ||
    cpf_parsed === '11111111111' ||
    cpf_parsed === '22222222222' ||
    cpf_parsed === '33333333333' ||
    cpf_parsed === '44444444444' ||
    cpf_parsed === '55555555555' ||
    cpf_parsed === '66666666666' ||
    cpf_parsed === '77777777777' ||
    cpf_parsed === '88888888888' ||
    cpf_parsed === '99999999999'
  ) {
    return false;
  }
  // Valida 1o digito
  let add: number = 0;
  for (let i = 0; i < 9; i += 1) add += parseInt(cpf_parsed.charAt(i), 10) * (10 - i);
  let rev: number = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf_parsed.charAt(9), 10)) return false;
  // Valida 2o digito
  add = 0;
  for (let i = 0; i < 10; i += 1) add += parseInt(cpf_parsed.charAt(i), 10) * (11 - i);
  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) rev = 0;
  if (rev !== parseInt(cpf_parsed.charAt(10), 10)) return false;
  return true;
};

export const validateCNS = (cns: string): boolean => {
  if (cns.trim().length !== 15) {
    return false;
  }

  if (cns[0] !== '1' && cns[0] !== '2') {
    return validateCns12(cns);
  }
  return validateCns789(cns);
};
