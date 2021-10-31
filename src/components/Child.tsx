import React from "react";
import { VFC } from "react";

type Props = {
  count: number;
};

export const Child: VFC<Props> = ({ count }) => {
  return (
    <div>
      <p>子カウント：{count}</p>
    </div>
  );
};
