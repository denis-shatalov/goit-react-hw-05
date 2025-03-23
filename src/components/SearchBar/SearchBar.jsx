import { Formik, Form, Field  } from "formik";
import { toast } from 'react-hot-toast';
import css from "../SearchBar/SearchBar.module.css"

export default function SearchBar({ onSearch }) {
  
  return (
      
      <header className={css.header}>
        <Formik
        initialValues={{ topic: "" }}
          
        onSubmit={(values, actions) => {
            if (values.topic.trim() === "") {
     toast.error("Порожнє поле пошуку")
     return
  }
            onSearch(values.topic)
            actions.resetForm()
          }}>
          
           <Form>
          <Field
            className={css.input}
      type="text"
      name="topic"
      autoComplete="off"  
      autoFocus
      placeholder="Search images and photos"
    />
          <button className={ css.btn}type="submit">Search</button>
          </Form>
          
        </Formik>
 
</header>
    )
}



