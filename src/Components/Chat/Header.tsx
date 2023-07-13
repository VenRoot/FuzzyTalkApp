import { View, Text, GestureResponderEvent } from "react-native";
import { Avatar, Header, Icon } from "@rneui/themed";
import { IconButton } from "@react-native-material/core";
import LinearGradient from "react-native-linear-gradient";
import { NavigationProp } from "@react-navigation/native";
import { ChatWindowProps } from "../../Pages/ChatWindow";
import { Menu, MenuOption, MenuOptions, MenuProvider, MenuTrigger } from "react-native-popup-menu";
import { useEffect, useState } from "react";

export default function _Header({lastSeen, name, navigation, profilePicture}: {lastSeen: Date, name: string, navigation: NavigationProp<any>, profilePicture: string | undefined}) {

  const nav = navigation;

  function pressBackButton(event: GestureResponderEvent) {
    if(nav?.canGoBack()) nav.goBack();
  }
  return (
    <Header
      style={{
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}

      leftComponent={
        <RenderBackButton onPress={pressBackButton} />
      }

      // leftComponent={
      //     <Icon name="arrow-back" color="#ffffff" size={40} type="material" />
      // }

      centerComponent={
        <View style={{
          flex: 1,
          flexDirection: "row",
          width: "100%",
          justifyContent: "flex-start",
        }}>
          <RenderAvatar name={name} size={50} profilePicture={profilePicture} />
          <View>
            <Text style={{
              flexShrink: 1,
              overflow: "hidden",
              flex: 1,
              paddingLeft: 10,
              width: "50%",
              color: "#fff",
              fontSize: 25,
              fontWeight: "bold",
              fontFamily: "Arial",
              textAlign: "left",
              alignSelf: "flex-start",
            }}
            >
              {name}
            </Text>
            <Text style={{
              paddingLeft: 10,
            }}>
              last seen {lastSeen?.toLocaleTimeString().split(":").slice(0, 2).join(":")}
            </Text>
          </View>
          
        </View>
      }
      rightComponent={
        <RenderMenuButton onPress={() => {}} />
      }

      ViewComponent={LinearGradient}
      linearGradientProps={{
        colors: ['#000000', '#444444'],
        start: { x: 0, y: 0.1 },
        end: { x: 1, y: 0.1 },
      }}
    />
  )
}

interface HeaderProps extends ChatWindowProps { }

interface AvatarProps {
  name: string;
  profilePicture?: string;
  size?: number;
};


function RenderBackButton({onPress} : {onPress?: (event: GestureResponderEvent) => void})
{
  return <IconButton cancelable onPress={onPress} pressEffect="android-ripple" pressEffectColor="white" icon={() => <Icon name="arrow-back" style={{alignSelf: "flex-start"}} color='#ffffff' size={25} type="material" />} />

}

function RenderMenuButton({onPress} : {onPress?: (event: GestureResponderEvent) => void})
{
  const [open, setOpen] = useState(false);
  useEffect(() => {
    console.log("open changed");
    console.log(open);
  }, [open])

  return <>
    <MenuProvider>
      <Menu opened={open}
      onClose={() => setOpen(false)}
      onSelect={() => setOpen(false)}
      style={{
        height: "200%"
      }}
      >
        <MenuTrigger onPress={() => setOpen((prev) => !prev)}>
          <IconButton cancelable onPress={() => setOpen((prev) => !prev)} pressEffect="android-ripple" pressEffectColor="white" icon={() => <Icon name="more-vert" style={{alignSelf: "flex-start"}} color='#ffffff' size={25} type="material" />} />
        </MenuTrigger>
        <MenuOptions>
          <MenuOption style={{ backgroundColor: "#252525", width: "100%", position: "relative" }} onSelect={() => setOpen(false)} text='Blockieren' />
          <MenuOption style={{ backgroundColor: "#252525", width: "100%", position: "relative" }} onSelect={() => setOpen(false)} text='Verlauf löschen' />
        </MenuOptions>
      </Menu>
    </MenuProvider>
  </>
  
}


export function DottedMenu() {
  return (
    <>
          <Menu>
              <MenuTrigger text='...' />
              <MenuOptions>
                  <MenuOption onSelect={() => console.log('User blockiert')} text='Blockieren' />
                  <MenuOption onSelect={() => console.log('Verlauf gelöscht')} text='Verlauf löschen' />
              </MenuOptions>
          </Menu>
    </>
          
  );
}

function DotMenu(props: {open: boolean, setOpen: (open: boolean) => void})
{

  return <Menu
  opened={props.open}
  >
  <MenuTrigger customStyles={
    {
      triggerWrapper: {
        width: 50,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
      }
    }
  }/>
  <MenuOptions>
    <MenuOption text="Block" />
    <MenuOption>
      <Text style={{ color: 'red' }}>Clear history</Text>
    </MenuOption>
  </MenuOptions>
</Menu>
}


// https://reactnativeelements.com/docs/components/avatar#props
function RenderAvatar(props: AvatarProps) {
  const defaultProps = {
    size: props.size ?? 32,
    rounded: true,
  }


  const initialsOfName = props.name.split(" ").map((word) => word[0]).join("");
  if (props.profilePicture) {
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
    containerStyle={{ backgroundColor: "blue" }}
    rounded
    title={initialsOfName}
  />
}

