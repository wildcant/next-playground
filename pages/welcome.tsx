import 'swiper/swiper-bundle.css'

import React from 'react'

import { useRouter } from 'next/router'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const Welcome: React.FC<{}> = ({}) => {
  const router = useRouter()
  return (
    <Flex align="center" direction="column">
      <style global jsx>{`
        html,
        body {
          position: relative;
          height: 100%;
        }
        body {
          background: #fff;
          // font-family: Lobster, Helvetica Neue, Helvetica, Arial, sans-serif;
          font-size: 14px;
          color: #000;
          margin: 0;
          padding: 0;
        }
        .swiper-container {
          width: 100%;
          max-width: 500px;
          height: 80vh;
          margin: auto;
        }
        .swiper-slide {
          text-align: center;
          font-size: 18px;
          background: #fff;
          flex-direction: column;
          // height: 100vh;
          /* Center slide text vertically */
          display: -webkit-box;
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -webkit-box-pack: top;
          -ms-flex-pack: top;
          -webkit-justify-content: top;
          justify-content: top;
          -webkit-box-align: center;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
        }
      `}</style>
      {/*
      // @ts-ignore */}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Image py={10} src="/static/intro1.png" />
          <Text pb={5} fontWeight="bold" fontSize="22px">
            About SevaShop
          </Text>
          <Text px={4} fontSize="sm" align="center">
            One stop solution for your service. Market, manage and maximize your
            business.
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Image py={10} src="/static/intro2.png" />
          <Text pb={5} fontWeight="bold" fontSize="22px">
            Your Own Website in 15 secs
          </Text>
          <Text px={4} fontSize="sm">
            Create an onine presence for your service. Interact with your
            visitors and convert them into your valuable customers.
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Image py={10} src="/static/intro3.png" />
          <Text pb={5} fontWeight="bold" fontSize="22px">
            Take bookings Online
          </Text>
          <Text px={4} fontSize="sm">
            Eliminate back and forth call. Flawless scheduling and easily manage
            bookings for your services.
          </Text>
        </SwiperSlide>
        <SwiperSlide>
          <Image py={10} src="/static/intro4.png" />
          <Text pb={5} fontWeight="bold" fontSize="22px">
            Marketing Suit
          </Text>
          <Text px={4} fontSize="sm">
            Get readymade personalised social media posts and stories, which can
            be easily shared anywhere with just a click of a button!
          </Text>
        </SwiperSlide>
      </Swiper>
      <Button size="lg" backgroundColor="primary.300" color="white" mt="8">
        Get Started!
      </Button>
    </Flex>
  )
}

export default Welcome
