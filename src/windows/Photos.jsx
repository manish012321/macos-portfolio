
import WindowControls from '#components/WindowControls'
import { gallery, photosLinks } from '#constants';
import WindowWrapper from '#hoc/WindowWrapper';
import useWindowStore from '#store/window'
import React from 'react'

const Photos = () => {

    const { openWindow } = useWindowStore();

    return (
     <>
       <div id='window-header'>
            <WindowControls target="photos" />
            <h2>Photos</h2>
        </div>

        <div className='flex w-full'>
            <div className='sidebar'>
                <h2>Photos</h2>

                <ul>
                    {photosLinks.map(({id,icon,title}) => {
                      const IconComp = icon;
                      return (
                        <li key={id} className="flex items-center gap-2">
                          {typeof icon === 'string' ? (
                            <img src={icon} alt={title} />
                          ) : (
                            IconComp ? <IconComp /> : null
                          )}
                          <p>{title}</p>
                        </li>
                      );
                    })}
                </ul>
            </div>

            <div className='gallery'>
                    <ul>
                        {gallery.map(({id,img}) => (
                            <li
                              key={id}
                              role="button"
                              tabIndex={0}
                              onClick={() => openWindow("imgfile", {
                                id,
                                name: "Gallery image",
                                icon: "/images/image.png",
                                kind: "file",
                                fileType: "img",
                                imageUrl: img,
                              })}
                              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') {
                                e.preventDefault();
                                openWindow("imgfile", {
                                  id,
                                  name: "Gallery image",
                                  icon: "/images/image.png",
                                  kind: "file",
                                  fileType: "img",
                                  imageUrl: img,
                                });
                              }}}
                            >
                                <img src={img} alt={`Gallery image ${id}`} />
                            </li>
                        ))}
                    </ul>
            </div>
        </div>
     </>
    )
}


const PhotosWindow = WindowWrapper(Photos, 'photos');
export default PhotosWindow;
