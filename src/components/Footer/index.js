import React from "react";
import {
  FooterStyled,
  NavBar,
  LogoDiv,
  OptionsList,
  InfoStore,
  Copyright,
  GitHubIcon,
  LinkedinIcon,
} from "./styled";
import Logo from "../../assets/imgs/logouni.png";

const Footer = ({
  handleArrayProducts,
  handleScreen,
  handleTitleCategory,
  accessoriesCategory,
  cushionsCategory,
  toysCategory,
  setLowestPrice,
  setBiggestPrice,
  setOrdination,
}) => {
  return (
    <FooterStyled>
      <InfoStore>
        <LogoDiv src={Logo} alt="Logo Space Kids" />
        <NavBar>
          <OptionsList>
            <p>
              <strong>Loja</strong>
            </p>
            <li
              onClick={() => {
                handleArrayProducts(accessoriesCategory);
                handleScreen(2);
                handleTitleCategory("Acessórios");
                setLowestPrice(0);
                setBiggestPrice(1000);
                setOrdination("");
              }}
            >
              Acessórios
            </li>
            <li
              onClick={() => {
                handleArrayProducts(cushionsCategory);
                handleScreen(2);
                handleTitleCategory("Almofadas");
                setLowestPrice(0);
                setBiggestPrice(1000);
                setOrdination("");
              }}
            >
              Almofadas
            </li>
            <li
              onClick={() => {
                handleArrayProducts(toysCategory);
                handleScreen(2);
                handleTitleCategory("Brinquedos");
                setLowestPrice(0);
                setBiggestPrice(1000);
                setOrdination("");
              }}
            >
              Brinquedos
            </li>
            <li
              onClick={() => {
                handleScreen(3);
              }}
            >
              Contato
            </li>
          </OptionsList>

          <OptionsList>
            <p>
              <strong>space unicorn</strong>
            </p>
            <li>Sobre nós</li>
            <li>Frete e Prazo de Entrega</li>
            <li>Perguntas frequentes</li>
            <li>Rastreamento de pedidos</li>
          </OptionsList>
        </NavBar>
      </InfoStore>
      <Copyright>
        <p>space unicorn © 2023. Todos os direitos reservados.</p>
        <p>Desenvolvido por Adriana Beatriz.</p>
        <div>
          <a href="https://github.com/driica/" target={"blank"}>
            <GitHubIcon />
          </a>
          <a href="https://linkedin.com/in/adrianabeatriz3/" target={"blank"}>
            <LinkedinIcon />
          </a>
        </div>
      </Copyright>
    </FooterStyled>
  );
};

export default Footer;
