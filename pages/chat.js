import { Box } from '@skynexui/components'
import appConfig from '../config.json'

function Title(props) {
    const Tag = props.tag || 'h1'
    return (
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['700']};
                font-size: 40px;
                font-weight: 600;
                text-align: center;
            }
            `}</style>
        </>
    )
}

export default function PaginaDoChat() {
    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    backgroundColor: appConfig.theme.colors.primary['400'],
                    backgroundImage: 'url(https://images.hdqwalls.com/wallpapers/nexus-space-digital-universe-4k-rt.jpg)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        //display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
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
                    <Title tag="h1">Página do Chat!</Title>
                </Box>

            </Box>
        </>
    )
}