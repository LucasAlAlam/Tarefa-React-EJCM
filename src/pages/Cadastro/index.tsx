import { Acao, Botao, CheckSenha, DivFundo, HomeDiv, Input, LogoHeader } from './style';
import { Link } from "react-router-dom";
export default function Cadastro() {
    return (
        <HomeDiv>
            <LogoHeader>Gakalu</LogoHeader>
            <DivFundo>
                <Acao>Cadastro</Acao>
                <Input placeholder='Nome Completo'/>
                <Input placeholder='Email' type='email'/>
                <Input placeholder='Senha' type='password' id='senha'/>
                <CheckSenha id='checkpass'>Força da senha: </CheckSenha>
                <Input placeholder='Confirmar Senha' id='confirmarSenha' type='password'/>
                <Link to='/'>
                    <Botao>Cadastrar</Botao>
                </Link>
            </DivFundo>
        </HomeDiv>
    )
}