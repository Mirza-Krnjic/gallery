import { client } from "../lib/client"
import { Product, FooterBanner, HeroBanner, Footer } from "../components"

export default function Home({ products, bannerData }) {
  const popularProducts = products.slice(0, 9)

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <div></div>
        <h2>Najpopularnije slike</h2>
        <p>Razni umjetnici i njihova djela</p>
      </div>
      <div className="products-container">
        {popularProducts?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner />
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  const bannerQuery = '*[_type == "banner"]'
  const bannerData = await client.fetch(bannerQuery)

  const okvirQuery = '*[_type == "okvir"]'
  const okvirData = await client.fetch(okvirQuery)

  return {
    props: { products, bannerData, okvirData },
  }
}
