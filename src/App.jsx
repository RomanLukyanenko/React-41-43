import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

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
    </>
  );
};
