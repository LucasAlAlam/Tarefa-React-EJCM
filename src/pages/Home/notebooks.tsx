import { InfoProduto } from './style'

import ImgNotebook from '../../assets/notebook.png'

export default function Notebooks() {
    return (
        <InfoProduto>
                <img src={ImgNotebook} alt="Imagem do produto"/>
                <figcaption>Notebook Samsung 8GB 256GB SSD</figcaption><br/>
                <figcaption>R$5.339,23</figcaption>
        </InfoProduto>
    )
}