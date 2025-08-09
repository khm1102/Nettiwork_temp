import { GroupCallApi } from "@nettiwork/client-modules";
import { logger } from "@nettiwork/common";
import { useEffect, useState } from "react";

/**
 * 그룹 콜 참가를 위한 정보 반환
 *
 * @param roomId 참여하고자 하는 Room ID
 * @returns `LiveKit access token`
 */
export function useGroupCall(roomId: string) {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    if (accessToken) {
      return;
    }

    GroupCallApi.joinRoom({
      roomId: roomId,
    })
      .then(data => {
        setAccessToken(data.accessToken);
      })
      .catch(error => {
        logger.error(`useGroupCall ${error}`);
      });
  }, [accessToken, roomId]);

  return accessToken;
}
