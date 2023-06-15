import React from "react";
import {
  HeaderInfos,
  HeaderList,
  ListProducts,
  Products,
  ShowProducts,
} from "./styled";
import Ordination from "../Ordination";

const ProductsContainer = ({
  productsRender,
  titleCategory,
  lowestPrice,
  setLowestPrice,
  biggestPrice,
  setBiggestPrice,
  ordination,
  setOrdination,
  newArrayProducts,
}) => {
  return (
    <ShowProducts>
      <ListProducts>
        <HeaderList>
          <HeaderInfos>
            <h2>{titleCategory}</h2>
            <p>
              <strong>{newArrayProducts.length}</strong> produtos encontrados
            </p>
          </HeaderInfos>
          <Ordination ordination={ordination} setOrdination={setOrdination} />
        </HeaderList>
        <Products>{productsRender()}</Products>
      </ListProducts>
    </ShowProducts>
  );
};

export default ProductsContainer;
