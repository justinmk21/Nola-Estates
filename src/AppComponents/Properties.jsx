import Button from "./Button"
import Card from "./Card"
import GradientSpan from "./GradientSpan"
import PropertyFilter from "./PropertyFilter"
import { useEffect, useContext } from "react"
import './css/Properties.css'
import { UserContext } from "../App"
import { useNavigate } from "react-router-dom"
import { Flex, Spinner } from "@chakra-ui/react"


function Properties() {

    const listings = useContext(UserContext);

    const navToPropertyPage = useNavigate();

    const handleNavToPropertyPage = (id) => {
        navToPropertyPage(`/listing/${id}`);
    }

    useEffect(() => {
        window.scrollTo(0,0)
    },[])

    return (
        <section
            className="estate-page"
            id="properties"
            >
            <article
                className="estate-group"
                >
                <GradientSpan/>
                <h1>Find your next place to live</h1>
                <div
                    className="select-listing"
                    >
                    <PropertyFilter
                        className='filter-button-a'
                        filterName='Location For'
                        />
                    <PropertyFilter
                        className='filter-button-b'
                        filterName='Location'
                        />
                    <PropertyFilter
                        className='filter-button-c'
                        filterName='Property Type'
                        />
                    <PropertyFilter
                        className='filter-button-d'
                        filterName='Price'
                        />
                </div>
                <div
                    className="cards"
                    >
                    {listings.length === 0 ? (
                        <Flex
                            alignItems={'center'}
                            >
                            <Spinner
                                thickness='4px'
                                size="xl"
                                color={'#FFAC12'}
                                />
                            <h2 style={{ marginLeft: '10px' }}>
                                Loading Properties...
                            </h2>
                        </Flex>
                    ) : (
                    listings.slice(0,5).map((property) => (
                        <Card
                            key={property.id}
                            onClick={() => handleNavToPropertyPage(property.id)}
                            heading={property.name}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                            space={property.space_in_sqm}
                            img={property.images[1].image}
                            />
                    )
                    ))}
                </div>
                <div
                    style={{ textAlign: 'center', marginBottom: '30px' }}
                    >
                    <Button
                        buttonName='View More'
                        style={{ borderColor: '#EBEBEB' }}
                        />
                </div>
            </article>
        </section>
    )
}

export default Properties