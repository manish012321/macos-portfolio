import React from "react";
import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageWindowContent = () => {
  const { windows } = useWindowStore();
  const data = windows.imgfile?.data;

  if (!data) return null;

  const { name, imageUrl } = data;

  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>

      <div className="p-5 bg-white overflow-auto max-h-[70vh] flex justify-center items-center">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-auto max-h-[70vh] object-contain rounded"
          />
        ) : (
          <p className="text-gray-400 text-center">⚠ No image found.</p>
        )}
      </div>
    </>
  );
};

export default WindowWrapper(ImageWindowContent, "imgfile");
