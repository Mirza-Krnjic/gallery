import React from "react"
import { client } from "../lib/client"
import { Product } from "../components"
import ReactPaginate from "react-paginate"
import styles from "./Galerija.module.css"
import { useState } from "react"

function Galerija({ products }) {
  const [pageNumer, setPageNumber] = useState(0)
  const usersPerPage = 10
  const pagesVisited = pageNumer * usersPerPage

  const displayUsers = products
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((product) => {
      return <Product key={product._id} product={product} />
    })

  const pageCount = Math.ceil(products.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <>
      <div className="products-heading">
        <h2>Galerija</h2>
        <p>Razni umjetnici i njihova djela</p>
      </div>
      <div className={styles["pagination-container"]}>
        <ReactPaginate
          previousLabel={"Prethodna"}
          nextLabel={"Sljedeća"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBtns}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabledBtn"}
          activeClassName={styles.paginationActive}
        />
      </div>
      <div className="products-container">
        {/* OVOOOO */}
        {/* {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))} */}
        {displayUsers}
      </div>
      <div className={styles["pagination-container"]}>
        <ReactPaginate
          previousLabel={"Prethodna"}
          nextLabel={"Sljedeća"}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={styles.paginationBtns}
          previousLinkClassName={"previousBtn"}
          nextLinkClassName={"nextBtn"}
          disabledClassName={"paginationDisabledBtn"}
          activeClassName={styles.paginationActive}
        />
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

export default Galerija
