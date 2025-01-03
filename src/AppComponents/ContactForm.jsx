/* eslint-disable react/prop-types */
import Button from './Button'
import './css/ContactForm.css'

function ContactForm(props) {

    return (
        <form
            className='contact-form'
            >
            {props.profile}
            <input
                placeholder='Name'
                type='text'
                name='name'
                />
            <input
                placeholder='Phone'
                type='number'
                name='phone'
                />
            <input
                placeholder='Email'
                type='email'
                name='email'
                />
            <textarea
                placeholder='Message'
                name='message'
                />
            <Button
                buttonName='Submit'
                style={{ borderColor: '#EBEBEB' }}
                />
        </form>
    )
}

export default ContactForm