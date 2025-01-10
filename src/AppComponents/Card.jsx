/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { LuBed, LuShowerHead, LuSpace } from 'react-icons/lu'
import './css/Card.css'
import { PopoverTrigger, Text } from '@chakra-ui/react'
import { Box, Link, Strong } from "@chakra-ui/react"
import {
    HoverCardArrow,
    HoverCardContent,
    HoverCardRoot,
    HoverCardTrigger,
  } from "@chakra-ui/react"
  import {
    Popover,
    PopoverBody,
    PopoverContent,
    PopoverRoot,
  } from '@chakra-ui/react'


function Card(props) {

    function FeatureCard(props) {

        return (
            <div
                className='detail-box'
                {...props}
                >
                <div style={{ paddingRight: '10px' }}>{props.icon}</div>
                <Text>{props.num}</Text>
            </div>
        )
    }

    return (
        <div
            className="card"
            {...props}
            >
            <div>
                <img
                    className='listing-image'
                    src={props.img}
                    alt='Estate listing'
                    />
            </div>
            <div
                className='listing-heading'
                >
                <h2>{props.heading}</h2>
            </div>
            <div
                className='card-footer'
                >
                <div
                    className='listing-features'
                    style={{ borderBottomLeftRadius: '25px' }}
                    >
                    <HoverCardRoot positioning={{ placement: "top" }}>
                        <HoverCardTrigger>
                            {
                                <FeatureCard
                                    icon={<LuBed size={'24'}/>}
                                    num={props.bedrooms}
                                    />
                            }
                        </HoverCardTrigger>
                        <HoverCardContent
                            padding={'4px 8px'}
                            borderRadius={'0px'}
                            maxWidth="110px"
                            position={'absolute'}
                            >
                                <Box>
                                    <Strong>Bedrooms</Strong>
                                </Box>
                        </HoverCardContent>
                    </HoverCardRoot>
                </div>

                <div
                    className='listing-features'
                    style={{
                        borderLeft: '1px solid #E4E4E4',
                        borderRight: '1px solid #E4E4E4',
                    }}
                    >
                    <HoverCardRoot positioning={{ placement: 'top'  }} usePortal>
                        <HoverCardTrigger>
                            {
                                <FeatureCard
                                    icon={<LuShowerHead size={'24'}/>}
                                    num={props.bathrooms}
                                />
                            }
                        </HoverCardTrigger>
                        <HoverCardContent
                            padding={'4px 8px'}
                            borderRadius={'0px'}
                            maxWidth="110px"
                            position={'absolute'}
                            >
                                <Box>
                                    <Strong>Bathrooms</Strong>
                                </Box>
                        </HoverCardContent>
                    </HoverCardRoot>
                </div>

                <div
                    className='listing-features'
                    style={{ borderBottomRightRadius: '25px' }}
                    >
                    <HoverCardRoot positioning={{ placement: 'top' }}>
                        <HoverCardTrigger>
                            {
                                <FeatureCard
                                    icon={<LuSpace size={'24'}/>}
                                    num={props.space}
                                />
                            }
                        </HoverCardTrigger>
                        <HoverCardContent
                            padding={'4px 8px'}
                            borderRadius={'0px'}
                            maxWidth="110px"
                            position={'absolute'}
                            >
                                <Box>
                                    <Strong>Space in square meters</Strong>
                                </Box>
                        </HoverCardContent>
                    </HoverCardRoot>
                </div>
            </div>
        </div>
    )
}

export default Card
