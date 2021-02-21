import { Flex } from '@chakra-ui/react'
import { useRouter } from 'next/dist/client/router'
import Gallery from '../../components/Gallery'
import Layout from '../../components/Layout'
import { categories } from '../../utils/sample-data'

const ShopPage = () => {
  const router = useRouter()
  const { category } = router.query
  const currentCat = categories.find((cat) => cat.name === category)

  if (!currentCat) {
    return null
  }

  return (
    <Layout title="shopping">
      <Flex>
        <Gallery categories={categories} activeCategory={currentCat} />
      </Flex>
    </Layout>
  )
}

export default ShopPage
