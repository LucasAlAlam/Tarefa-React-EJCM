import styled from 'styled-components'
import { global } from '../globalStyle'

export const HomeDiv = styled.div `
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    background: ${global.colors.azulBackground};
`;

export const LogoHeader = styled.h1 `
    color: ${global.colors.branco};
    font-size: 20mm;
`;

export const DivFundo = styled.div `
    background: ${global.colors.azulComponent};
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 15px;
`;

export const Acao = styled.h2 `
    color: ${global.colors.branco};
    font-size: 10mm;
    margin: 3mm;
`;

export const Input = styled.input `
    background: ${global.colors.preto};
    border-radius: 20px;
    border: none;
    height: 12mm;
    margin: 4mm;
    font-size: 7mm;
    color: ${global.colors.branco}
`;

export const Botao = styled.button `
    background: ${global.colors.azulButton};
    border: none;
    color: ${global.colors.branco};
    height: 12mm;
    width: 150%;
    margin: 5mm;
    font-size: 10mm;
    text-align: center;
    position: relative;
    right: 60px;
`;