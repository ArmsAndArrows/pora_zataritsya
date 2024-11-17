// custom.d.ts


declare global {
  namespace JSX {
    interface IntrinsicElements {
      "model-viewer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          "auto-rotate"?: boolean;
          "auto-rotate-delay"?: string;
          "camera-controls"?: boolean;
          "camera-orbit"?: string;
          "disable-zoom"?: boolean;
          exposure?: string;
          "interaction-prompt"?: string;
          loading?: string;
          "min-camera-orbit"?: string;
          "max-camera-orbit"?: string;
          "rotation-per-second"?: string;
          "shadow-intensity"?: string;
          "shadow-softness"?: string;
          src?: string;
          "tone-mapping"?: string;
        },
        HTMLElement
      >;
    }
  }


  interface SpeechRecognitionEvent extends Event {
    readonly results: SpeechRecognitionResultList;
  }

  interface SpeechRecognitionResultList
    extends Array<SpeechRecognitionResult> {}

  interface SpeechRecognitionResult {
    readonly isFinal: boolean;
    readonly length: number;
    readonly [index: number]: SpeechRecognitionAlternative;
  }

  interface SpeechRecognitionAlternative {
    readonly transcript: string;
    readonly confidence: number;
  }

  interface SpeechRecognitionErrorEvent extends Event {
    readonly error: string;
    readonly message: string;
  }

  interface SpeechRecognition {
    new (): SpeechRecognition;
    continuous: boolean;
    lang: string;
    interimResults: boolean;
    maxAlternatives: number;
    start(): void;
    stop(): void;
    onstart: ((this: SpeechRecognition, ev: Event) => any) | null;
    onresult:
      | ((this: SpeechRecognition, ev: SpeechRecognitionEvent) => any)
      | null;
    onerror:
      | ((this: SpeechRecognition, ev: SpeechRecognitionErrorEvent) => any)
      | null;
    onend: ((this: SpeechRecognition, ev: Event) => any) | null;
  }


  interface Window {
    SpeechRecognition: SpeechRecognition;
    webkitSpeechRecognition: SpeechRecognition;
  }
}

export {};
