import React from "react";

interface Props {
  props: string[];
}

export function Preview({ props }: Props) {
  return (
    <div>
      received
      {props.map((e) => (
        <p>{e}</p>
      ))}
    </div>
  );
}
