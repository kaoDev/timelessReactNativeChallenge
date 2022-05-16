import React from "react";
import ContentLoader, { Rect, Circle } from "react-content-loader/native";

const AssetItemContentLoader = function AssetItemContentLoader(props) {
  return (
    <ContentLoader
      speed={2}
      width={300}
      height={400}
      viewBox="0 0 300 400"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <Rect x="5" y="18" rx="3" ry="3" width="98" height="27" />
      <Rect x="49" y="68" rx="3" ry="3" width="203" height="134" />
      <Rect x="57" y="252" rx="3" ry="3" width="182" height="12" />
      <Rect x="70" y="276" rx="3" ry="3" width="153" height="8" />
      <Circle cx="264" cy="33" r="20" />
    </ContentLoader>
  );
};

export default AssetItemContentLoader;
