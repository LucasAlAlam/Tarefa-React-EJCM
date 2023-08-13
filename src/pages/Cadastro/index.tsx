import { Acao, Botao, CheckSenha, DivFundo, HomeDiv, Input, LogoHeader } from './style';

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
                <Botao>Cadastrar</Botao>
            </DivFundo>
        </HomeDiv>
    )
}