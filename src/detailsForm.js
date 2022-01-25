import React from 'react';
import { useFormik } from 'formik';
import EmailSignature from './emailSignature';

const DetailsForm = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <><form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name </label>
            <input fullwidthid="name" name="name" placeholder="Sam Herring" />
            <br />

            <label htmlFor="name">Title </label>
            <input id="title" name="title" placeholder="Technical Consultant" />
            <br />

            <label htmlFor="name">Email </label>
            <input id="email" name="email" placeholder="sam.herring@entrago.com.au" type="email" />
            <br />

            <label htmlFor="name">Phone </label>
            <input id="Phone" name="Phone" placeholder="+61 0413 439 529" type="phone" />
            <br />
            <button type="submit">Submit</button>
            {/* <EmailSignature name={this.values.email}/> */}
        </form>
        <div>
            </div></>
        
    );
};

export default DetailsForm;

