import React from "react";

type pageProps = {};

const page: React.FC<pageProps> = () => {
  return (
    <div className="min-h-screen pt-32">
      <iframe
        className="w-full min-h-screen overflow-x-hidden"
        src="/Nicholas-Abell.pdf"
      ></iframe>
    </div>
  );
};
export default page;
