import cn from 'classnames';
import React from "react";
import { Field, Form } from "react-final-form";
import InputMask from "react-input-mask";

import {
  required,
  isEmail,
  composeValidators,
  isPhoneNumber,
} from 'utils';

const Order = ({ submitHandler }) => {

  return (
    <section className="order" id="order">
      <div className="container">
        <div className="order__inner">
          <h2 className="order__title">Сделать заказ</h2>
          <Form
            onSubmit={(v) => submitHandler && submitHandler(v)}
            render={({ handleSubmit, form }) => (
              <form
                className="order__form"
                onSubmit={(v) => {
                  handleSubmit(v);
                  form.reset();
                  form.resetFieldState('name');
                  form.resetFieldState('email');
                  form.resetFieldState('contact');
                  form.resetFieldState('message');
                }}
              >
                <div className="order__fields">
                  <Field name="name" validate={required}>
                    {({ input, meta }) => (
                      <div className="order__field">
                        <input
                          className={cn(
                            "order__input",
                            meta.touched && meta.error && "order__input--err",
                          )}
                          placeholder="Ваше имя"
                          {...input}
                        />
                      </div>
                    )}
                  </Field>
                  <Field name="email" validate={required}>
                    {({ input, meta }) => (
                      <div className="order__field">
                        <input
                          type="email"
                          className={cn(
                            "order__input",
                            meta.touched && meta.error && "order__input--err",
                          )}
                          placeholder="Ваше email"
                          {...input}
                        />
                      </div>
                    )}
                  </Field>
                  <Field
                    name="contact"
                    validate={composeValidators(required, isPhoneNumber)}
                  >
                    {({ input, meta }) => (
                      <div className="order__field">
                        <InputMask
                          className={cn(
                            "order__input",
                            meta.touched && meta.error && "order__input--err",
                          )}
                          disabled={false}
                          mask="8 (999) 999-99-99"
                          {...input}
                          placeholder="Номер телефона"
                        ></InputMask>
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
