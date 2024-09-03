import { darkSwitch } from "@/utils/atom";
import { Button, Switch } from "@nextui-org/react";
import { useAtom } from "jotai";

import { useEffect } from "react";
import MoonIcon from "./icons/MoonIcon";
import SunIcon from "./icons/SunIcon";

const Btn = () => {
  const [black, setBlack] = useAtom(darkSwitch);
  useEffect(() => {
    if (black) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [black]);

  return (
    <>
      <Button
        onPress={() => setBlack(!black)}
        variant="ghost"
        size="lg"
        isIconOnly
      >
        {black ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};

export default Btn;
