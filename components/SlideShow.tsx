import { Box, Flex } from '@chakra-ui/react'
import Image from 'next/image'
import { Ref } from 'react'
import SwiperCore, { A11y, Navigation, Pagination, Scrollbar } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper-bundle.css'

type Props = {
  images: string[]
  heroImageRef: Ref<HTMLDivElement>
}

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const SlideShow = ({ images, heroImageRef }: Props) => (
  <Flex height="100%">
    <style jsx global>{`
      .swiper-container {
        width: 100%;
        max-width: 500px;
        height: 100%;
        margin: auto;
      }
      .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        flex-direction: column;
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
      span.swiper-pagination-bullet-active {
        background-color: #000;
      }
    `}</style>

    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      {images.map((img, idx) => (
        <SwiperSlide key={idx}>
          <Box
            ref={idx === 0 ? heroImageRef : null}
            position="relative"
            padding="4"
            height={300}
            width={300}
            marginTop="10"
          >
            <Image
              src={img}
              layout="fill"
              //  width="auto" height="400"
            />
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  </Flex>
)

export default SlideShow
