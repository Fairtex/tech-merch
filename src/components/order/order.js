import cn from 'classnames';
import React, { useCallback } from "react";
import { Field, Form } from "react-final-form";
import InputMask from "react-input-mask";

import {
  required,
  isEmail,
  composeValidators,
  isPhoneNumber,
} from 'utils';

const Order = ({ submitHandler }) => {
  const onSubmit = useCallback(async (values, form) => {
    try {
      submitHandler(values)
      setTimeout(() => form.restart())
    } catch (e) {
      console.error(e)
    }
  }, [])
  return (
    <section className="order" id="order">
      <div className="container">
        <div className="order__inner">
          <h2 className="order__title">Сделать заказ</h2>
          <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, form, errors }) => (
              <form
                className="order__form"
                onSubmit={handleSubmit}
              >
                <div className="order__fields">
                  <Field name="name" validate={required}>
                    {({ input, meta }) => (
                      <div className="order__field">
                        <label htmlFor="name-field" className="order__label">Имя</label>
                        <input
                          className={cn(
                            "order__input",
                            meta.touched && meta.error && "order__input--err",
                          )}
                          placeholder="Ваше имя"
                          id="name-field"
                          {...input}
                        />
                        {meta.touched && meta.error && <span className="order__error">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="email" validate={composeValidators(required, isEmail)}>
                    {({ input, meta }) => (
                      <div className="order__field">
                        <label htmlFor="email-field" className="order__label">Email</label>
                        <input
                          type="email"
                          className={cn(
                            "order__input",
                            meta.touched && meta.error && "order__input--err",
                          )}
                          placeholder="Ваш email"
                          id="email-field"
                          {...input}
                        />
                        {meta.touched && meta.error && <span className="order__error">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="contact"
                    validate={composeValidators(required, isPhoneNumber)}
                  >
                    {({ input, meta }) => (
                      <div className="order__field">
                        <label htmlFor="number-field" className="order__label">Номер телефона</label>
                        <InputMask
                          className={cn(
                            "order__input",
                            meta.touched && meta.error && "order__input--err",
                          )}
                          disabled={false}
                          mask="8 (999) 999-99-99"
                          id="number-field"
                          {...input}
                          placeholder="Номер телефона"
                        ></InputMask>
                        {meta.touched && meta.error && <span className="order__error">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                  <Field name="message">
                    {({ input, meta }) => (
                      <div className="order__field">
                        <label htmlFor="message-field" className="order__label">Сообщение</label>
                        <textarea
                          className="order__textarea"
                          placeholder="Текст сообщения"
                          id="message-field"
                          {...input}
                        />
                        {meta.touched && meta.error && <span className="order__error">{meta.error}</span>}
                      </div>
                    )}
                  </Field>
                </div>
                <button type="submit" className="order__submit">Отправить</button>
              </form>
            )}
          />
        </div>
      </div>
    </section>
  )
};

export default Order;
