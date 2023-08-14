import styled from 'styled-components'
import { global } from '../../globalStyle'

export const Google = styled.button `
    backgroung: ${global.colors.branco};
    border: none;
    color: ${global.colors.preto};
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-size: 5mm;
    width: 70mm;
    padding: 1.25mm;
`;

export const AlterRotas = styled.div `
    display: flex;
    justify-content: space-between;
    color: ${global.colors.branco};
    width: 235px;
    font-size: 2.75mm;
`;