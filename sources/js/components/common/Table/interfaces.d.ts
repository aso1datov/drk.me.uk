export interface ITable {
  readonly className?: string;
  readonly bordered?: boolean;
  readonly responsive?: boolean | 'sm' | 'md' | 'lg' | 'xl';
}
