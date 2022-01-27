import { Box, Text, TextField, Image, Button } from '@skynexui/components';
import React from 'react';
import appConfig from '../config.json';

export default function ChatPage() {
    const [mensagem, setMensagem] = React.useState('')
    const [listaDeMensagens, setListaDeMensagens] = React.useState([])

    function handleNovaMensagem(novaMensagem) {
        const mensagem = {
            id: listaDeMensagens.length + 1,
            de: 'braiancalot',
            texto: novaMensagem
        }

        setListaDeMensagens([
            mensagem,
            ...listaDeMensagens
        ])
        setMensagem('')

    }

    function handleDeletarMensagem(id){
        setListaDeMensagens(listaDeMensagens.filter(mensagemAtual => {
            mensagemAtual.id !== id;
        }))
    }

    return (
        <Box
            styleSheet={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                backgroundColor: appConfig.theme.colors.primary['000'],
                backgroundImage: `url(https://images.hdqwalls.com/wallpapers/nexus-space-digital-universe-4k-rt.jpg)`,
                backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                color: appConfig.theme.colors.neutrals['000']
            }}
        >
            <Box
                styleSheet={{
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                    borderRadius: '5px',
                    backgroundColor: appConfig.theme.colors.neutrals[400],
                    height: '100%',
                    maxWidth: '95%',
                    maxHeight: '95vh',
                    padding: '32px',
                }}
            >
                <Header />
                <Box
                    styleSheet={{
                        position: 'relative',
                        display: 'flex',
                        flex: 1,
                        height: '80%',
                        backgroundColor: appConfig.theme.colors.neutrals[500],
                        flexDirection: 'column',
                        borderRadius: '5px',
                        padding: '16px',
                    }}
                >
                    <MessageList mensagens={listaDeMensagens} handleDeletarMensagem={handleDeletarMensagem}/>
                    {/* {listaDeMensagens.map(mensagemAtual => {
                        return (
                            <li key={mensagemAtual.id}>
                                {mensagemAtual.de}: {mensagemAtual.texto}
                            </li>
                        )
                    })} */}

                    <Box
                        as="form"
                        styleSheet={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        <TextField
                            value={mensagem}
                            onChange={event => {
                                const valor = event.target.value
                                setMensagem(valor);
                            }}
                            onKeyPress={event => {
                                if (event.key === "Enter") {
                                    event.preventDefault();
                                    handleNovaMensagem(mensagem);
                                }

                            }}
                            placeholder="Insira sua mensagem aqui..."
                            type="textarea"
                            styleSheet={{
                                width: '100%',
                                border: '0',
                                resize: 'none',
                                borderRadius: '5px',
                                padding: '6px 8px',
                                backgroundColor: appConfig.theme.colors.neutrals[400],
                                marginRight: '12px',
                                color: appConfig.theme.colors.neutrals['000'],
                            }}
                        />
                        <Button
                            size="lg"
                            variant='primary'
                            colorVariant='neutral'
                            label='OK'
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals['000'],
                                mainColor: appConfig.theme.colors.primary['600'],
                                mainColorLight: appConfig.theme.colors.primary[500],
                                mainColorStrong: appConfig.theme.colors.primary['800'],
                            }}
                            styleSheet={{
                                borderRadius:'20px',
                                marginBottom: '8px'

                            }}
                            onClick={() => {
                                handleNovaMensagem(mensagem);
                            }}
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}

function Header() {
    return (
        <>
            <Box styleSheet={{ width: '100%', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                <Text variant='heading5'>
                    Chat
                </Text>
                <Button
                    variant='tertiary'
                    colorVariant='neutral'
                    label='Logout'
                    href="/"
                    buttonColors={{
                        contrastColor: appConfig.theme.colors.neutrals['050'],
                        mainColor: appConfig.theme.colors.primary['800'],
                        mainColorLight: appConfig.theme.colors.primary[700],
                        mainColorStrong: appConfig.theme.colors.primary['900'],
                    }}
                />
            </Box>
        </>
    )
}

function MessageList(props) {
    console.log(props)
    return (
        <Box
            tag="ul"
            styleSheet={{
                overflow: 'auto',
                display: 'flex',
                flexDirection: 'column-reverse',
                flex: 1,
                color: appConfig.theme.colors.neutrals["000"],
                marginBottom: '16px',
            }}
        >
            {props.mensagens.map(mensagem => {
                return (
                    <Text
                        key={mensagem.id}
                        tag="li"
                        styleSheet={{
                            borderRadius: '5px',
                            padding: '6px',
                            marginBottom: '12px',
                            hover: {
                                backgroundColor: appConfig.theme.colors.neutrals[600],
                            }
                        }}
                    >
                        <Box
                            styleSheet={{
                                marginBottom: '8px',
                            }}
                        >
                            <Image
                                styleSheet={{
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    display: 'inline-block',
                                    marginRight: '8px',
                                }}
                                src={`https://github.com/${mensagem.de}.png`}
                            />
                            <Text tag="strong">
                                {mensagem.de}
                            </Text>
                            <Text
                                styleSheet={{
                                    fontSize: '10px',
                                    marginLeft: '8px',
                                    color: appConfig.theme.colors.neutrals[300],
                                }}
                                tag="span"
                            >
                                {(new Date().toLocaleDateString())}
                            </Text>
                            <Button
                                label='X'
                                buttonColors={{
                                    contrastColor: appConfig.theme.colors.neutrals['000'],
                                    mainColor: 'transparent',
                                    mainColorLight: appConfig.theme.colors.primary[600],
                                    mainColorStrong: appConfig.theme.colors.primary['600'],
                                }}
                                styleSheet={{
                                    borderRadius:'2px',
                                    position: 'absolute',
                                    right: '20px',
                                    padding: '5px'
    
                                }}
                                onClick={() => {
                                    //event.preventDefault();
                                    props.handleDeletarMensagem(mensagem.id);
                                }}
                            />
                        </Box>
                        {mensagem.texto}
                    </Text>
                );
            })}

        </Box>
    )
}