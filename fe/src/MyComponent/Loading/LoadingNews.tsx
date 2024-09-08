import React from "react";

export default function LoadingNews({
  Total_Loading,
}: {
  Total_Loading?: number;
}) {
  return (
    <>
      {Total_Loading ? (
        <section className="w-full grid grid-cols-3 place-items-center">
          {Array.from({ length: Total_Loading }, (_, i) => (
            <div className="w-full h-full grid place-items-center" key={i}>
              <div className="loaderCard "></div>
            </div>
          ))}
        </section>
      ) : (
        <div className=" w-full flex justify-center ">
          <div className="loaderCard "></div>
        </div>
      )}
    </>
  );
}
