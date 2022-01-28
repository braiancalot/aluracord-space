import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import React from 'react';
import { useRouter } from 'next/router'
import appConfig from '../config.json'

function Title(props) {
    const Tag = props.tag || 'h1'
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['800']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    )
}




// function HomePage() {
//     return (
//     <div>
//         <GlobalStyle/>
//         <Title tag = "h2">Olá, pessoas!</Title>
//         <h2>Discord - Alura Matrix</h2>


//     </div>
//     )
// }
//export default HomePage

export default function PaginaInicial() {
    const [username, setUsername] = React.useState('braiancalot');
    const [repositorios, setRepositorios] = React.useState('');
    const roteamento = useRouter();
    
    fetch(`https://api.github.com/users/${username}`)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(respostaConvertida){
            setRepositorios(respostaConvertida.public_repos)
            return respostaConvertida;
        })
    
    

    
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary['000'],
                    backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/nexus-space-digital-universe-4k-rt.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-around',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '700px',
                        borderRadius: '5px', padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.neutrals['050'],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit = {function (infoDoEvento){
                            infoDoEvento.preventDefault();
                            console.log('Clicou')
                            // Opção padrao para troca de página
                            //window.location.href = '/chat'
                            // Opção Next
                            roteamento.push(`/chat?username=${username}`)
                            
                        }}
                        
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Title tag="h1">Boas vindas de volta!</Title>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals['100'] }}>
                            {appConfig.name}
                        </Text>

                        {/* <input 
                            type='text'
                            value = {username}
                            onChange={function (event){
                                console.log(event.target.value)
                                // Onde ta o valor?
                                const valor = event.target.value
                                // Trocar valor da variavel através do React
                                setUsername(valor)
                            }}
                        /> */}
                        <TextField
                            value = {username}
                            onChange={function (event){
                                console.log(event.target.value)
                                // Onde ta o valor?
                                const valor = event.target.value
                                // Trocar valor da variavel através do React
                                setUsername(valor)
                            }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[400],
                                    mainColor: appConfig.theme.colors.neutrals[400],
                                    mainColorHighlight: appConfig.theme.colors.primary[900],
                                    backgroundColor: appConfig.theme.colors.neutrals['000'],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals['050'],
                                mainColor: appConfig.theme.colors.primary['800'],
                                mainColorLight: appConfig.theme.colors.primary[700],
                                mainColorStrong: appConfig.theme.colors.primary['900'],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            backgroundColor: appConfig.theme.colors.neutrals[400],
                            border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[500],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        {username.length > 1 && <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />}
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[999],
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                        
                        <br/>

                        {username.length > 1 && <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[999],
                                backgroundColor: appConfig.theme.colors.neutrals[700],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            Repositórios: {repositorios}
                        </Text>}
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}