import React, { useState } from "react"
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai"

import { client, urlFor } from "../../lib/client"
import { Product } from "../../components"
import { useStateContext } from "../../context/StateContext"

const ProductDetails = ({ product, products }) => {
  const { image, name, details, price, width, height } = product
  const [index, setIndex] = useState(0)
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()

  const handleBuyNow = () => {
    onAdd(product, qty)

    setShowCart(true)
  }

  return (
    <div>
      <div className="product-detail-container">
        <div>
          <div className="image-container">
            <img
              src={urlFor(image && image[index])}
              className="product-detail-image"
            />
          </div>
          <div className="small-images-container">
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item)}
                className={
                  i === index ? "small-image selected-image" : "small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{name}</h1>
          <h4>Detaljno: </h4>
          <p>{details}</p>
          <p className="price">{price} EUR</p>
          <div style={{ marginTop: "25px" }}>
            <strong>Dimenzije: </strong>
            <span>{width}</span>
            {" x "}
            <span>{height}</span>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Dodaj u korpu
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Kupi
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>Predlažemo:</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `

  const products = await client.fetch(query)

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current,
    },
  }))

  return {
    paths,
    fallback: "blocking",
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query)
  const products = await client.fetch(productsQuery)

  return {
    props: { products, product },
  }
}

export default ProductDetails
