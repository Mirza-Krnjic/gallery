import React from "react"
import { client } from "../lib/client"
import { Product } from "../components"

function galerija({ products }) {
  return (
    <>
      <div className="products-heading">
        <h2>Galerija</h2>
        <p>Razni umjetnici i njihova djela</p>
      </div>
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      {/* <FooterBanner footerBanner={bannerData && bannerData[0]} /> */}
    </>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]'
  const products = await client.fetch(query)

  // const bannerQuery = '*[_type == "banner"]'
  // const bannerData = await client.fetch(bannerQuery)

  return {
    props: { products },
  }
}

export default galerija
