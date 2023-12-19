import { Formik } from "formik";


export const App = () => {
return (
    <>
    <p> Formic </p>
    <Formik
    initialValues={{ firstName: "", lastName: "", city: "" }}
    enableReinitialize
    onSubmit={(values, formikBag ) => {
        console.log(values);
        console.log(formikBag);
    }}
    >
        {(...rest) => {
        const { handleSubmit, handleChange, handleBlur, values } = rest;
        console.log(rest);
        return(
            <form onSubmit={handleSubmit}>
                <label>
                 First Name:
                <input 
                name= "firstName" 
                onChange={handleChange} 
                onBlur={handleBlur} 
                value={values.firstName}
                />
                </label>
                <label>
                Last Name: 
                <input 
                name= "lastName" 
                onChange={handleChange} 
                onBlur={handleBlur} 
                value={values.lastName}
                />
                </label>
                <label>
                City:
                 <input 
                name= "city" 
                onChange={handleChange} 
                onBlur={handleBlur} 
                value={values.city}
                />
                </label>
                <button type="submit"> Submit </button>
            </form>
            )
        }}
    </Formik>
    </>
    );
}
