import WindowControls from '#components/WindowControls';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window';
import React from 'react';

const Text = () => {
  const { windows } = useWindowStore();
  const textData = windows.txtfile?.data;

  if (!textData) return null;

  const { name, image, subtitle, descriptions } = textData;

  return (
    <>
      <div id='window-header '>
        <WindowControls target='txtfile' />
        <h2>{name}</h2>
      </div>

      
      <div
        className='window-content'
        style={{
          maxHeight: '70vh',
          overflowY: 'auto',
          paddingRight: '10px'
        }}
      >
        {image && (
          <img src={image} alt={name} className='text-window-image' />
        )}

        <h1>{name}</h1>

        {subtitle && <h3>{subtitle}</h3>}

        {descriptions && Array.isArray(descriptions) && (
          <div className='text-descriptions'>
            {descriptions.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

const TextWindow = WindowWrapper(Text, 'txtfile');
export default TextWindow;
