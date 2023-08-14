import { InfoProduto } from './style'

import ImgConsole from '../../assets/console.png'

export default function Consoles() {
    return (
        <InfoProduto>
                <img src={ImgConsole} alt="Imagem do produto"/>
                <figcaption>Plastation 2</figcaption><br/>
                <figcaption>R$5.339,23</figcaption>
        </InfoProduto>
    )
}