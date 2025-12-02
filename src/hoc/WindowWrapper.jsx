import useWindowStore from '#store/window';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Draggable from "react-draggable";
import React, { useRef, useLayoutEffect } from 'react';

const WindowWrapper = (Component, windowKey) => {

  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const { isOpen, zIndex } = windows[windowKey];
    
    const ref = useRef(null);

    
    useGSAP(() => {
      if (!ref.current || !isOpen) return;

      gsap.fromTo(
        ref.current,
        { scale: 0.8, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      );
    }, [isOpen]);

    
    useLayoutEffect(() => {
      if (!ref.current) return;
      ref.current.style.visibility = isOpen ? "visible" : "hidden";
      ref.current.style.pointerEvents = isOpen ? "auto" : "none";
    }, [isOpen]);

    if (!isOpen) return null;

    return (
      <Draggable nodeRef={ref} bounds="parent" onStart={() => focusWindow(windowKey)}>
        <section
          id={windowKey}
          ref={ref}
          style={{
            zIndex,
            position: 'absolute',
            left: 0,
            top: 0,
          }}
          className="select-none cursor-grab"
          onMouseDown={() => focusWindow(windowKey)}
        >
          <Component {...props} />
        </section>
      </Draggable>
    );
  };

  return Wrapped;
};

export default WindowWrapper;
