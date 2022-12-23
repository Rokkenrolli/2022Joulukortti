import React, { useCallback, useEffect, useState } from "react";


type KeyInput =  [string, KeyboardFunction]
type KeyboardFunction = (e: KeyboardEvent) => any
export const useKeyboard = (functions?: KeyInput[]) => {
  const [registeredInput, setRegisteredInput] = useState<Map<string,KeyboardFunction>>(new Map(functions ?? []))


  const register = useCallback((key:string, fn:KeyboardFunction) => {
    const updated = registeredInput.set(key,fn)
    setRegisteredInput(() => new Map(updated))
  },[registeredInput])

  const unRegister = useCallback((key:string) => {
    const currentMap = new Map(registeredInput)
    const updated = currentMap.delete(key)
    if (!updated) {
      return
    }
    setRegisteredInput(() => currentMap)
  },[registeredInput])

  const handleKeys = useCallback((e:KeyboardEvent) => {
    registeredInput.forEach((fn,key) => {
      if(e.code === key) {
        fn(e)
      }  
    })
  },[registeredInput])

  useEffect(() => {
    document.addEventListener("keydown", handleKeys);
    return () => {
      document.removeEventListener("keydown", handleKeys);
    };
  }, [handleKeys]);

  return {register, unRegister};
};
