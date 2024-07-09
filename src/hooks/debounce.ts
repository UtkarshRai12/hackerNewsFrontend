type DebouncedFunction = (...args: any[]) => void;
export const debounce = (func:()=>boolean|undefined, wait:number, ...args:[]):DebouncedFunction => {
    let timeout:ReturnType<typeof setTimeout>|null
    let immediate:boolean=false
    return ()=> {
      const context = this;
      const callNow = immediate && !timeout;
      const later = () => {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(later, wait);
  
      if (callNow) func.apply(context, args);
    };
  };
  