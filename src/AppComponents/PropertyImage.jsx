import { Flex } from "@chakra-ui/react"

// eslint-disable-next-line react/prop-types
function PropertyImage({ img }) {

    return (
        <Flex
            justifyContent={'center'}
            backgroundColor={'#271A00'}
            >
            <img
                style={{
                    maxWidth:'1620px',
                    width:'100%',
                    maxHeight: '900',
                    height: 'auto',
                    padding: '150px 0',
                }}
                src={img}
                alt="Property Image"
            />
        </Flex>
    )
}

export default PropertyImage