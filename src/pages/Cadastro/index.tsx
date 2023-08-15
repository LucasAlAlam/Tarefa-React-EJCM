import { CheckSenha } from './style';
import { Link } from "react-router-dom";
import { checarSenha } from './checarSenha';
import { HomeDiv, LogoHeader, DivFundo, Acao, Input, Botao, Insert } from "../../components/style";
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'

type FormValues = {
    NomeCompleto: string;
    Email: string;
    Senha: string;
    ConfirmarSenha: string
}

export default function Cadastro() {
    const Validacao = Yup.object().shape({
        NomeCompleto: Yup.string().required('Campo Obrigatório'),
        Email: Yup.string()
            .required('Campo Obrigatório')
            .email('O Email não é válido'),
        Senha: Yup.string()
            .required('Campo Obrigatório')
            .min(8, 'A senha deve ter mais que 8 caracteres'),
        ConfirmarSenha: Yup.string()
            .required('Campo Obrigatório')
            .oneOf([Yup.ref('Senha')], 'Senhas não coincidem'),
    })

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm<FormValues>({
        resolver: yupResolver(Validacao)
    });

    const onSubmit = (data: FormValues) => {
        console.log(JSON.stringify(data, null, 2));
        const expires = new Date(Date.now() + 2 * 864e5).toUTCString()
        document.cookie = "Email" + '=' + encodeURIComponent(data.Email) + '; expires=' + expires + '; path=' + '/'
        document.cookie = "NomeCompleto" + '=' + encodeURIComponent(data.NomeCompleto) + '; expires=' + expires + '; path=' + '/'
        document.cookie = "Senha" + '=' + encodeURIComponent(data.Senha) + '; expires=' + expires + '; path=' + '/'
        alert('Cadastro realizado com Sucesso!')
        reset()
    }


    return (
        <HomeDiv>
            <LogoHeader>Gakalu</LogoHeader>
            <DivFundo>
                <Acao>Cadastro</Acao>
                <Insert onSubmit={handleSubmit(onSubmit)}>

                    <div className='form-group'>
                        <Input placeholder='Nome Completo'
                            {...register('NomeCompleto')}
                            className={`form-control ${errors.NomeCompleto ? 'is-invalid' : ''}`}
                        />
                        <div className='invalid-feedback'>{errors.NomeCompleto?.message}</div>
                    </div>

                    <div className='form-group'>
                        <Input placeholder='Email'
                            {...register('Email')}
                            className={`form-control ${errors.Email ? 'is-invalid' : ''}`}
                        />
                        <div className='invalid-feedback'>{errors.Email?.message}</div>
                    </div>

                    <div className='form-group'>
                        <Input placeholder='Senha' type='password' id='password' onSubmit={checarSenha} onKeyUp={checarSenha}
                            {...register('Senha')}
                            className={`form-control ${errors.Senha ? 'is-invalid' : ''}`}
                        />
                        <div className='invalid-feedback'>{errors.Senha?.message}</div>
                    </div>
                    <CheckSenha id='checkpass'>Força da senha: <div id="strongPass"></div> </CheckSenha>

                    <div className='form-group'>
                        <Input placeholder='Confirmar Senha' id='confirmarSenha' type='password'
                            {...register('ConfirmarSenha')}
                            className={`form-control ${errors.ConfirmarSenha ? 'is-invalid' : ''}`}
                        />
                        <div className='invalid-feedback'>{errors.ConfirmarSenha?.message}</div>
                    </div>

                    <div className='form-group'>
                        <Botao type='submit' className='btn btn-primary'>Cadastrar</Botao>
                    </div>
                </Insert>
            </DivFundo>
            <Link to='/'>Voltar ao Login</Link>
        </HomeDiv>
    )
}


