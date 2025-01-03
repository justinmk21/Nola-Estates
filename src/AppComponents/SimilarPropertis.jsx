import Card from "./Card";
import GradientSpan from "./GradientSpan";
import { useContext, useEffect, useRef } from "react";
import './css/SimilarProperties.css';
import { UserContext } from "../App";
import Button from "./Button";
import { LuArrowBigLeft, LuArrowBigRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

function SimilarProperties() {
    const listings = useContext(UserContext);
    const scrollControllerRef = useRef(null);

    const navToProperty = useNavigate();

    const handleNavClick = (id) => {
        navToProperty(`/listing/${id}`);
    }

    const handleScroll = (direction) => {
        if (direction === "left") {
            scrollControllerRef.current.scrollBy({
                left: -200,
                behavior: 'smooth'
            });
        } else {
            scrollControllerRef.current.scrollBy({
                left: 200,
                behavior: 'smooth'
            });
        }
    };

    useEffect(() => {
        window.scrollTo(0,0)
    },[handleNavClick])

    return (
        <article className="similar-properties-page">
            <div style={{ maxWidth: '1070px', width: '100%' }}>
                <GradientSpan />
                <h1>Similar Properties</h1>
            </div>

            <div className="slider-container">

                <Button
                    buttonName={<LuArrowBigLeft />}
                    onClick={() => handleScroll('left')}
                    className="scroll-button left-arrow"
                />

                <div className="similar-listings" ref={scrollControllerRef}>
                    {listings.slice(0, 5).map((property) => (
                        <div
                            key={property.id}
                            onClick={() => handleNavClick(property.id)}
                            >
                            <Card
                                heading={property.name}
                                bedrooms={property.bedrooms}
                                bathrooms={property.bathrooms}
                                space={property.space_in_sqm}
                                img={
                                    property.images.length > 1
                                        ? property.images[1].image
                                        : property.images.length > 0
                                            ? property.images[0].image
                                            : 'default-image-url.jpg'
                                }
                        />
                        </div>
                    ))}
                </div>

                <Button
                    buttonName={<LuArrowBigRight />}
                    onClick={() => handleScroll('right')}
                    className="scroll-button right-arrow"
                />
            </div>
        </article>
    );
}

export default SimilarProperties;
