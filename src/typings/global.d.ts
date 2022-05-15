declare global {
  interface Window {
    ym(counter: number, type: string, target: unknown): void;
  }
}

export {};
