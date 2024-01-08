import { useSelector, useDispatch } from 'react-redux';
import { cleanCart } from '../store/CartSlice';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default function Order() {
  const dispatch = useDispatch();
  const { cart } = useSelector(state => state.cart);
  const cartCount = cart.length;

  // Схема валідації для Yup
const validationSchema = Yup.object().shape({
  name: Yup.string().required("Обов'язкове поле"),
  email: Yup.string().email("Некоректна електронна пошта").required("Обов'язкове поле"),
  address: Yup.string().required("Обов'язкове поле"),      
});

  
  // Ініціалізація стану форми
  const initialValues = {
    name: "",
    email: "",
    address: "",
  };

  const handleSubmit = (values, { setSubmitting }) => {
    const orderProducts = cart.map(item => `${item.title} (${item.count})`).join(', ');

    // Тут ваш код для обробки даних форми
    console.log('Форма відправлена з даними:', values, orderProducts);

    // Припустимо, ви відправляєте дані на сервер
    fetch('https://api.inderio.com/send-email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        to: values.email,
        subject: 'Оформлення замовлення',
        message: `Привіт ${values.name}! Ви замовили наступні товари: ${orderProducts}. Ваша адреса доставки: ${values.address}.`
      })
    })
    .then(response => response.json())
    .then(data => {
      console.log('Email відправлено:', data);
      setSubmitting(false);
      alert("Замовлення відправлено!");
      dispatch(cleanCart());
    })
    .catch(error => {
      console.error('Помилка при відправці:', error);
      setSubmitting(false);
    });
  };

  return (
    <div className="article">
      <div className="container">
        <h2 className="article__title">Оформити замовлення</h2>
        <div className="page-content">
          {cartCount > 0 ? (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form id="order-form">
                  <div className="form-group">
                    <label htmlFor="name">Імя:</label>
                    <Field name="name" type="text" className="form-control" />
                    <ErrorMessage name="name" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Електронна пошта:</label>
                    <Field name="email" type="email" className="form-control" />
                    <ErrorMessage name="email" component="div" className="error-message" />
                  </div>

                  <div className="form-group">
                    <label htmlFor="address">Адреса доставки:</label>
                    <Field name="address" type="text" className="form-control" />
                    <ErrorMessage name="address" component="div" className="error-message" />
                  </div>

                  <button type="submit" className="btn" disabled={isSubmitting}>
                    Оформити замовлення
                  </button>
                </Form>
              )}
            </Formik>
          ) : (
            <h1 className="form-empty">Корзина пуста</h1>
          )}
        </div>
      </div>
    </div>
  );
}