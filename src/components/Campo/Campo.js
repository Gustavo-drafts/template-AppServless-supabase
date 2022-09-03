import React from "react"
import { useField } from 'formik';

const Campo = ({label, ...props}) => {
    const [field, meta] = useField(props)
  
    return (
      <div className='form-group'>
        <label htmlFor={props.id}>{label}</label>
        <input 
          {...field}
          {...props}
          className={ meta.error && meta.touched ? 'isError' : ''}
        />
        {meta.error && meta.touched ? (<div className='error-mensage'>{meta.error}</div>) : null}
      </div>
    )
  }
  
export default Campo;