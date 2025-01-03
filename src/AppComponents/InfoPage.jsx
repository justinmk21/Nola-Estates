import { Text } from '@chakra-ui/react'
import CapeBay from './images/CapeBay.jpg'
import './css/InfoPage.css'
import GradientSpan from './GradientSpan'
import NavClick from './NavClick'

function InfoPage() {

    return (
        <div
            className="info-page"
            >
            <div>
                <img
                    className='info-img'
                    src={CapeBay}
                    alt='Listing agents'
                    />
            </div>
            <div
                className='info-box'
                >
                <GradientSpan/>
                <h1>Introduction</h1>
                <Text
                    className='info'
                    >
                    Nestled in the heart of Cape Town’s vibrant skyline, Skyline
                    Residences redefines modern urban living with unmatched
                    elegance and convenience. More than just a home, Skyline
                    Residences offers an elevated lifestyle of luxury and
                    sophistication, perfect for those who desire a truly
                    exceptional living experience. This premier development
                    attracts discerning investors and residents who demand
                    the finest in contemporary living.
                </Text>
                <div
                    style={{ marginTop: '60px' }}
                    >
                    <NavClick
                        text='Learn more'
                        color={true}
                        />
                </div>
            </div>
        </div>
    )
}

export default InfoPage