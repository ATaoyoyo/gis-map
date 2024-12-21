type Position = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

export interface GisControllerProps {
  position?: Position,
}

export interface GisControllerEmits {
  (e: 'zoom-in'): void;

  (e: 'zoom-out'): void;

  (e: 'reset-zoom'): void;

  (e: 'compass'): void;
}
