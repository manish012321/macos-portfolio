import WindowControls from '#components/WindowControls';
import { socials } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react';

const Contact = () => {
  return (
    <>
      <div id='window-header'>
        <WindowControls target="contact" />
        <h2>Contact Me</h2>
      </div>

      <div className="p-5 space-y-5">
        <img src="/images/adrian.jpg" alt="" className="w-20 rounded-full" />
        <h3>Let's Connect</h3>
        <p>You can reach me at email@example.com or follow me on social media.</p>

        <ul className="flex items-center gap-4 list-none p-0 m-0">
          {socials.map(({ id, bg, link, icon, text }) => {
            const IconComp = icon; 
            return (
              <li
                key={id}
                style={{ backgroundColor: bg }}
                className="rounded-lg p-3"
              >
                <a href={link} target="_blank" rel="noreferrer noopener" title={text} className="flex items-center gap-2">
                  {typeof icon === 'string' ? (
                    <img src={icon} alt={text} className="w-5 h-5" />
                  ) : (
                    IconComp ? <IconComp className="w-5 h-5" /> : null
                  )}
                  <p className="text-white text-sm">{text}</p>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

const ContactWindow = WindowWrapper(Contact, 'contact');

export default ContactWindow;