import {Box, Button, Text, TextField, Image} from '@skynexui/components'; 
import react from 'react';
import { useRouter } from 'next/router';
import appConfig from '../config.json';

function Title(props){
  console.log({props});
  const Tag = props.tag || 'h1';
  
    return (
      <>
          <Tag>{props.children}</Tag> 
          <style jsx>{`
          ${Tag} {
            color: ${appConfig.theme.colors.neutrals['000']};
            fonte-size: 24px;
            fonte-weight: 600; 
          }
        `}</style>
     </>
    );
}

//  Componente React
//function HomePage() {
//    JSX
//      return (
//        <div>
//          {  <GlobalStyle /> }
//          <Title tag="h1">Boas vindas de volta!</Title>
//          <h2>Discord - Alura Matrix</h2>
//        </div>
//      )
//}
  
  //export default HomePage

  export default function PaginaInicial() {
   // const username = 'gabriel01souza';
  const [username, setUsername] = react.useState('gabriel01souza');
  const roteamento = useRouter();

    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.primary[500],
            // backgroundImage: 'url(https://virtualbackgrounds.site/wp-content/uploads/2020/08/the-matrix-digital-rain.jpg)',
             backgroundImage: 'url(https://img.freepik.com/fotos-gratis/folhas-de-palmeira-tropical-verde-escura-isoladas-em-fundo-gradiente-rosa-roxo-design-para-cartoes-de-convite-folhetos-modelos-de-design-abstrato-para-cartazes-capas-papeis-de-parede-com-copyspace-para-texto_489646-28.jpg?size=626&ext=jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: appConfig.theme.colors.neutrals[700],
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={function (infosDoEvento){
                infosDoEvento.preventDefault();
                console.log('Alguém submeteu o fomr');
                // roteamento.push('/chat' + username);
                roteamento.push(`/chat?username=${username}`);
                // window.location.href = '/chat';
              }}
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Title tag="h2">Bem vindo ao Aluracord!</Title>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                {appConfig.name}
              </Text>
              
              {/* <input 
                type={"text"}
                value={username}
                onChange={function (event){
                    console.log('usuario digitou', event.target.value)
                    // Onde ta o valor?
                    const valor = event.target.value;
                    // Trocar o valor da variavel
                    // através do react e avise quem precisa
                    setUsername(valor);
                }}
              /> */}
              <TextField
                value={username}
                onChange={function (event){
                  console.log('usuario digitou', event.target.value)
                  // Onde ta o valor?
                  const valor = event.target.value;
                  // Trocar o valor da variavel
                  // através do react e avise quem precisa
                  setUsername(valor);
              }}
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[200],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[500],
                    backgroundColor: appConfig.theme.colors.neutrals[800],
                  },
                }}
              />
              <Button
                type='submit'
                label='Login'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
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
                backgroundColor: appConfig.theme.colors.neutrals[800],
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={`https://github.com/${username}.png`}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[200],
                  backgroundColor: appConfig.theme.colors.neutrals[900],
                  padding: '10px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
  }