 export type IdNavigationItem = 'dashboard' | 'transacoes' | 'investimento' | 'perfil' | 'configuracao'|'login';

 export type NavigationItem = {
  id: IdNavigationItem;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  destino?: string;
}