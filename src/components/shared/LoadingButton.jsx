import React from "react";

export default function LoadingButton() {
  return (
    <button className="btn btn-disabled w-full">
      <span className="loading loading-spinner" />
    </button>
  );
}
