import { Formik, Form, Field, ErrorMessage } from "formik";
import validation from "../validation";
import st from "./FormikComponent.module.css"

const FormikComponent = ({ addUserData, prod}) => {
  return (
    <div className={st.formDiv}>
        <div className={st.prodInfo}>
            <h2>{prod.title}</h2>
            <p>Count: {prod.count}</p>
            <p>Total price: {prod.price} $</p>
        </div>

        <Formik
            initialValues={{
                name: "",
                lastname: "",
                email: "",
                phone: "",
                payment: "",
            }}

            validationSchema={validation}
            onSubmit={(values, { resetForm }) => addUserData(values, resetForm)}
        >
        {
            <Form>
                <div>
                    <Field name="name" placeholder="Name" className={st.inp} />
                    <ErrorMessage name="name" component="div" className={st.error} />
                </div>

                <div>
                    <Field name="lastname" placeholder="Lastname" className={st.inp} />
                    <ErrorMessage name="lastname" component="div" className={st.error} />
                </div>

                <div>
                    <Field type="email" name="email" placeholder="Email" className={st.inp} />
                    <ErrorMessage name="email" component="div" className={st.error} />
                </div>

                <div>
                    <Field name="phone" placeholder="Phone" className={st.inp} />
                    <ErrorMessage name="phone" component="div" className={st.error} />
                </div>

                <div>
                    <Field as="select" name="payment" className={st.select} >
                    <option label="Select payment method" disabled />
                    <option value="Cash" label="Cash" />
                    <option value="Card" label="Card" />
                    <option value="TelCell" label="TelCell" />
                    <option value="IDram" label="Idram" />
                    </Field>
                    <ErrorMessage name="payment" component="div" className={st.error} />
                </div>

                <button type="submit" className={st.sendBtn} > Send </button>
            </Form>
        }
        </Formik>
    </div>
  )
}

export default FormikComponent