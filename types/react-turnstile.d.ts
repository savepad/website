declare module '@marsidev/react-turnstile' {
    import * as React from 'react';
  
    interface TurnstileProps {
      sitekey: string;
      onVerify?: (token: string) => void;
      onError?: () => void;
      onExpire?: () => void;
      theme?: 'light' | 'dark' | 'auto';
      size?: 'normal' | 'compact' | 'invisible';
      tabindex?: number;
      cData?: string;
      retry?: 'auto' | 'manual';
      action?: string;
      execution?: 'render' | 'execute';
      language?: string;
    }
  
    const Turnstile: React.FC<TurnstileProps>;
  
    export default Turnstile;
  }
  