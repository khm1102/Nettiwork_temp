import React from "react";
import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import RootContainer from "@components/Container/RootContainer";
import { PropsWithMainNav } from "src/utils/navigation";
import {
  isTrackReference,
  LiveKitRoom,
  TrackReferenceOrPlaceholder,
  useTracks,
  VideoTrack,
} from "@livekit/react-native";
import { Track } from "livekit-client";
import { useGroupCall } from "@hooks/useGroupCall";

interface Props extends PropsWithMainNav<"GroupCall"> {}

function GroupCallScreen({}: Props) {
  const accessToken = useGroupCall("test-room-id");

  if (accessToken == null) {
    return <Text>{"Connecting..."}</Text>;
  }

  return (
    <RootContainer>
      <View style={styles.container}>
        <LiveKitRoom
          serverUrl="wss://nettiwork-0kjetza2.livekit.cloud"
          token={accessToken}
          options={{
            adaptiveStream: { pixelDensity: "screen" },
          }}
          audio={true}
          video={true}
        >
          <RoomView />
        </LiveKitRoom>
      </View>
    </RootContainer>
  );
}

function RoomView() {
  const tracks = useTracks([Track.Source.Camera]);

  const renderTrack: ListRenderItem<TrackReferenceOrPlaceholder> = ({
    item,
  }) => {
    if (isTrackReference(item)) {
      return <VideoTrack trackRef={item} style={styles.participantView} />;
    } else {
      return <View style={styles.participantView} />;
    }
  };

  return (
    <View style={styles.container}>
      <FlatList data={tracks} renderItem={renderTrack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#ccc",
  },
  participantView: {
    height: 300,
  },
});

export default GroupCallScreen;
