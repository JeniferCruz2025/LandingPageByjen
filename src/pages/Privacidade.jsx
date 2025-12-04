import React from 'react';

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">Política de Privacidade</h1>
        <p className="text-gray-300 mb-6">
          Esta Política de Privacidade descreve como coletamos, utilizamos e protegemos
          as informações pessoais dos usuários que acessam nossos serviços e nossa página.
          Ao utilizar esta landing page, você concorda com os termos descritos abaixo.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Informações que Coletamos</h2>
        <p className="text-gray-300 mb-4">
          Podemos coletar diferentes tipos de informações, incluindo:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Nome completo</li>
          <li>Email e número de telefone</li>
          <li>Empresa ou marca representada</li>
          <li>Informações fornecidas voluntariamente em formulários</li>
          <li>Dados de navegação, como páginas visitadas e tempo de permanência</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Como Utilizamos Seus Dados</h2>
        <p className="text-gray-300 mb-4">
          Os dados coletados são utilizados para fins legítimos relacionados à prestação de serviços
          de marketing terceirizados, incluindo:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Responder solicitações enviadas pelo formulário</li>
          <li>Preparar propostas comerciais</li>
          <li>Entrar em contato para prestação de serviços</li>
          <li>Melhorar a experiência do usuário no site</li>
          <li>Envio de comunicações, quando autorizado</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Compartilhamento de Informações</h2>
        <p className="text-gray-300 mb-6">
          Não vendemos ou compartilhamos seus dados pessoais com terceiros, exceto quando necessário
          para o funcionamento dos serviços contratados, como plataformas de envio de email ou ferramentas
          de automação. Todos os parceiros seguem práticas adequadas de segurança e confidencialidade.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Armazenamento e Segurança</h2>
        <p className="text-gray-300 mb-6">
          Implementamos medidas de segurança técnicas e administrativas para proteger seus dados contra
          acesso não autorizado, perda, alteração ou divulgação. No entanto, nenhum sistema é completamente
          livre de riscos, e não podemos garantir segurança absoluta.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Retenção de Dados</h2>
        <p className="text-gray-300 mb-6">
          Mantemos suas informações apenas pelo tempo necessário para cumprir as finalidades descritas
          nesta Política de Privacidade ou conforme exigido por lei.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Seus Direitos</h2>
        <p className="text-gray-300 mb-4">
          De acordo com a LGPD (Lei Geral de Proteção de Dados) e outras regulamentações aplicáveis,
          você tem o direito de:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Acessar suas informações pessoais</li>
          <li>Solicitar correção ou atualização</li>
          <li>Solicitar exclusão dos seus dados</li>
          <li>Revogar consentimentos previamente concedidos</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Cookies e Tecnologias de Rastreamento</h2>
        <p className="text-gray-300 mb-6">
          Podemos utilizar cookies e ferramentas de análise para entender o comportamento dos usuários
          e melhorar o desempenho da página. Você pode desativar os cookies no seu navegador,
          porém isso pode afetar algumas funcionalidades do site.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Links Externos</h2>
        <p className="text-gray-300 mb-6">
          Nossa landing page pode conter links para sites externos. Não somos responsáveis pelas práticas
          de privacidade ou conteúdo de terceiros. Recomendamos que você leia as políticas de privacidade
          desses sites ao acessá-los.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Alterações nesta Política</h2>
        <p className="text-gray-300 mb-6">
          Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos revisá-la
          regularmente para se manter informado sobre como protegemos suas informações.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contato</h2>
        <p className="text-gray-300 mb-6">
          Caso tenha dúvidas, solicitações ou queira exercer seus direitos relacionados à privacidade,
          você pode entrar em contato diretamente conosco através do formulário presente nesta página.
        </p>

        <p className="text-gray-500 text-sm mt-10">
          Última atualização: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
};

export default Privacidade;
