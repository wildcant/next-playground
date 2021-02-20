import { Box, Container, Flex, Text /*Image*/ } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { Category } from '../interfaces'
import Image from 'next/image'
type Props = {
  categories: Category[]
  activeCategory: Category
}

const Gallery = ({ categories, activeCategory }: Props) => {
  const items = activeCategory?.items ?? []

  return (
    <Container padding="0">
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
          <Box key={idx} minW={200} marginRight="4" borderRadius="20">
            <Box border="1px" borderColor="gray.100">
              <Image
                src={item.image}
                layout="responsive"
                width="400"
                height="auto"
              />
            </Box>
            <Flex justifyContent="space-between" marginTop="2">
              <Text>{item.name}</Text>
              <Text>${item.price}</Text>
            </Flex>
          </Box>
        ))}
      </Flex>
    </Container>
  )
}

export default Gallery
