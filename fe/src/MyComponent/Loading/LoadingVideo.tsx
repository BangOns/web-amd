import React from "react";
import ContentLoader from "react-content-loader";

const LoadingVideo = ({ Total_Loading }: { Total_Loading?: number }) => (
  <>
    {Total_Loading ? (
      Array.from({ length: Total_Loading }, (_, i) => (
        <div className="w-full h-full grid place-items-center" key={i}>
          <ContentLoader
            viewBox="0 0 400 160"
            height={160}
            speed={2}
            width={400}
            backgroundColor="transparent"
          >
            <circle cx="150" cy="86" r="8" />
            <circle cx="194" cy="86" r="8" />
            <circle cx="238" cy="86" r="8" />
          </ContentLoader>
        </div>
      ))
    ) : (
      <div className="w-full h-full grid place-items-center">
        <ContentLoader
          viewBox="0 0 400 160"
          height={160}
          speed={2}
          width={400}
          backgroundColor="transparent"
        >
          <circle cx="150" cy="86" r="8" />
          <circle cx="194" cy="86" r="8" />
          <circle cx="238" cy="86" r="8" />
        </ContentLoader>
      </div>
    )}
  </>
);
export default LoadingVideo;
