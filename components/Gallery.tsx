import {
  Box,
  Button,
  Container,
  Flex,
  Icon,
  IconButton,
  Text
} from '@chakra-ui/react'
import Image from 'next/image'
import Link from 'next/link'
import { Category, Item } from '../interfaces'
import SlideShow from './SlideShow'
import { items } from '../utils/sample-data'
import { createRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { FaArrowLeft, FaHeart } from 'react-icons/fa'

type Props = {
  categories: Category[]
  activeCategory: Category
}

const currentItem = items[0]
const sizes = ['S', 'M', 'L', 'XL']

const Gallery = ({ categories, activeCategory }: Props) => {
  const [pageIdx, setPageIdx] = useState(0)
  const [item, setCurrentItem] = useState<Item>(currentItem)
  const items = activeCategory?.items ?? []
  const rootRef = createRef<HTMLDivElement>()
  const tiles = items.map(() => createRef<HTMLDivElement>())

  // Hero refs
  const heroRef = createRef<HTMLDivElement>()
  const heroImageRef = createRef<HTMLDivElement>()
  const detailsRef = createRef<HTMLDivElement>()
  const heartRef = createRef<HTMLDivElement>()

  const selectItem = (selectedItem: Item, index: number) => {
    if (index === pageIdx && selectedItem === item) {
      animateHero(true)
      return
    }
    setPageIdx(index)
    setCurrentItem(selectedItem)
  }

  /**
   * Animation for product details
   * @param zoomIn is going to zoom in or zoom out
   * Source - Guide for this animation at https://greensock.com/forums/topic/14206-full-screen-a-div/
   */
  const animateHero = (zoomIn: Boolean) => {
    const fromHero = zoomIn ? tiles[pageIdx].current : heroImageRef.current
    const toHero = zoomIn ? heroImageRef.current : tiles[pageIdx].current
    if (
      fromHero &&
      toHero &&
      rootRef.current &&
      detailsRef.current &&
      heroRef.current
    ) {
      const clone = fromHero.cloneNode(true)
      const from = calculatePosition(fromHero)
      const to = calculatePosition(toHero)
      gsap.set([fromHero, toHero], { visibility: 'hidden' })
      if (!zoomIn) {
        gsap.set(heroRef.current, { visibility: 'hidden' })
        gsap.to([detailsRef.current], {
          x: 0,
          y: '300px',
          duration: 0.1
        })
        gsap.to([heartRef.current], {
          x: '100px',
          y: 0,
          duration: 0.1
        })
      }
      gsap.set(clone, { position: 'absolute', margin: 0 })
      rootRef.current.appendChild(clone)
      const style = {
        x: to.left - from.left,
        y: to.top - from.top,
        width: to.width,
        height: to.height,
        autoRound: false,
        ease: 'ease',
        duration: 0.3,
        onComplete: () => {
          gsap.set(toHero, { visibility: 'visible' })
          if (zoomIn) {
            gsap.set(heroRef.current, { visibility: 'visible' })
            gsap.to([detailsRef.current], {
              x: 0,
              y: '-300px',
              ease: 'ease',
              duration: 0.1
            })
            gsap.to([heartRef.current], {
              x: '-100px',
              y: 0,
              duration: 0.1
            })
          }
          if (rootRef.current) {
            rootRef.current.removeChild(clone)
          }
        }
      }

      gsap.set(clone, from)
      gsap.to(clone, style)
    }
  }

  const calculatePosition = (
    element: HTMLDivElement
  ): { top: number; left: number; height: number; width: number } => {
    var rect = element.getBoundingClientRect()
    if (rootRef.current) {
      var scrollTop = window.pageYOffset || rootRef.current.scrollTop || 0
      var scrollLeft = window.pageXOffset || rootRef.current.scrollLeft || 0

      var clientTop = rootRef.current.clientTop || 0
      var clientLeft = rootRef.current.clientLeft || 0

      return {
        top: Math.round(rect.top + scrollTop - clientTop),
        left: Math.round(rect.left + scrollLeft - clientLeft),
        height: rect.height,
        width: rect.width
      }
    }
    return {
      top: 0,
      left: 0,
      height: 0,
      width: 0
    }
  }

  useEffect(() => {
    if (typeof pageIdx !== null || typeof pageIdx !== undefined) {
      animateHero(true)
    }
  }, [pageIdx, item.name])

  return (
    <>
      <Container ref={rootRef} padding="0" width="100%">
        <Flex marginY="4" overflow="auto" paddingBottom="2">
          {categories.map((category) => (
            <Link key={category.id} href={`/shop/${category.name}`}>
              <Box
                paddingY="2"
                paddingX="6"
                borderRadius={30}
                backgroundColor={
                  category.id === activeCategory.id ? 'red.100' : 'white'
                }
              >
                <Text
                  fontSize="sm"
                  fontWeight="medium"
                  textTransform="capitalize"
                >
                  {category.name}
                </Text>
              </Box>
            </Link>
          ))}
        </Flex>
        <Flex overflow="auto">
          {items.map((item, idx) => (
            <Box key={idx} minW={250} marginRight="4" borderRadius="20">
              <Box
                ref={tiles[idx]}
                position="relative"
                border="1px"
                borderColor="gray.100"
                padding="4"
                minW={250}
                minH={200}
                maxW={350}
                maxH={350}
                onClick={() => selectItem(item, idx)}
              >
                <Image src={item.images[0]} layout="fill" />
              </Box>
              <Flex justifyContent="space-between" marginTop="2">
                <Text fontWeight="medium">{item.name}</Text>
                <Text color="gray">${item.price}</Text>
              </Flex>
            </Box>
          ))}
        </Flex>
      </Container>
      <Container
        ref={heroRef}
        visibility="hidden"
        position="fixed"
        top={0}
        left={0}
        width="100vw"
        height="100vh"
        bg="white"
      >
        <Flex h="100vh" direction="column" justify="space-between">
          <Box h="65%" position="relative">
            <Box
              position="absolute"
              left="5"
              top="5"
              zIndex="overlay"
              onClick={() => animateHero(false)}
            >
              <Icon as={FaArrowLeft} />
            </Box>
            <SlideShow heroImageRef={heroImageRef} images={item.images} />
            <Box
              ref={heartRef}
              position="absolute"
              bottom="5"
              right="-100px"
              zIndex="popover"
            >
              <IconButton
                variant="outline"
                aria-label="Heart Button"
                icon={<FaHeart />}
                isRound
              />
            </Box>
          </Box>
          <Box h="35%" position="relative">
            <Box
              ref={detailsRef}
              position="absolute"
              top="300"
              width="100%"
              height="100%"
              boxShadow="dark-lg"
              borderTopRadius="2xl"
              bg="white"
              zIndex="overlay"
              paddingX="6"
            >
              <Flex justify="center">
                <Box
                  marginTop="2"
                  d="inline-block"
                  bg="gray.300"
                  width={50}
                  height={1}
                  rounded="full"
                ></Box>
              </Flex>
              <Flex height="100%" direction="column" justify="space-around">
                <Box>
                  <Text fontWeight="bold" fontSize="xl">
                    {item.name}
                  </Text>
                  <Text color="gray">${item.price}</Text>
                  <Text marginTop="2">Size</Text>
                  <Flex>
                    {sizes.map((size, idx) => (
                      <Box
                        key={idx}
                        marginX="1"
                        height={6}
                        width={6}
                        boxShadow="md"
                      >
                        <Text textAlign="center">{size}</Text>
                      </Box>
                    ))}
                  </Flex>
                </Box>
                <Button bg="gray.800" w="100%" color="white" rounded="full">
                  Add to Cart
                </Button>
              </Flex>
            </Box>
          </Box>
        </Flex>
      </Container>
    </>
  )
}

export default Gallery
