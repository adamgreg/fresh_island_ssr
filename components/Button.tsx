import { JSX } from "preact";
import { useSignal, useSignalEffect } from "@preact/signals";

import { IS_BROWSER } from "$fresh/runtime.ts";

export function Button(props: JSX.HTMLAttributes<HTMLButtonElement>) {
  const focusCount = useSignal(0);

  useSignalEffect(() => {console.log(`focusCount is ${focusCount.value}`)});

  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class="px-2 py-1 border-gray-500 border-2 rounded bg-white hover:bg-gray-200 transition-colors"
      onFocus={() => focusCount.value += 1}
    />
  );
}
