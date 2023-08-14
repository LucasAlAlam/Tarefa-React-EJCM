import { Cabecalho, Lupa, MenuDiv, NomeProduto, Perfil, PesquisaDiv, HomeDiv, Input, ProdutosDiv } from './style'


import IconePerfil from '../../assets/Perfil.svg'
import IconeLupa from '../../assets/material-symbols_search.svg'
import IconeCarrinho from '../../assets/icone_carrinho.svg'
import IconeMenuHamburger from '../../assets/icone_menu_hamburger.svg'


import Produtos from './produtos'

const produtos = new Produtos()
export default function Home() {
    return (
        <HomeDiv>
            <Cabecalho>
                <Perfil src={IconePerfil} alt='Icone de Perfil' />
                <PesquisaDiv>
                    <Input placeholder='Pesquisar' />
                    <Lupa src={IconeLupa} alt='Icone para pesquisa' />
                </PesquisaDiv>
                <MenuDiv>
                    <img src={IconeCarrinho} alt='Icone do carrinho de compras' />
                    <img src={IconeMenuHamburger} alt='Icone do menu de navegação' />
                </MenuDiv>
            </Cabecalho>
            <NomeProduto id='Computadores'>Computadores</NomeProduto>
            <ProdutosDiv>
                {produtos.getComputadores()}
                {produtos.getComputadores()}
                {produtos.getComputadores()}
                {produtos.getComputadores()}
                {produtos.getComputadores()}
                {produtos.getComputadores()}
                {produtos.getComputadores()}
                {produtos.getComputadores()}
            </ProdutosDiv>
            

            <NomeProduto>Notebooks</NomeProduto>
            <ProdutosDiv>
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                {produtos.getNotebooks()}
                
            </ProdutosDiv>


            <NomeProduto>Consoles</NomeProduto>
            <ProdutosDiv>
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                {produtos.getConsoles()}
                
            </ProdutosDiv>

            <NomeProduto>PCI's</NomeProduto>
            <ProdutosDiv>
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                {produtos.getPCI()}
                
            </ProdutosDiv>

            <NomeProduto>Acessórios</NomeProduto>
            <ProdutosDiv>
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                {produtos.getAcessorios()}
                
            </ProdutosDiv>

            <NomeProduto>Jogos</NomeProduto>
            <ProdutosDiv>
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                {produtos.getJogos()}
                
            </ProdutosDiv>
        </HomeDiv >
    )
}