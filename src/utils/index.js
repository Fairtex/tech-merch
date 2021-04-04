export const required = (value) => (value ? undefined : `Обязательно`);

export const isEmail = (value) =>
  value && !/\S+@\S+\.\S+/.test(value)
    ? `Неправильный формат email`
    : undefined;

export const composeValidators = (...validators) => (value) =>
  validators.reduce(
    (error, validator) => error || validator(value),
    undefined,
  );

export const isPhoneNumber = (value) =>
  value.includes('_') ? 'Должен быть телефон' : undefined;