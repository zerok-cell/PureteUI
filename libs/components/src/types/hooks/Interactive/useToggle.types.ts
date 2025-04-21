export type FTRUseToggle = {
  toggle: boolean;
  swap: () => void;
};
export type FTUseToggle = (initial?: boolean) => FTRUseToggle;
