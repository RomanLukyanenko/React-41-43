
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

export const App = () => {


import { Formik } from "formik";
import * as Yup from "yup";

export const App = () => {

  const validationSchema = Yup.object().shape({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    city: Yup.string().required("City is required"),
  });


  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit = (data) => {
    console.log(data);
    reset(); 
  };

  return (
    <>
      <p>React Hook Form</p>
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <label>
          First Name:
          <input {...register('firstName')} />
          {errors.firstName && <div style={{ color: "red" }}>{errors.firstName.message}</div>}
        </label>

        <label>
          Last Name:
          <input {...register('lastName')} />
          {errors.lastName && <div style={{ color: "red" }}>{errors.lastName.message}</div>}
        </label>

        <label>
          City:
          <input {...register('city')} />
          {errors.city && <div style={{ color: "red" }}>{errors.city.message}</div>}
        </label>

        <button type="submit" style={{ maxWidth: "100%", width: "15%" }}>Submit</button>
      </form>
  return (
    <>
      <p>Formik</p>
      <Formik
        initialValues={{ firstName: "", lastName: "", city: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, formikBag) => {
          formikBag.resetForm();
          console.log(values);
          console.log(formikBag);
        }}
      >
        {(formikProps) => {
          const {
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            errors,
            touched,
          } = formikProps;

          return (
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <label>
                First Name:
                <input
                  name="firstName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.firstName}
                />
                {touched.firstName && errors.firstName && (
                  <div style={{ color: "red" }}>{errors.firstName}</div>
                )}
              </label>
              <label>
                Last Name:
                <input
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                />
                {touched.lastName && errors.lastName && (
                  <div style={{ color: "red" }}>{errors.lastName}</div>
                )}
              </label>
              <label>
                City:
                <input
                  name="city"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.city}
                />
                {touched.city && errors.city && (
                  <div style={{ color: "red" }}>{errors.city}</div>
                )}
              </label>
              <button type="submit" style={{ maxWidth: "100%", width: "15%" }}>
                Submit
              </button>
            </form>
          );
        }}
      </Formik>
    </>
  );
};
    );
}

 return (
        <>
            <table onClick={handleTableClick}>
                <tbody>
                    {renderTable()}
                </tbody>
            </table>
            {clickedCell && <p>Номер клікнутої комірки: {clickedCell}</p>}
        </>
    );
};