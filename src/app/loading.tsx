import LoadingComponent from "@/components/LoadingComponent";
import * as React from "react";

function Loading() {
  return (
    <div className="fixed right-0 top-0 z-50 flex size-full items-center justify-center">
      <LoadingComponent />
    </div>
  );
}

export default Loading;
