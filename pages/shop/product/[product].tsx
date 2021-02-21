import { Box, Button, Flex, Text } from '@chakra-ui/react'
import SlideShow from '../../../components/SlideShow'
import { items } from '../../../utils/sample-data'

const Product = () => {
  const item = items[0]
  const sizes = ['S', 'M', 'L', 'XL']

  return (
    <Flex h="100vh" direction="column" justify="space-between">
      <Box h="65%">
        <SlideShow images={item.images} />
      </Box>
      <Box
        h="35%"
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
        <Text fontWeight="bold" fontSize="xl">
          {item.name}
        </Text>
        <Text color="gray">${item.price}</Text>
        <Text marginTop="2">Size</Text>
        <Flex>
          {sizes.map((size, idx) => (
            <Box key={idx} marginX="1" height={6} width={6} boxShadow="md">
              <Text textAlign="center">{size}</Text>
            </Box>
          ))}
        </Flex>
        <Button
          bg="gray.800"
          w="100%"
          color="white"
          rounded="full"
          marginTop="4"
        >
          Add to Cart
        </Button>
      </Box>
    </Flex>
  )
}

export default Product
