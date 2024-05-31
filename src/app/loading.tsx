import LoadingComponent from "@/components/LoadingComponent";
import * as React from "react";

function Loading() {
  return (
    <div className="z-100 fixed right-0 top-0 flex h-full w-full items-center justify-center">
      <LoadingComponent />
    </div>
  );
}

export default Loading;
