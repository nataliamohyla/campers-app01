import { Formik, Form, Field, ErrorMessage } from "formik";
import type { FormikHelpers } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "./BookingForm.module.css";

interface BookingFormValues {
  name: string;
  email: string;
  date: Date | null;
  comment: string;
}

const initialValues: BookingFormValues = {
  name: "",
  email: "",
  date: null,
  comment: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  date: Yup.date().required("Date is required").nullable(),
  comment: Yup.string(),
});

export const CamperBookingForm = () => {
  const handleSubmit = (
    values: BookingFormValues,
    { resetForm }: FormikHelpers<BookingFormValues> 
  ) => {
    console.log("Booking submitted:", values);
    resetForm();
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.name}>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form className={styles.form}>
            <div  className={styles.fieldWrapper}>
              <Field className={styles.field} name="name" placeholder="Name" />
              <ErrorMessage name="name" component="div" className={styles.error} />
            </div>

            <div  className={styles.fieldWrapper} >
              <Field className={styles.field} name="email" type="email" placeholder="Email" />
              <ErrorMessage name="email" component="div" className={styles.error} />
            </div>

            <div  className={styles.field} >
              <DatePicker
               
                selected={values.date}
                onChange={(date) => setFieldValue("date", date)}
                placeholderText="Select a date"
                dateFormat="dd/MM/yyyy"
                className={styles.datePicker}
                minDate={new Date()}
              />
              <ErrorMessage name="date" component="div" className={styles.error} />
            </div>

            <div >
              <Field className={styles.field} as="textarea" name="comment" placeholder="Comment" />
            </div>

            <button className={styles.button} type="submit">Send</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};