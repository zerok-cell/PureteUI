export type FTRBuilder<TOther extends object> = {
  loadPlugin: string[];
  plugin: () => void;
} & TOther;
