import React from 'react';

export default function Form(props){
    const { values, change, submit, errors, disabled } = props;

    const onChange = evt => {
        const { name, value, type, checked } = evt.target
        const valueToUse = type === 'checkbox' ? checked : value
        change(name, valueToUse)
      }
    const onSubmit = evt => {
        evt.preventDefault();
        submit();
    }

    return (
        <form className='form container' onSubmit={onSubmit}>
            <div className='form-group inputs'>

                <div className='errors'>
                    {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
                    <div>{errors.name}</div>
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                    <div>{errors.terms}</div>
                </div>

                <label>
                    Name
                    <input name='name' 
                    value={values.name}
                    type='text'
                    onChange={onChange}
                    placeholder='please enter your name'
                    ></input>
                </label>
                <label>
                    Email
                    <input name='email' 
                    value={values.email}
                    type='email'
                    onChange={onChange}
                    placeholder='enter your email address'
                    ></input>
                </label>
                <label>
                    Password
                    <input name='password' 
                    value={values.password}
                    type='password'
                    onChange={onChange}
                    placeholder='select a password'
                    ></input>
                </label>
                <label>
                    Do you accept the terms & conditions?
                    <input type='checkbox'
                    name='terms'
                    checked={values.terms}
                    onChange={onChange}
                    />
                </label>
                </div>

                <div className='submit'>
                    <button disabled={disabled} onSubmit={onSubmit}>submit</button>
                </div>
           
        </form>
    )


}