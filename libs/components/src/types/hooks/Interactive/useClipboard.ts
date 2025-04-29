export type FTRUseClipboard = {
  write: (text: string) => Promise<void>;
  read: () => Promise<string>;
};

export type FTUseClipboard = () => FTRUseClipboard;
