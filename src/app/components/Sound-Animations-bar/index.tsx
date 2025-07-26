import React from "react";
import { CloudRain, Bird, Flame, Waves, Lock } from "lucide-react";

const SoundAnimationsBar = () => {
  const [soundItems, setSoundItems] = React.useState([
    { name: "Rain", icon: CloudRain, state: "enable" },
    { name: "Birds", icon: Bird, state: "disable" },
    { name: "Campfire", icon: Flame, state: "disable" },
    { name: "Waves", icon: Waves, state: "enable" },
    { name: "Thunderstorm", icon: Lock, state: "lock" },
    { name: "Keyboard", icon: Lock, state: "lock" },
    { name: "Cafe", icon: Lock, state: "lock" },
    { name: "Wind Chimes", icon: Lock, state: "lock" },
    { name: "Singing Bowl", icon: Lock, state: "lock" },
    { name: "White Noise", icon: Lock, state: "lock" },
    { name: "Crickets", icon: Lock, state: "lock" },
  ]);

  const handleChangeSoundState = (index: number) => {
    const currentItem = soundItems[index];

    if (currentItem.state === "lock") {
      return;
    }

    if (currentItem.state === "enable") {
      setSoundItems((prevItems) =>
        prevItems.map((item, i) => {
          if (i === index) {
            return { ...item, state: "disable" };
          }
          return item;
        })
      );
    } else {
      setSoundItems((prevItems) =>
        prevItems.map((item, i) => {
          if (i === index) {
            return { ...item, state: "enable" };
          }
          return item;
        })
      );
    }

  };

  return (
    <div className="grid grid-cols-3 gap-4 text-center p-4 cursor-pointer">
      {soundItems.map((item, index) => {
        const Icon = item.icon;
        return (
          <div
            onClick={() => handleChangeSoundState(index)}
            key={item.name}
            className="flex flex-col items-center"
          >
            {item.state === "lock" ? (
              <Icon className="text-orange-500" size={32} />
            ) : (
              <Icon
                className={`${
                  item.state === "enable" ? "text-orange-500" : "text-gray-400"
                }`}
                size={28}
              />
            )}
            <span
              className={`mt-2 ${
                item.state === "disable" ? "text-gray-400" : item.state === "lock" ? "text-orange-300" : "text-orange-500"
              }`}
            >
              {item.name}
            </span>
            {item.state === "enable" && (
              <input type="range" className="mt-1 w-full accent-orange-500" />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default SoundAnimationsBar;
