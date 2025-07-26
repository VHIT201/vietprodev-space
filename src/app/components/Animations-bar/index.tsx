import React, {useEffect, useState} from "react";
import { CloudRain, Snowflake } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import useGlobalStore from "@/store/globalStore";

const AnimationsBar = () => {
  const { isSnowOverlayVisible, setSnowOverlayVisible } = useGlobalStore();
  const [animations, setAnimations] = useState([
    { name: "Snow", icon: CloudRain, enabled: isSnowOverlayVisible },
    { name: "Rain", icon: Snowflake, enabled: true },
  ]);

  const handleToggle = (index: number) => {
    // setAnimations((prevAnimations) =>
    //   prevAnimations.map((animation, i) =>
    //     i === index ? { ...animation, enabled: !animation.enabled } : animation
    //   )
    // );
    if (index === 0) {
      setSnowOverlayVisible(!isSnowOverlayVisible);
    } else if (index === 1) {
      // Handle snow animation toggle if needed
    }
  };

  useEffect(() => {
    setAnimations((prevAnimations) =>
      prevAnimations.map((animation, i) =>
        i === 0 ? { ...animation, enabled: isSnowOverlayVisible } : animation
      )
    );
  }, [isSnowOverlayVisible]);

  return (
    <div className="p-4 rounded-xl shadow-lg cursor-pointer">
      <div className="space-y-4">
        {animations.map((animation, index) => {
          const Icon = animation.icon;
          return (
            <div
              key={animation.name}
              className="flex items-center justify-between text-white"
            >
              <div className="flex items-center space-x-4">
                <Icon size={24} className="text-orange-500" />
                <span className="text-orange-500 font-semibold">
                  {animation.name}
                </span>
              </div>
              <Switch
                checked={animation.enabled}
                onCheckedChange={() => handleToggle(index)}
                className="data-[state=checked]:bg-orange-500 bg-black border-black"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AnimationsBar;
