import Card from "./Card"
import GradientSpan from "./GradientSpan"
import Button from "./Button"
import './css/Properties.css'
import { useNavigate } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../App"

function PropertyPreview() {

    const listings = useContext(UserContext);

    const navToProperties = useNavigate();
    const navToProperty = useNavigate();

    const handleNavToProperty = (id) => {
        navToProperty(`/listing/${id}`);
    }

    const handleNavigation = () => {
        navToProperties('/listings');
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
                    {listings.slice(0,3).map((property) => (
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
                    )}
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