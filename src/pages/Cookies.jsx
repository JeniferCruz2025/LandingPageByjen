import React from 'react'

const Cookies = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white py-16 px-6 md:px-20">
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold">Política de Cookies</h1>
        <p className="text-gray-300">
          Esta Política de Cookies explica como utilizamos cookies e tecnologias semelhantes
          em nosso site. Ao continuar navegando, você concorda com o uso desses recursos conforme
          descrito abaixo.
        </p>

        <section>
          <h2 className="text-2xl font-semibold mb-2">1. O que são Cookies?</h2>
          <p className="text-gray-300">
            Cookies são pequenos arquivos de texto armazenados no dispositivo do usuário quando ele
            visita um site. Eles são amplamente utilizados para garantir o funcionamento adequado da
            página, melhorar a experiência do usuário e fornecer informações para fins analíticos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">2. Para que usamos Cookies?</h2>
          <p className="text-gray-300 mb-2">
            Utilizamos cookies para diversas finalidades, incluindo:
          </p>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li>Garantir o funcionamento básico do site;</li>
            <li>Memorizar preferências e configurações do usuário;</li>
            <li>Realizar análises de desempenho e métricas de acesso;</li>
            <li>Aprimorar campanhas de marketing e personalizar conteúdos;</li>
            <li>Oferecer segurança e prevenir atividades maliciosas.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">3. Tipos de Cookies Utilizados</h2>
          <ul className="list-disc pl-6 text-gray-300 space-y-2">
            <li><strong>Cookies Essenciais:</strong> necessários para o funcionamento do site.</li>
            <li><strong>Cookies de Desempenho:</strong> coletam informações sobre o uso do site.</li>
            <li><strong>Cookies Funcionais:</strong> registram preferências do usuário.</li>
            <li><strong>Cookies de Marketing:</strong> usados para exibir anúncios relevantes.</li>
            <li><strong>Cookies de Terceiros:</strong> serviços externos como Google, Meta etc.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">4. Cookies de Terceiros</h2>
          <p className="text-gray-300">
            Podemos utilizar ferramentas externas, como Google Analytics, Pixel do Facebook e outras
            plataformas de marketing. Esses serviços podem instalar seus próprios cookies, sobre os quais
            não temos controle direto.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">5. Como Gerenciar ou Desativar Cookies?</h2>
          <p className="text-gray-300 mb-2">
            Você pode gerenciar, bloquear ou excluir cookies diretamente nas configurações do seu navegador.  
            No entanto, a desativação de alguns cookies pode afetar a funcionalidade do site.
          </p>
          <p className="text-gray-300">Consulte a documentação do seu navegador para instruções específicas.</p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">6. Atualizações desta Política</h2>
          <p className="text-gray-300">
            Podemos atualizar esta Política de Cookies periodicamente. Quaisquer alterações serão publicadas
            nesta página com a data de revisão atualizada.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-2">7. Contato</h2>
          <p className="text-gray-300">
            Em caso de dúvidas sobre nossa Política de Cookies, entre em contato pelo e-mail:  
            <strong> contato@seudominio.com </strong>
          </p>
        </section>
      </div>
    </div>
  )
}

export default Cookies
