import React from "react";

type LoadingSkeletonProps = {};

const LoadingSkeleton: React.FC<LoadingSkeletonProps> = () => {
  return <div className="w-full h-full bg-slate-400 animate-pulse" />;
};
export default LoadingSkeleton;
