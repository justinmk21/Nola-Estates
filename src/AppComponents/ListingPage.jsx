import ListingFeatures from './ListingFeatures'
import ListingDescription from './ListingDescription'
import ListingDetails from './ListingDetails'
import './css/ListingPage.css'
import { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App'
import { useParams } from 'react-router-dom'

function ListingPage() {

    const listings = useContext(UserContext);

    const { id } = useParams(null);

    const listing = listings.find((property) => property.id === parseInt(id));

    const [img, setImg] = useState(listing.images[0].image);

    const formatCurrency = (amount) => {
        const formatter = new Intl.NumberFormat('en-ZA',{
            style: 'currency',
            currency:'ZAR',
            minimumFractionDigits:2,
            maximumFractionDigits:2,
        });

        return formatter.format(amount);
    }

    useEffect(() => {
        window.scrollTo(0,0);
    },[])

    return (
        <article
            className='house-details'
            >
            <div
                className="listing-page"
                >
                <div
                    className='small-width-header'
                    >
                    <div>
                        <h2>{listing.name}</h2>
                        <p
                            style={{ opacity: '0.6' }}
                            >
                                {listing.address}
                        </p>
                    </div>
                    <div>
                        <h2>{formatCurrency(listing.price)}</h2>
                        <p
                            style={{ opacity: '0.6' }}
                            >
                                {formatCurrency(listing.price_per_sqm)}/sq m
                        </p>
                    </div>
                </div>
                <div
                    className='listing-header'
                    >
                    <div>
                        <h1>{listing.name}</h1>
                        <p style={{ opacity: '0.6' }}>
                            {listing.address}
                        </p>
                    </div>
                    <div
                        className='cost-space'
                        >
                        <h1>{formatCurrency(listing.price)}</h1>
                        <p style={{ opacity: '0.6' }}>
                            {formatCurrency(listing.price_per_sqm)}/sq m
                        </p>
                    </div>
                </div>
            </div>
            <div
                className='listing-content-block'
                    >
                    <div
                        className='image-block'
                        >
                        <img
                            className='img-display'
                            style={{
                                maxWidth: '700px',
                                width: '100%',
                                maxHeight: '520px',
                                height: '100%',
                                margin: '20px 0',
                                borderTopRightRadius: '60px',
                                borderTopLeftRadius: '10px',
                                borderBottomLeftRadius: '10px',
                                borderBottomRightRadius: '10px'
                            }}
                            src={img}
                            />
                        <div
                            className='image-collection'
                            >
                            {listing.images.slice(0,6).map((propertyImg) =>
                            <img
                                key={propertyImg.id}
                                onClick={() => setImg(propertyImg.image)}
                                src={propertyImg.image}
                            />
                            )}
                        </div>
                    </div>
                <ListingDetails
                    bedrooms={listing.bedrooms}
                    bathrooms={listing.bathrooms}
                    space_in_sqm={listing.space_in_sqm}
                    garage={listing.garage}
                    />
                <ListingDescription
                    description={listing.description}
                    />
                <ListingFeatures
                    property={listing}
                    />
            </div>
        </article>
    )
}

export default ListingPage