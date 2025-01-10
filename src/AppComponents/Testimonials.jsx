/* eslint-disable no-unused-vars */
import './css/Testimonials.css'
import { AvatarIcon } from "@chakra-ui/react/avatar";
import GradientSpan from './GradientSpan'
import { Text } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../App';

function Testimonials() {

    const listings = useContext(UserContext);

    const Lino = 'This apartment was perfect for our family vacation. The view was stunning!'

    let testimonial = listings[1].testimonials[0].name

    let test = listings[1].testimonials[0].message

    const Kgomotso = '“The best estate I have ever visited. Everything about the\
                    place screams Luxury”'

    const Justin = '“Do not think twice about the listings on this site, take a\
                    leap forward and see it for yourself. Trust me, you wont \
                    regret it.”'

    const [client, setCustomer] = useState(test);

    useEffect(() => {
        console.log('testimony:' , testimonial);
    },[])

    function CustomerCard(props) {

        return (
            <div
                className='customer-card'
                {...props}
                >
                <div><AvatarIcon boxSize={8}/></div>
                <div
                    style={{ paddingLeft: '12px' }}
                    >
                    <Text>{testimonial}</Text>
                    <Text opacity={0.75}>Client</Text>
                </div>
            </div>
        )
    }

    return (
        <article
            className="testimonies"
            >
            <div
                className='testimony-box'
                >
                <div
                    className='review-card'
                    >
                    <GradientSpan/>
                    <div
                        className='testimony'
                        >
                        {client}
                    </div>
                </div>
                <div
                    className='testimony-cards'
                    >
                    <CustomerCard
                        onClick={() => setCustomer(test)}
                        />
                    <CustomerCard
                        onClick={() => setCustomer(Justin)}
                        style={{
                            borderLeft: '1px solid white',
                            borderRight: '1px solid white'
                        }}
                        />
                    <CustomerCard
                        onClick={() => setCustomer(Kgomotso)}
                        />
                </div>
            </div>
        </article>
    )
}

export default Testimonials