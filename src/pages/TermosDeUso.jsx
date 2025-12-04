import React from 'react';

const TermosDeUso = () => {
  return (
    <div className="min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-4xl font-bold mb-6">Termos de Uso</h1>
        <p className="text-gray-300 mb-6">
          Estes Termos de Uso regem o acesso e a utilização desta landing page e dos serviços
          oferecidos por nossa empresa, especializada em marketing digital terceirizado.
          Ao navegar ou utilizar qualquer funcionalidade do site, você concorda com os termos
          abaixo. Caso não concorde, recomendamos que interrompa o uso imediatamente.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">1. Aceitação dos Termos</h2>
        <p className="text-gray-300 mb-6">
          Ao acessar esta página, você reconhece que leu, compreendeu e concorda em cumprir
          estes Termos de Uso, bem como nossa Política de Privacidade. Estes termos podem ser
          atualizados periodicamente e sem aviso prévio.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">2. Uso Permitido</h2>
        <p className="text-gray-300 mb-4">
          Você concorda em utilizar esta página apenas para finalidades legais e de forma que:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Não viole leis municipais, nacionais ou internacionais</li>
          <li>Não viole direitos de terceiros ou políticas da página</li>
          <li>Não cause danos ao site ou interfira em seu funcionamento</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">3. Coleta e Uso de Dados</h2>
        <p className="text-gray-300 mb-6">
          Ao preencher formulários, você fornece informações voluntárias como nome, email,
          telefone e empresa. Esses dados são utilizados exclusivamente para fins relacionados
          à prestação de serviços de marketing digital. Para mais detalhes, consulte nossa 
          Política de Privacidade.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">4. Propriedade Intelectual</h2>
        <p className="text-gray-300 mb-6">
          Todo o conteúdo presente nesta landing page — incluindo textos, gráficos, layout,
          logos e elementos visuais — é de propriedade exclusiva da empresa ou licenciado
          para uso. É proibida a reprodução, distribuição ou modificação sem autorização
          expressa por escrito.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">5. Links Externos</h2>
        <p className="text-gray-300 mb-6">
          Nosso site pode conter links para páginas de terceiros, como Google Forms,
          plataformas de atendimento ou redes sociais. Não nos responsabilizamos pelo
          conteúdo, políticas ou práticas de sites externos.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">6. Limitação de Responsabilidade</h2>
        <p className="text-gray-300 mb-6">
          Embora nos esforcemos para manter informações precisas e atualizadas, não garantimos
          que o site estará sempre disponível ou livre de erros. O uso desta página é de sua
          responsabilidade. Não somos responsáveis por danos diretos ou indiretos decorrentes
          do uso ou impossibilidade de uso dos serviços.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">7. Suspensão ou Interrupção</h2>
        <p className="text-gray-300 mb-6">
          Poderemos suspender ou interromper o acesso à landing page temporária ou permanentemente,
          por razões técnicas, manutenção ou circunstâncias fora de nosso controle.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">8. Obrigações do Usuário</h2>
        <p className="text-gray-300 mb-4">
          Ao utilizar esta página, você se compromete a:
        </p>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Fornecer informações verdadeiras e atualizadas</li>
          <li>Não realizar tentativas de invadir, explorar ou prejudicar o site</li>
          <li>Não utilizar os serviços para fins ilícitos, abusivos ou prejudiciais</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-10 mb-4">9. Alterações nos Termos</h2>
        <p className="text-gray-300 mb-6">
          Podemos atualizar estes Termos de Uso a qualquer momento. As alterações entram em vigor
          imediatamente após a publicação nesta página. O uso contínuo do site após alterações
          implica que você concorda com os novos termos.
        </p>

        <h2 className="text-2xl font-semibold mt-10 mb-4">10. Contato</h2>
        <p className="text-gray-300 mb-6">
          Caso tenha dúvidas sobre estes Termos de Uso, entre em contato através do formulário
          de contato disponível na landing page.
        </p>

        <p className="text-gray-500 text-sm mt-10">
          Última atualização: {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
};

export default TermosDeUso;
