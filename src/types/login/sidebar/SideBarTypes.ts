 export type IdNavigationItem = 'home' | 'transacoes' | 'metas'  | 'configuracao'|'categoria'|'perfil';

 export type NavigationItem = {
  id: IdNavigationItem;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  children?: NavigationItem[];
  href?: string;
}