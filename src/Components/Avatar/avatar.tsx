import { Avatar } from "@rneui/themed";

// https://reactnativeelements.com/docs/components/avatar#props
export function RenderAvatar(props: AvatarProps) {
    const defaultProps = {
      size: props.size ?? 32,
      rounded: true,
    }
  
  
    const initialsOfName = props.name.split(" ").map((word) => word[0]).join("");
    if (props.profilePicture && props.profilePicture !== "") {
      return <Avatar
        size={props.size ?? 32}
        rounded
        source={{
          uri: props.profilePicture,
        }}
      />
    }
    else return <Avatar
      size={props.size ?? 32}
      containerStyle={{ backgroundColor: getRandomColour() }}
      rounded
      title={initialsOfName}
    />
  }
  
  function getRandomColour()
  {
    // Red, Green, Blue, Yellow, Magenta
    const colours = ["#ff0000", "#009e00", "#0000ff", "#c4c402", "#ff00ff"];
    return colours[Math.floor(Math.random() * colours.length)];
  }

  interface AvatarProps {
    name: string;
    profilePicture?: string;
    size?: number;
  };
  