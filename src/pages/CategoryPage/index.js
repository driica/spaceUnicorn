import React from "react";
import { CategoryContainer } from "./styled";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductsContainer from "../../components/ProductsContainer";

const CategoryPage = ({
  products,
  handleArrayProducts,
  productsRender,
  handleScreen,
  titleCategory,
  handleTitleCategory,
  accessoriesCategory,
  cushionsCategory,
  toysCategory,
  search,
  setSearch,
  handleSearch,
  lowestPrice,
  setLowestPrice,
  biggestPrice,
  setBiggestPrice,
  ordination,
  setOrdination,
  newArrayProducts,
  setCartIsOpen,
  itemAmount,
  setMenuMobileIsOpen,
}) => {
  return (
    <CategoryContainer>
      <Header
        products={products}
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        accessoriesCategory={accessoriesCategory}
        cushionsCategory={cushionsCategory}
        toysCategory={toysCategory}
        search={search}
        setSearch={setSearch}
        handleSearch={handleSearch}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
        setCartIsOpen={setCartIsOpen}
        itemAmount={itemAmount}
        setMenuMobileIsOpen={setMenuMobileIsOpen}
      />
      <ProductsContainer
        productsRender={productsRender}
        titleCategory={titleCategory}
        lowestPrice={lowestPrice}
        setLowestPrice={setLowestPrice}
        biggestPrice={biggestPrice}
        setBiggestPrice={setBiggestPrice}
        ordination={ordination}
        setOrdination={setOrdination}
        newArrayProducts={newArrayProducts}
      />
      <Footer
        handleArrayProducts={handleArrayProducts}
        handleScreen={handleScreen}
        handleTitleCategory={handleTitleCategory}
        accessoriesCategory={accessoriesCategory}
        cushionsCategory={cushionsCategory}
        toysCategory={toysCategory}
        setLowestPrice={setLowestPrice}
        setBiggestPrice={setBiggestPrice}
        setOrdination={setOrdination}
      />
    </CategoryContainer>
  );
};

export default CategoryPage;
