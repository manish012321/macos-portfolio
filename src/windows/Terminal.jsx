import { techStack } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import React from 'react';
import { Check, Flag } from 'lucide-react'; 
import WindowControls from '#components/WindowControls';

const Terminal = () => {
  return (
    <>
      <div id="window-header">
        <WindowControls target="terminal" />
        <h2>Tech Stack</h2>
      </div>

      <div className="techstack">
        <p>
          <span className="font-bold">@manish % </span>
          show tech stack
        </p>

        <div className="label">
          <p className="w-32">Category</p>
          <p>Technologies</p>
        </div>

        <ul className="content">
          {techStack.map(({ category, items }) => (
            <li className="flex items-center gap-2" key={category}>
              <Check className="check" size={20} />
              <h3 className="font-semibold">{category}</h3>
              <ul className="ml-4 list-disc">
                {items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className='footnote'>
          <p>
            <Check size={20}/> 5 of 5 stacks loaded successfully(100%)
          </p>
          <p className='text-black'>
            <Flag size={15} fill='black'/>
            render time: 6ms
          </p>
        </div>
      </div>
    </>
  );
};

const TerminalWindow = WindowWrapper(Terminal, 'terminal');

export default TerminalWindow;
