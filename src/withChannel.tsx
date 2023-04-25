import React from "react";
import {
  makeDecorator,
  useChannel,
  useState,
  useMemo,
} from "@storybook/preview-api";
import { EVENTS, PARAM_KEY, SOURCE_KEY } from "./constants";
import { Preview } from "./components/Preview";

export const withChannel = makeDecorator({
  name: "withChannel",
  parameterName: PARAM_KEY,
  wrapper: (storyFn, context) => {
    const [permutations, setPermutations] = useState([]);

    useChannel({
      [EVENTS.SET_PERMUTATIONS]: (newValue) => {
        console.log("newValue", newValue);
        console.log("permutations", permutations);

        setPermutations([...permutations, newValue]);

        console.log("new permutations", permutations); //wtf???
      },
    });

    return (
      <div>
        <Preview props={permutations} />
        {storyFn(context)}
      </div>
    );
  },
});
