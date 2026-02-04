import { Layout } from '@/components/layout';

export default function PoliticaPrivacidade() {
  return (
    <Layout>
      {/* Section 1: Hero */}
      <section className="politica-section1 bg-background">
        <div className="drs-container">
          <div 
            className="politica-green-box rounded-[24px] lg:rounded-[40px]"
            style={{ 
              backgroundColor: '#69C0AC',
              backgroundImage: 'url(/images/topo_pp.png)',
              backgroundPosition: 'top left',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="grid grid-cols-12">
              <div className="col-span-12 lg:col-start-3 lg:col-span-10">
                <h1 
                  style={{ 
                    color: '#000', 
                    fontSize: '35px', 
                    fontStyle: 'normal', 
                    fontWeight: 900, 
                    lineHeight: '40px' 
                  }}
                >
                  Política de Privacidade
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Content */}
      <section className="politica-section2 bg-white">
        <div className="drs-container">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-start-2 lg:col-span-10">
              <div className="prose prose-lg max-w-none" style={{ color: '#000', fontSize: '18px', lineHeight: '1.6' }}>
                
                <h2 className="policy-title">INTRODUÇÃO</h2>
                <p>
                  Por favor, leia esta Política de Privacidade e Proteção de Dados Pessoais cuidadosamente para entender nossas políticas e práticas sobre seus Dados Pessoais e como o tratamento destes dados é realizado.
                </p>
                <p>
                  Esta política se aplica a indivíduos (pessoas naturais) que interagem com serviços da DRS Group como consumidores, representantes dos nossos parceiros e outros titulares de dados pessoais ("Você"). Esta política explica como seus Dados Pessoais são coletados, usados e divulgados pela DRS Group (referido nessa política como "DRS Group", "Nós", "Conosco"). Ela também informa como você pode acessar e atualizar seus Dados Pessoais e tomar certas decisões sobre como seus Dados Pessoais são utilizados.
                </p>
                <p>
                  Esta política abrange nossas atividades de coleta de dados tanto online e offline, abrangendo os Dados Pessoais que nós coletamos por meio de nossos vários canais, incluindo – mas não limitado a – sites na web, aplicativos, redes sociais de terceiros, serviço de atendimento ao consumidor, projetos de cliente, pesquisas e eventos.
                </p>
                <p>
                  Em alguns casos específicos, se você decidir por não nos fornecer os seus Dados Pessoais apontados como necessários (nós indicaremos quando esse for o caso, por exemplo, colocando explicitamente essa informação em nossos formulários de registro), nós talvez não possamos fornecer a você nossos produtos e/ou serviços.
                </p>

                <h2 className="policy-title">FONTES DE DADOS PESSOAIS</h2>
                <p>Nós coletamos seus Dados Pessoais através das seguintes fontes:</p>
                <p>
                  <strong>Sites da DRS Group:</strong> Todos os nossos sites podem ser utilizados para coleta de dados pessoais. Isso inclui tanto site que operamos diretamente através dos nossos domínios e endereços IPs, quanto sites ou páginas que nós estabelecemos em serviços de terceiros, como Facebook, Linkedin, e demais terceiros que ofertam esse tipo de serviço.
                </p>
                <p>
                  <strong>Correio Eletrônico e sistemas de troca de mensagens instantâneas:</strong> Serviços utilizados para manter comunicações eletrônicas entre você e a DRS Group, incluindo aqueles disponibilizados diretamente por nós, ou serviços de terceiros como WhatsApp, Telegram, SMS (serviço de mensagens curtas) e similares.
                </p>
                <p>
                  <strong>Atendimento ao cliente:</strong> Comunicações realizadas com Você através das nossas centrais de atendimento e vendas.
                </p>
                <p>
                  <strong>Anúncios, propagandas e formulários online:</strong> Interações com qualquer tipo de anúncios, propagandas e formulários online da DRS Group.
                </p>
                <p>
                  <strong>Registros offline:</strong> Registros preenchidos offline, distribuídos durante eventos e outras interações com a DRS Group.
                </p>
                <p>
                  <strong>Dados recebidos de terceiros:</strong> Incluindo, mas não limitado a projetos de clientes, redes sociais e sites de terceiros como, por exemplo, Facebook, Instagram, Linkedin, e similares, serviços de agregadores de dados, parceiros da DRS Group, fontes públicas e dados recebidos durante aquisição de outras empresas.
                </p>

                <h2 className="policy-title">QUAIS SÃO SEUS DE DADOS PESSOAIS QUE COLETAMOS E COMO ESTES SÃO COLETADOS</h2>
                <p>
                  Durante sua interação junto a DRS Group, usando uma das fontes de coleta previamente mencionadas, podemos coletar vários tipos de dados pessoais sobre você, conforme exposto a seguir:
                </p>
                <p>
                  <strong>Informações de Contato:</strong> Inclui qualquer tipo de informação que possa facilitar nosso contato com você, incluindo seu endereço físico de correspondência, números de telefone, endereços de correio eletrônico, sites e perfis em redes sociais.
                </p>
                <p>
                  <strong>Informações de login:</strong> Inclui informações para se identificar e autenticar em serviços fornecidos pela DRS Group, incluindo seu nome de registro (login), senha em formato irrecuperável (criptografado), e perguntas de segurança.
                </p>
                <p>
                  <strong>Informações demográficas:</strong> Qualquer informação que possa descrever seus dados demográficos, hábitos ou suas características de comportamento, incluindo itens como seu aniversário, data de nascimento, idade ou faixa etária, gênero, localização geográfica.
                </p>
                <p>
                  <strong>Pesquisas de mercado e feedback de consumidores:</strong> São informações que você compartilha voluntariamente com a DRS Group sobre sua experiência de uso de nossos produtos e serviços.
                </p>
                <p>
                  <strong>Conteúdo gerado por consumidores:</strong> Incluindo qualquer conteúdo que você cria e compartilha com a DRS Group em redes sociais de terceiros ou por meio de carregamento para um de nossos sites, aplicativos e demais serviços online e offline, incluindo o uso de aplicativos de rede social de terceiros, como o Facebook, Instagram, Linkedin e similares. Esses dados incluem textos, comentários, artigos, fotos, vídeos, histórias pessoais ou outros conteúdos e mídias semelhantes. Sempre que permitido, nós coletamos e publicamos conteúdos gerados por consumidores em conexão com uma variedade de atividades, incluindo divulgação de produtos e serviços da DRS Group, concursos, premiações e outras promoções, recursos de comunidade do site, engajamento de consumidores e redes sociais de terceiros.
                </p>
                <p>
                  <strong>Informações de redes sociais de terceiros:</strong> Trata-se de quaisquer dados que você compartilha publicamente em uma rede social de terceiros ou informações que fazem parte de seu perfil em uma rede social de terceiros (como o Facebook, Instagram, Linkedin e similares) e que você permite que a rede social de terceiros compartilhe Conosco. Esses dados podem incluir detalhes como suas informações básicas de conta (nome, endereço de e-mail, gênero, data de nascimento, cidade atual, foto de perfil, ID de usuário, lista de amigos e informações similares.) e quaisquer outras informações ou atividades adicionais que você permita que a rede social de terceiros compartilhe conosco. Nós recebemos suas informações de perfil de rede social de terceiros (ou partes delas) sempre que você baixa um item ou interage com um aplicativo ou serviço da web da DRS Group em uma rede social de terceiros, sempre que você utiliza um recurso de rede social que é integrado a um site da DRS Group ou sempre que você interage conosco por meio de uma rede social de terceiros. Para saber mais sobre como suas informações de uma rede social de terceiros são obtidas pela DRS Group ou para optar por não compartilhar essas informações de rede social, visite o site da rede social de terceiros específica.
                </p>
                <p>
                  <strong>Informações financeiras e de pagamento:</strong> Quaisquer dados que a DRS Group necessita para atender a um pedido, ou que você usa para fazer uma compra, como os dados financeiros e de avaliação de crédito. A DRS Group ou nossos prestadores de serviço de processamento de pagamentos manuseia suas informações financeiras e de pagamento em conformidade com as leis, normas e os padrões de segurança aplicáveis.
                </p>
                <p>
                  <strong>Informações fornecidas pelos clientes:</strong> Informações necessárias para a execução do contrato e para nos permitir cumprir com nossas obrigações legais. Sem essas informações, não poderemos fornecer os serviços. Essas informações são as seguintes: contatos relativos aos destinatários das remessas enviadas, além de informações dos responsáveis técnicos, oficialmente nomeados pelas empresas e laboratórios, além de informações sobre os produtos que estão sendo enviados. Suas interações com nossos serviços podem ser gravadas ou ouvidas, de acordo com as leis aplicáveis, para necessidades operacionais da DRS Group.
                </p>

                <h2 className="policy-title">SOBRE O USO DE COOKIES, ARQUIVOS DE REGISTOS (LOGS) E SIMILARES</h2>
                <p>
                  Cookies são pequenos arquivos de texto que podem ser colocados no seu computador ou dispositivo portátil por sites ou serviços na web que você utiliza. São utilizados para garantir o bom funcionamento de sites e demais serviços online, assim como para fornecer informações aos proprietários do site ou serviço online. Cookies são utilizados para melhorar o uso e a funcionalidade dos sites e demais serviços na web compatíveis da DRS Group e entender melhor como nossos visitantes utilizam os nossos sites e serviços online, bem como as ferramentas e serviços por eles oferecidos. Os Cookies nos facilitam o processo de adaptar os sites da DRS Group às suas necessidades pessoais, facilitando sempre que possível o seu uso, receber feedback da satisfação dos nossos consumidores.
                </p>
                <p>A DRS Group usa os seguintes tipos de Cookies em seus sites e serviços compatíveis:</p>
                <p>
                  <strong>Cookies de sessão:</strong> São Cookies de uso temporário, que são excluídos quando você fecha o seu navegador. Quando Você reinicia o seu navegador e volta para o site que criou o cookie, esse site trata você como um novo visitante.
                </p>
                <p>
                  <strong>Cookies persistentes:</strong> São aqueles Cookies que permanecem no seu navegador até você deletá-los manualmente ou até o seu navegador deletá-los de acordo com o período de duração estabelecido pelo cookie. Esses Cookies reconhecerão seu retorno como visitante a um site ou serviço da DRS Group.
                </p>
                <p>
                  <strong>Cookies necessários:</strong> São Cookies estritamente necessários para a operação de um site ou serviço compatível da DRS Group. Eles permitem que você navegue pelo site e use nossos recursos.
                </p>
                <p>
                  <strong>Cookies que nos mandam informações sobre você:</strong> Nós colocamos esse tipo de Cookies em um site ou serviço compatível da DRS Group e este tipo de Cookie só podem ser lidos por nossos sites e serviços compatíveis.
                </p>
                <p>
                  <strong>Cookies em propagandas da DRS Group:</strong> Colocamos Cookies em propagandas e anúncios que são exibidos em sites e serviços compatíveis de terceiros. Obtemos informações através desses Cookies quando você clica ou interage com a propaganda ou anúncio. Neste caso, a DRS Group está colocando um cookie "de terceiro". Nos podermos usar esses dados obtidos por Cookies de terceiros para mandar-lhe outras propagandas que acreditamos ser relevantes ou de seu interesse com base no seu comportamento anterior.
                </p>
                <p>
                  <strong>Cookies que compartilham suas informações para terceiros:</strong> São Cookies colocados em um site da DRS Group por nossas companhias parceiras, como serviços de anúncios online. Eles podem usar os dados coletados por esses Cookies para lhe enviar anonimamente propagandas direcionadas de outros sites, com base em sua visita a sites ou serviços compatíveis da DRS Group.
                </p>
                <p>
                  Os sites e serviços compatíveis da DRS Group também podem usar outras tecnologias de rastreamento similares a Cookies, que podem coletar informações tais como endereços IP, arquivos de registro e sinalizadores da web, dentre outras. Esses dados também são utilizados para nos ajudar a adaptar os sites e demais serviços compatíveis da DRS Group às suas necessidades pessoais. Veja mais detalhes a seguir:
                </p>
                <p>
                  <strong>Endereços de IP:</strong> Um endereço de IP é um número usado na internet ou em uma rede para identificar seu computador. Todas as vezes que você se conecta na internet seu computador recebe um IP atribuído pelo seu provedor de serviços de internet. Podemos registrar Endereços de IP para as seguintes finalidades:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Tratamento de problemas técnicos;</li>
                  <li>Manutenção da proteção e segurança dos nossos sites e demais serviços online;</li>
                  <li>Obter uma melhor compreensão de como nossos sites e demais serviços online são utilizados;</li>
                  <li>Adaptar nosso conteúdo às suas necessidades, dependendo da sua localização geográfica.</li>
                </ul>

                <h2 className="policy-title">ARQUIVOS DE REGISTRO:</h2>
                <p>
                  A DRS Group ou um terceiro trabalhando em nosso nome, poderá coletar informações na forma de arquivos de registro (logs) que detalham as atividades do site e coletam estatísticas sobre os hábitos de navegação do usuário. Normalmente esses registros são gerados anonimamente e nos ajudam a entender detalhes como:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>O tipo de navegador e o sistema utilizado pelos usuários de nossos sites ou serviços online;</li>
                  <li>Detalhes sobre a sessão do usuário, incluindo a URL de origem, a data, hora e quais páginas o usuário visitou em nossos sites e serviços compatíveis, e quanto tempo o usuário permaneceu utilizando-os;</li>
                  <li>Demais detalhes de navegação ou de contagem de cliques incluindo relatórios de tráfego de site, contagem de visitantes únicos e dados similares.</li>
                </ul>
                <p>
                  <strong>Sinalizadores da web (web beacons):</strong> Nós podemos utilizar os sinalizadores da web (ou GIFs transparentes) nos sites da DRS Group. Os sinalizadores da web (também conhecidos como webbugs ou web beacons) são pequenas sequencias de código que permitem a entrega de uma imagem gráfica em uma página da web com o objetivo de transferir dados de volta para nós. Usamos as informações dos sinalizadores da web para os mais variados propósitos, incluindo:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Entender como um usuário responde a campanhas de e-mail;</li>
                  <li>Relatórios de tráfego dos nossos sites e serviços compatíveis;</li>
                  <li>Realizar a contagem de visitantes únicos, auditoria e relatórios de propaganda e e-mail, e personalização em nossos sites e demais serviços compatíveis.</li>
                </ul>
                <p>
                  É importante lembrar que cabe a você assegurar que as configurações do seu computador ou dispositivo portátil reflitam se você consente em aceitar Cookies ou não. A maioria dos navegadores permite que você estabeleça regras para avisá-lo antes de aceitar Cookies ou simplesmente recusá-los. você não precisa ter Cookies habilitados para usar ou navegar a maior parte dos sites e serviços online da DRS Group, entretanto neste caso não podemos assegurar que você vai conseguir acessar todos os seus recursos. Recomendamos que você veja no botão "ajuda" no seu navegador como realizar esse tipo de configuração. Lembre-se que se você usar navegadores, ou mesmo computadores e/ou dispositivos portáteis diferentes em locais diferentes, você precisará se assegurar de que cada dispositivo e navegador esteja ajustado para suas preferências pessoais de Cookies.
                </p>
                <p>
                  Como os nossos sinalizadores da web (web beacons) podem fazer parte de uma página da web, não é possível excluir ("opt-out") esse tipo de recurso, mas Você pode torná-lo completamente não-funcional ativando o recurso "opt-out" para os Cookies colocados por esse sinalizador.
                </p>

                <h2 className="policy-title">SOBRE O USO DE SEUS DADOS PESSOAIS</h2>
                <p>
                  Os itens a seguir descrevem as finalidades para as quais a DRS Group coleta seus Dados Pessoais, e os diferentes tipos de Dados Pessoais que coletamos para cada finalidade. Note, por favor, que nem todos os usos abaixo serão relevantes para todos os indivíduos e podem se aplicar apenas a situações específicas.
                </p>
                <p>
                  <strong>Serviços ao cliente:</strong> Seus Dados Pessoais são utilizados para finalidade de prestar serviços, incluindo responder a suas dúvidas, questionamentos e sugestões. Usualmente, isso requer certas informações pessoais de contato e informações sobre o motivo de seu questionamento, dúvida ou sugestão, por exemplo, qual foi o projeto que você estava inserido, se existe um problema técnico, questão ou reclamação sobre o projeto, e questionamentos em geral.
                </p>
                <p>Motivo para uso dos seus dados pessoais nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cumprir obrigações contratuais;</li>
                  <li>Cumprir obrigações legais;</li>
                  <li>Nossos interesses legítimos.</li>
                </ul>
                <p>Nossos interesses legítimos nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Melhorar continuamente produtos e serviços da DRS Group;</li>
                  <li>Melhorar continuamente a efetividade do nosso atendimento ao consumidor.</li>
                </ul>
                <p>
                  <strong>Redes sociais e sites de terceiros:</strong> Usamos seus Dados Pessoais quando você interage com funções de redes sociais e sites de terceiros, como "curtir", para fornecer anúncios e interagir com você em redes sociais de terceiros. A forma como essas interações funcionam, os dados de perfil que a DRS Group obtém sobre você, e como cancelá-los ("opt-out") podem ser entendidas revisando as políticas de privacidade diretamente nas respectivas redes sociais e sites de terceiros.
                </p>
                <p>Motivo para uso dos seus dados pessoais nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Nossos interesses legítimos;</li>
                  <li>Obtivemos o seu consentimento (quando necessário).</li>
                </ul>
                <p>Nossos interesses legítimos nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Entender quais de nossos produtos e serviços podem interessar a Você e fornecer informações sobre eles;</li>
                  <li>Definir consumidores para novos produtos ou serviços.</li>
                </ul>
                <p>
                  <strong>Atendimento aos projetos que você está inserido:</strong> Usamos seus Dados Pessoais para processar e enviar seus pedidos, além de informá-lo sobre a situação dos seus pedidos, corrigir endereços e conduzir verificação de identidade e outras atividades para verificação de fraudes. Isso envolve o uso de certos Dados Pessoais e, em certas situações, informações de pagamento.
                </p>
                <p>Motivo para uso dos seus dados pessoais nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Cumprir obrigações contratuais;</li>
                  <li>Obrigações legais;</li>
                  <li>Nossos interesses legítimos.</li>
                </ul>
                <p>Nossos interesses legítimos nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Melhorar e desenvolver novos produtos e serviços;</li>
                  <li>Ser mais eficientes no atendimento aos seus pedidos;</li>
                  <li>Proteger nossos sistemas, redes e colaboradores;</li>
                  <li>Cumprir integralmente obrigações legais.</li>
                </ul>
                <p>
                  <strong>Motivos legais ou fusão/aquisição:</strong> Caso a DRS Group ou seus bens sejam adquiridos por, ou fundidos com, outra empresa, incluindo por motivo de falência, compartilharemos seus Dados Pessoais com nossos sucessores legais, respeitando as exigências da legislação vigente. Também divulgaremos seus Dados Pessoais a terceiros (i) quando requerido pela lei aplicável; (ii) em resposta a procedimentos legais; (iii) em resposta a um pedido da autoridade legal competente; (iv) para proteger nossos direitos, privacidade, segurança ou propriedade; ou (v) para fazer cumprir os termos de qualquer acordo ou os termos do nosso site, produtos e serviços, conforme a legislação vigente.
                </p>
                <p>Motivo para uso dos seus dados pessoais nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Obrigações legais;</li>
                  <li>Nossos interesses legítimos.</li>
                </ul>
                <p>Nossos interesses legítimos nessa situação:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Atender integralmente obrigações legais;</li>
                  <li>Proteger nossos sistemas, bens e colaboradores.</li>
                </ul>

                <h2 className="policy-title">SOBRE A DIVULGAÇÃO DE SEUS DADOS PESSOAIS</h2>
                <p>
                  Além das entidades que fazem parte da DRS Group, nós podemos compartilhar seus Dados Pessoais com os seguintes tipos de organizações de terceiros:
                </p>
                <p>
                  <strong>Provedores de serviços:</strong> Incluem companhias externas que são utilizadas pela DRS Group para auxiliar a operar nosso negócio. Provedores de serviços e seus colaboradores selecionados, só estão autorizados a acessar seus Dados Pessoais em nome da DRS Group para as tarefas específicas, que forem requisitadas a eles com base em nossas instruções diretas. Nossos provedores de serviços são obrigados contratualmente e a manter seus Dados Pessoais confidenciais e seguros, e em casos de violação respondem solidariamente conforme a legislação vigente.
                </p>
                <p>
                  <strong>Terceiros que usam seus Dados Pessoais por motivos legais ou devido a fusão/aquisição:</strong> Divulgaremos seus Dados Pessoais a terceiros por motivos legais ou no contexto de uma fusão ou aquisição na DRS Group.
                </p>

                <h2 className="policy-title">SOBRE A RETENÇÃO E TÉRMINO DO TRATAMENTO DE SEUS DADOS PESSOAIS</h2>
                <p>
                  De acordo com a legislação vigente, a DRS Group utiliza seus Dados Pessoais por quanto tempo for necessário para satisfazer as finalidades para as quais seus Dados Pessoais foram coletados, conforme descrito nesta política, ou para cumprir com os requerimentos legais aplicáveis. Você pode obter maiores detalhes sobre a retenção dos seus Dados Pessoais através dos canais de comunicação detalhados nesta política. Quando no término do tratamento de seus Dados Pessoais, estes serão eliminados no âmbito e nos limites técnicos das atividades, autorizada a conservação nas situações previstas na legislação vigente.
                </p>

                <h2 className="policy-title">SOBRE A DIVULGAÇÃO, O ARMAZENAMENTO OU TRANSFERÊNCIA DE SEUS DADOS PESSOAIS</h2>
                <p>
                  A DRS Group adota medidas adequadas para garantir que seus Dados Pessoais sejam mantidos de forma confidencial e segura. Entretanto, que estas proteções não se aplicam a informações que você tenha escolhido compartilhar em áreas públicas, como redes sociais de terceiros.
                </p>
                <p>
                  <strong>Pessoas que podem acessar seus Dados Pessoais:</strong> Seus Dados Pessoais serão processados por nossos colaboradores ou agentes autorizados, desde que estes precisem ter acesso a tais informações, dependendo dos propósitos específicos para os quais seus Dados Pessoais tenham sido coletados.
                </p>
                <p>
                  <strong>Medidas tomadas em ambientes operacionais:</strong> Armazenamos seus Dados Pessoais em ambientes operacionais que usam medidas de segurança razoáveis, tanto técnicas quanto administrativas, para prevenir qualquer tipo de acesso não autorizado. Seguimos protocolos razoáveis para proteger Dados Pessoais.
                </p>
                <p>
                  <strong>Transferência de seus Dados Pessoais:</strong> Dada a natureza do nosso negócio, é possível que tenhamos que transferir seus Dados Pessoais armazenados dentro da DRS Group para terceiros, de acordo com as finalidades estabelecidas nesta Política de Privacidade. Por este motivo, poderemos transferir seus Dados Pessoais para outros países, desde que estes possuam leis e regulamentações compatíveis com as vigentes no Brasil.
                </p>

                <h2 className="policy-title">SOBRE SEUS DIREITOS REFERENTES A DADOS PESSOAIS</h2>
                <p>
                  Você tem direito de confirmar a existência, acessar, revisar, modificar e/ou requisitar uma cópia eletrônica da informação dos seus Dados Pessoais que são tratados pela DRS Group.
                </p>
                <p>
                  Você também tem direito de requisitar detalhes sobre a origem de seus Dados Pessoais ou o compartilhamento destes dados com terceiros.
                </p>
                <p>
                  A qualquer momento, você também poderá limitar o uso e divulgação, ou revogar o consentimento a qualquer uma de nossas atividades de processamento de seus Dados Pessoais, excetuando-se em situações previstas na legislação vigente.
                </p>
                <p>
                  Estes direitos podem ser exercidos através dos canais de comunicação detalhados nesta política, sendo necessário à validação da sua identidade através do fornecimento de uma cópia de seu RG ou meios equivalentes de identificação, em conformidade com a legislação vigente.
                </p>
                <p>
                  Sempre que um pedido for submetido sem o fornecimento das provas necessárias a comprovação da legitimidade do titular dos dados, o pedido será automaticamente rejeitado. Ressaltamos que qualquer informação de identificação fornecida a DRS Group somente será processada de acordo com, e na medida permitida pelas leis vigentes.
                </p>
                <p>
                  Ressaltamos que em determinados casos, não podermos excluir seus Dados Pessoais. Algumas situações requerem a retenção de seus Dados Pessoais depois que você pedir sua exclusão, para satisfazer obrigações legais ou contratuais.
                </p>
                <p>
                  Quando disponíveis, nossos sites, aplicativos e serviços online podem ter uma função dedicada onde será possível você revisar e editar os seus Dados Pessoais. Ressaltamos que a DRS Group solicita a validação de sua identidade usando, por exemplo, um sistema de login com senha de acesso ou recurso similar, antes de permitir o acesso ou a modificação de seus Dados Pessoais, dessa forma garantindo que não exista acesso não autorizado à sua conta e dados pessoais associados.
                </p>
                <p>
                  A DRS Group faz o máximo possível para poder atender todas as questões que você possa ter sobre a forma a qual processamos seus Dados Pessoais. Contudo, se você tiver preocupações não resolvidas, você tem o direito de reclamar às autoridades de proteção de dados competentes.
                </p>

                <h2 className="policy-title">QUAIS SÃO SUAS ESCOLHAS SOBRE COMO UTILIZAMOS E DIVULGAMOS SEUS DADOS PESSOAIS</h2>
                <p>
                  A DRS Group faz o máximo para dar a você liberdade de escolha sobre os Dados Pessoais que você nos fornece. Os seguintes mecanismos dão a Você o controle sobre o tratamento de seus Dados Pessoais:
                </p>
                <p><strong>Cookies/Tecnologias Similares:</strong> Você pode gerenciar o seu consentimento usando:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Nossas soluções de gerenciamento de consentimento;</li>
                  <li>As configurações do seu navegador para recusar alguns ou todos os Cookies e tecnologias similares, ou para alertá-lo quando estão sendo usados.</li>
                </ul>
                <p>
                  <strong>Publicidade, marketing e promoções:</strong> Você pode consentir para que seus Dados Pessoais sejam usados pela DRS Group para promover nossos produtos ou serviços por meio de caixas de verificação localizadas nos formulários de registro ou respondendo questões apresentadas pelos nossos representantes. Se você decidir que não deseja mais receber tais comunicações, você pode cancelar sua subscrição para receber comunicações relacionadas a marketing a em qualquer momento, seguindo as instruções fornecidas em tais comunicações.
                </p>
                <p>
                  Para cancelar a subscrição de comunicações de marketing enviadas por qualquer meio, incluindo redes sociais de terceiros, Você pode optar por sair a qualquer tempo, cancelando sua subscrição, pelos links disponíveis em nossas comunicações, fazendo login em nossos sites, aplicativos, serviços online compatíveis ou redes sociais de terceiros, e ajustando suas preferências de usuário ou ligando diretamente para nosso serviço de atendimento ao consumidor.
                </p>
                <p>
                  É importante lembrar que, mesmo com o seu cancelamento de subscrição às nossas comunicações de marketing, você continuará a receber comunicações administrativas da DRS Group, como pedidos, confirmações de transação, notificações sobre suas atividades de conta em nossos sites e serviços compatíveis, e outros anúncios importantes não relacionados a marketing.
                </p>
                <p>
                  <strong>Personalização (offline e online):</strong> Sempre que permitido por lei, se Você quiser que seus Dados Pessoais sejam usados pela DRS Group para fornecer-lhe uma experiência personalizada ou publicidade e conteúdo dirigidos, Você pode indicar isso por meio das caixas de checagem relevantes localizadas no formulário de registro ou respondendo a perguntas apresentadas pelos nosso representantes.
                </p>
                <p>
                  Se você decidir que não quer mais se beneficiar desta personalização, você pode optar por sair a qualquer tempo, fazendo login nos nossos sites, aplicativos e serviços compatíveis, e selecionando as preferências de usuário no perfil da sua conta ou ligando diretamente para nosso serviço de atendimento ao consumidor.
                </p>
                <p>
                  <strong>Publicidade direcionada:</strong> A DRS Group pode realizar parcerias com redes de anúncios e outros provedores de serviços ou anúncios, que apresentam propagandas e demais anúncios em nosso nome ou no nome de outras empresas não-afiliadas aa DRS Group. Alguns destes anúncios podem ser ajustados aos seus interesses, com base nas informações coletadas nos sites e demais serviços compatíveis da DRS Group ou em sites de organizações não-afiliadas aa DRS Group.
                </p>
                <p>
                  Você pode entrar em contato usando os canais de comunicação detalhados nesta política para obter mais informações sobre como gerenciar ou cancelar sua participação em publicidade direcionada.
                </p>

                <h2 className="policy-title">ALTERAÇÕES EM NOSSA POLÍTICA DE PRIVACIDADE</h2>
                <p>
                  Sempre que a DRS Group decidir mudar a forma que tratamos seus Dados Pessoais, esta Política será atualizada. Nos reservamos o direito de fazer alterações às nossas práticas e a esta Política a qualquer tempo, desde que mantida a conformidade com a legislação vigente.
                </p>
                <p>
                  Recomendamos que você a acesse frequentemente, ou sempre que tiver dúvidas, para ver quaisquer atualizações ou mudanças à nossa Política de Privacidade.
                </p>

                <h2 className="policy-title">COMO ENTRAR EM CONTATO?</h2>
                <p>Você pode entrar em contato para:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Fazer perguntas ou comentários sobre esta Política e nossas práticas de privacidade e proteção de Dados Pessoais;</li>
                  <li>Fazer uma reclamação;</li>
                  <li>Confirmação da existência de tratamento de seus Dados Pessoais;</li>
                  <li>Obter informações sobre como acessar seus Dados Pessoais;</li>
                  <li>Realizar a correção de dados pessoais incompletos, inexatos ou desatualizados;</li>
                  <li>Obter informações sobre a anonimização, bloqueio ou eliminação de dados desnecessários, excessivos ou tratados em desconformidade com o disposto na legislação vigente;</li>
                  <li>Obter informações sobre a portabilidade dos seus dados pessoais a outro fornecedor de serviço ou produto, mediante requisição expressa, em conformidade com a legislação vigente;</li>
                  <li>Solicitar a eliminação dos dados pessoais tratados com o seu consentimento, excetuando-se as hipóteses previstas na legislação vigente;</li>
                  <li>Solicitar detalhes das entidades públicas e privadas com as quais realizamos o compartilhamento de seus Dados Pessoais;</li>
                  <li>Obter informações sobre a possibilidade de não fornecer consentimento e sobre as consequências dessa negativa;</li>
                  <li>Realizar a revogação do consentimento para o tratamento dos seus Dados Pessoais, excetuando-se as hipóteses previstas na legislação vigente;</li>
                  <li>Demais direitos do titular dos dados pessoais, conforme legislação vigente.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
