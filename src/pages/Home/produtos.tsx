import { InfoProduto, ExibeProdutos } from "./style"

import Computadores from '../../assets/computador.png'
import Notebooks from '../../assets/notebook.png'
import Consoles from '../../assets/console.png'
import PCIS from '../../assets/pci.png'
import Acessorios from '../../assets/acessórios.png'
import Jogos from '../../assets/jogo.png'

export default class Produtos {
    private DadosProdutos = {
        computador: {
            nome: 'Computador Dell 8GB RAM 1TB HD',
            valor: 4893.93,
            imagem: Computadores
        },
        acessorio: {
            nome: 'Teclado Multilaser USB',
            valor: 57.88,
            imagem: Acessorios
        },
        pci: {
            nome: 'Memória RAM 1GB DDR2',
            valor: 23.57,
            imagem: PCIS
        },
        console: {
            nome: 'Playstation 2',
            valor: 5339.23,
            imagem: Consoles
        },
        jogo: {
            nome: 'Guitar Hero III para PS2',
            valor: 149.99,
            imagem: Jogos
        },
        notebook: {
            nome: 'Notebook Samsung 8GB 256GB SSD',
            valor: 5339.23,
            imagem: Notebooks
        }
    }

    public getComputadores() {
        return (
            <ExibeProdutos>
                <InfoProduto>
                    <img src={this.DadosProdutos.computador.imagem} alt="Imagem do produto" />
                    <figcaption>{this.DadosProdutos.computador.nome}</figcaption><br />
                    <figcaption>R${this.DadosProdutos.computador.valor}</figcaption>
                </InfoProduto>
            </ExibeProdutos>
        )
    }

    public getNotebooks() {
        return (
            <ExibeProdutos>
                <InfoProduto>
                    <img src={this.DadosProdutos.notebook.imagem} alt="Imagem do produto" />
                    <figcaption>{this.DadosProdutos.notebook.nome}</figcaption><br />
                    <figcaption>R${this.DadosProdutos.notebook.valor}</figcaption>
                </InfoProduto>
            </ExibeProdutos>
        )
    }

    public getConsoles() {
        return (
            <ExibeProdutos>
                <InfoProduto>
                    <img src={this.DadosProdutos.console.imagem} alt="Imagem do produto" />
                    <figcaption>{this.DadosProdutos.console.nome}</figcaption><br />
                    <figcaption>R${this.DadosProdutos.console.valor}</figcaption>
                </InfoProduto>
            </ExibeProdutos>
        )
    }

    public getPCI() {
        return (
            <ExibeProdutos>
                <InfoProduto>
                    <img src={this.DadosProdutos.pci.imagem} alt="Imagem do produto" />
                    <figcaption>{this.DadosProdutos.pci.nome}</figcaption><br />
                    <figcaption>R${this.DadosProdutos.pci.valor}</figcaption>
                </InfoProduto>
            </ExibeProdutos>
        )
    }

    public getAcessorios() {
        return (
            <ExibeProdutos>
                <InfoProduto>
                    <img src={this.DadosProdutos.acessorio.imagem} alt="Imagem do produto" />
                    <figcaption>{this.DadosProdutos.acessorio.nome}</figcaption><br />
                    <figcaption>R${this.DadosProdutos.acessorio.valor}</figcaption>
                </InfoProduto>
            </ExibeProdutos>
        )
    }

    public getJogos() {
        return (
            <ExibeProdutos>
                <InfoProduto>
                    <img src={this.DadosProdutos.jogo.imagem} alt="Imagem do produto" />
                    <figcaption>{this.DadosProdutos.jogo.nome}</figcaption><br />
                    <figcaption>R${this.DadosProdutos.jogo.valor}</figcaption>
                </InfoProduto>
            </ExibeProdutos>
        )
    }
}