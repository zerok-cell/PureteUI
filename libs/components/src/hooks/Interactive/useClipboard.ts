import { useEffect } from 'react';
import { FTRUseClipboard, FTUseClipboard } from '../../types/hooks/Interactive/useClipboard';

/**
 * A hook for declarative clipboard management.
 *
 * Automatically checks whether clipboard interaction is available in the current environment.
 * Provides methods to read from and write to the clipboard.
 *
 * @function useClipboard
 * @returns An object containing `write` and `read` methods:
 * - `write`: (text: string) => Promise<void> — writes text to the clipboard.
 * - `read`: () => Promise<string> — reads text from the clipboard.
 *
 * @throws Error throw an error if clipboard API is unavailable.
 *
 * @example
 * ```tsx
 * const { write, read } = useClipboard();
 *
 * const copy = () => write('Hello from clipboard!');
 * const paste = async () => {
 *   const text = await read();
 *   console.log(text);
 * };
 * ```
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Clipboard
 * @since 1.0.0
 *
 * @group Hooks
 */
export const useClipboard: FTUseClipboard = () => {
  const clip = navigator.clipboard;
  const clipWrite = clip.writeText.bind(clip);
  const clipRead = clip.readText.bind(clip);

  const exist = async <T>(variable: T): Promise<boolean | Error> => {
    if (!variable) throw Error('Could not use clipboard');
    return true;
  };
  useEffect(() => {
    const existEffect = async () => {
      await exist<typeof clip>(clip);
      await exist<typeof clipWrite>(clipWrite);
      await exist<typeof clipRead>(clipRead);
    };
    existEffect().then();
  }, [clipWrite, clipRead, clip]);

  const write: FTRUseClipboard['write'] = async (text: string) => {
    if ((await read()) === text) {
      return;
    }
    await clipWrite(text);
  };
  const read: FTRUseClipboard['read'] = async () => await clipRead();
  return {
    write,
    read,
  };
};
