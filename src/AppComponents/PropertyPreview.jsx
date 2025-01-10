import Card from "./Card"
import GradientSpan from "./GradientSpan"
import Button from "./Button"
import './css/Properties.css'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../App"
import { Flex, Spinner } from "@chakra-ui/react"

function PropertyPreview() {

    const listings = useContext(UserContext);

    const navToProperties = useNavigate();

    const navToProperty = useNavigate();

    const handleNavToProperty = (id) => {
        navToProperty(`/listing/${id}`);
    }

    const handleNavigation = () => {
        navToProperties('/properties');
    }

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
                    listings.slice(0,3).map((property) => (
                        <Card
                            key={property.id}
                            onClick={() => handleNavToProperty(property.id)}
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
                        buttonName='View All'
                        style={{ borderColor: '#EBEBEB' }}
                        onClick={handleNavigation}
                        />
                </div>
            </article>
        </section>
    )
}

export default PropertyPreview