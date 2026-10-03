import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();
  const pageName = location.pathname;

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-brand-ivory">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-heading text-7xl font-light text-brand-copper">404</h1>
          <div className="h-0.5 w-16 bg-brand-copper/40 mx-auto" />
        </div>
        <div className="space-y-3">
          <h2 className="font-heading text-2xl text-brand-navy">Página não encontrada</h2>
          <p className="font-body text-brand-slate leading-relaxed">
            O endereço <span className="font-medium text-brand-navy">"{pageName}"</span> não existe neste site.
          </p>
        </div>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center rounded-md bg-brand-navy px-5 py-2.5 font-body text-sm font-semibold text-brand-white hover:bg-brand-navy-soft"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}
