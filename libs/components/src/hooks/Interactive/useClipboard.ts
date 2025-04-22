import { useEffect } from 'react';

export const useClipboard = () => {
  const clip = navigator.clipboard
  const clipWrite = clip.writeText
  const clipRead = clip.readText

  const exist = <T>(variable:T):boolean|Error=>{
    if (!variable) throw Error('Could not use clipboard')
    return true
  }
  useEffect(() => {
    exist<typeof clip>(clip)
    exist<typeof clipWrite>(clipWrite)
    exist<typeof clipRead>(clipRead)
  }, [clipWrite,clipRead,clip]);

  const write = async (text:string) =>{
    return await clipWrite(text)
  }
  const read = async ()=>{
    return  await clipRead()
  }
  return {
    write,
    read
  }
};
