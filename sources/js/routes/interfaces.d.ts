export interface IPublicRoute {
  readonly path: string;
  readonly component: React.ComponentType<any>;
  readonly exact?: boolean;
}
