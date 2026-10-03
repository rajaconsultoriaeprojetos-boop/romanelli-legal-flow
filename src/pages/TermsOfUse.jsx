import React from "react";
import { Link } from "react-router-dom";
import LegalPageLayout from "@/components/legal/LegalPageLayout";
import LegalSection from "@/components/legal/LegalSection";

export default function TermsOfUse() {
  return (
    <LegalPageLayout title="Termos de Uso" updatedAt="11 de setembro de 2026">
      <LegalSection title="1. Aceitação"><p>Ao acessar este site, você declara estar ciente destes Termos de Uso. Caso não concorde, interrompa a navegação.</p></LegalSection>
      <LegalSection title="2. Finalidade do site"><p>O conteúdo possui caráter institucional e informativo. A navegação ou o envio de uma mensagem não cria, por si só, relação advogado-cliente, que dependerá de análise e formalização próprias.</p></LegalSection>
      <LegalSection title="3. Uso adequado"><p>O site não pode ser utilizado para finalidades ilícitas, para comprometer sua segurança ou para interferir no acesso de terceiros. Informações enviadas nos canais de contato devem ser verdadeiras e pertinentes à solicitação.</p></LegalSection>
      <LegalSection title="4. Conteúdo e propriedade intelectual"><p>Textos, identidade visual, marcas e demais conteúdos pertencem aos respectivos titulares e não podem ser reproduzidos ou explorados sem autorização, ressalvadas as permissões legais.</p></LegalSection>
      <LegalSection title="5. Links e serviços de terceiros"><p>Links para WhatsApp, Instagram e outros serviços externos estão sujeitos aos termos e políticas dos respectivos fornecedores. A Romanelli Abdalla Advocacia não controla a disponibilidade ou as práticas dessas plataformas.</p></LegalSection>
      <LegalSection title="6. Privacidade"><p>O tratamento de dados pessoais relacionado ao site é descrito na <Link to="/politica-de-privacidade" className="font-semibold text-brand-navy underline underline-offset-2">Política de Privacidade</Link>.</p></LegalSection>
      <LegalSection title="7. Atualizações"><p>Estes termos podem ser atualizados para refletir mudanças legais, técnicas ou operacionais. A versão vigente será indicada nesta página.</p></LegalSection>
    </LegalPageLayout>
  );
}