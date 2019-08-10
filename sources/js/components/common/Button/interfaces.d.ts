export interface IButton {
  readonly type?: 'button' | 'reset' | 'submit';
  readonly className?: string;
  readonly disabled?: boolean;
  readonly onClick?: (...args: any) => any;
}
