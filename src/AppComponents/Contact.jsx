import { AvatarIcon } from '@chakra-ui/react'
import ContactForm from './ContactForm'
import './css/Contact.css'
import GradientSpan from './GradientSpan'

function Contact() {

    function ProfileCard() {

        return (
            <div
                className='profile-card'
                >
                <div><AvatarIcon boxSize={8}/></div>
                <div
                    style={{ paddingLeft: '20px' }}
                    >
                    <div><p>Kgomotso Mkhawane</p></div>
                    <div>
                        <a
                            href='/'
                            style={{
                                textDecoration: 'underline',
                                color: '#FFAC12'
                            }}
                            >
                            View Profile
                        </a>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <article
            className="contact-page"
            id='contact'
            >
            <div
                className='contact-us'
                >
                <GradientSpan/>
                <h1>Say Hi!</h1>
                <ContactForm
                    profile={<ProfileCard/>}
                    />
            </div>
        </article>
    )
}

export default Contact