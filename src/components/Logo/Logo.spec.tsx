import { expect, test } from "vitest";
import { render } from "vitest-browser-react";
import Logo from "./Logo";

test("<Logo />", async () => {
  const { getByAltText } = render(<Logo />);
  await expect.element(getByAltText("MeMemory")).toBeInTheDocument();
});
