import React, { FC, DetailedHTMLProps, useState } from "react";

import "./fileinput.scss";

type RefReturn =
  | string
  | ((instance: HTMLInputElement | null) => void)
  | React.RefObject<HTMLInputElement>
  | null
  | undefined;

type FileinputProps = DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  register: () => RefReturn;
  files: FileList;
};

const Fileinput: FC<FileinputProps> = ({ name, register, files }) => {
  const [dataUrls, setDataUrls] = useState<string[]>([]);
  const readFile = (file: File) => {
    const reader = new FileReader();
    reader.onabort = () => console.log("file reading was aborted");
    reader.onerror = () => console.log("file reading has failed");
    reader.onload = () => {
      const dataUrl: string = reader.result as string;
      setDataUrls([...dataUrls, dataUrl]);
    };
    reader.readAsDataURL(file);
  };

  //   if (files) {
  //     console.log("hi");
  //     Array.from(files).map(file => {
  //       readFile(file);
  //     });
  //   }

  return (
    <div className="fileinput my-4">
      <input type="file" name={name} ref={register} multiple />
      {dataUrls &&
        dataUrls.map(image => {
          return <img src={image} className="fileinput__thumb" />;
        })}
    </div>
  );
};

export default Fileinput;
