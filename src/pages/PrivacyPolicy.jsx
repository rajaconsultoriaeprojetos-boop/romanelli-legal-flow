import React from "react";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalSection from "@/components/legal/LegalSection";
import { FIRM_EMAIL } from "@/components/ra/constants";

export default function PrivacyPolicy() {
  return (
    <LegalPageLayout title="Política de Privacidade" updatedAt="11 de setembro de 2026">
      <LegalSection title="1. Compromisso com a privacidade"><p>A Romanelli Abdalla Advocacia trata dados pessoais com transparência e adota medidas para proteger a privacidade de visitantes e pessoas que entram em contato com o escritório, em conformidade com a legislação brasileira aplicável.</p></LegalSection>
      <LegalSection title="2. Dados que podem ser tratados"><p>Podemos tratar dados técnicos de navegação e informações fornecidas voluntariamente em contatos, como nome, e-mail, número de telefone e o conteúdo da mensagem. Não solicitamos dados além dos necessários para compreender e atender à solicitação.</p></LegalSection>
      <LegalSection title="3. Finalidades e bases legais"><p>Os dados podem ser utilizados para responder contatos, prestar informações, avaliar solicitações de atendimento, cumprir obrigações legais e proteger direitos. O tratamento observa as bases legais aplicáveis, incluindo consentimento, procedimentos preliminares relacionados a contrato, legítimo interesse e cumprimento de obrigação legal.</p></LegalSection>
      <LegalSection title="4. Cookies e consentimento"><p>Cookies essenciais podem ser utilizados para o funcionamento e a segurança do site. Tecnologias não essenciais de medição ou publicidade somente poderão ser ativadas após consentimento. A escolha registrada no banner pode ser revista mediante a limpeza dos dados deste site no navegador.</p></LegalSection>
      <LegalSection title="5. Atendimento pelo WhatsApp"><p>Ao iniciar voluntariamente o atendimento pelo WhatsApp, você consente com a coleta e o uso do seu número de telefone e das informações enviadas para fins de atendimento. O WhatsApp possui práticas próprias de privacidade, pelas quais o respectivo fornecedor é responsável.</p></LegalSection>
      <LegalSection title="6. Compartilhamento, segurança e retenção"><p>Dados não são comercializados. Poderão ser compartilhados com fornecedores necessários à operação, autoridades ou terceiros quando houver obrigação legal. São mantidos pelo período necessário às finalidades informadas e às obrigações legais, com medidas razoáveis de segurança.</p></LegalSection>
      <LegalSection title="7. Direitos do titular"><p>Você pode solicitar confirmação de tratamento, acesso, correção, informação sobre compartilhamento, oposição, revogação do consentimento e demais direitos previstos na LGPD, quando aplicáveis.</p></LegalSection>
      <LegalSection title="8. Encarregado pelo Tratamento de Dados"><p>Encarregado pelo Tratamento de Dados (DPO): <a href={`mailto:${FIRM_EMAIL}`} className="font-semibold text-brand-navy underline underline-offset-2">{FIRM_EMAIL}</a>.</p></LegalSection>
    </LegalPageLayout>
  );
}