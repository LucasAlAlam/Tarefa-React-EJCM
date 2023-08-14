import styled from 'styled-components'
import {global} from '../../globalStyle'

export const HomeDiv = styled.div `
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    background: ${global.colors.azulBackground};
`;

//---------------- Cabeçalho -------------------

export const Cabecalho = styled.header `
    background: ${global.colors.azulComponent};
    width: 99.5%;
    height: 3.5%;
    padding: 0.25%;
    display: flex;
    justify-content: space-between;
`;

export const Perfil = styled.img `
    position: relative;
    left: 1%;
`;

export const Input = styled.input `
    background: transparent;
    border: none;
    height: 100%;
    font-size: 5mm;
    width: 90%;
    color: ${global.colors.branco}
`;

export const PesquisaDiv = styled.div `
    width: 30%;
    background: ${global.colors.preto};
    display: flex;
    justify-content: space-around;
    aling-items: center;
    border-radius: 20px;
`;

export const Lupa = styled.img `
    position: relative;
    width: 7%;
`;

export const MenuDiv = styled.div `
    width: 5%;
    display: flex;
    justify-content: space-around;
`;

//------------- Corpo --------------------

export const NomeProduto = styled.h2 `
    color: ${global.colors.branco};
`;

export const ExibeProdutos = styled.div `
    background: ${global.colors.branco};
    min-width: 300px;
    max-width: 300px;
    height: 300px;
    border-radius: 20px;
    margin: 0 0 0 1%;
    position: relative;
`;

export const Produtos = styled.div `
    display: flex;
    width: 100%;
    overflow-x: auto;
`;

export const InfoProduto = styled.figure `
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
        height: 80%;
        width: 80%;    
    }
`;