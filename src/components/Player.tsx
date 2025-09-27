import ReactPlayer from "react-player";
import {
  MediaController,
  MediaControlBar,
  MediaTimeRange,
  MediaTimeDisplay,
  MediaVolumeRange,
  MediaPlaybackRateButton,
  MediaPlayButton,
  MediaSeekBackwardButton,
  MediaSeekForwardButton,
  MediaMuteButton,
  MediaFullscreenButton,
} from "media-chrome/react";

export default function Player({
  src,
  start,
  playbackRate,
}: {
  src: string;
  start: number;
  playbackRate: number;
}) {
  return (
    <MediaController className="absolute inset-0">
      <ReactPlayer
        slot="media"
        src={src}
        controls={false}
        style={{
          width: "100%",
          height: "100%",
        }}
        playbackRate={playbackRate ?? 1}
        config={{
          youtube: {
            start: start ?? 0,
          },
        }}
      ></ReactPlayer>
      <MediaControlBar>
        <MediaPlayButton />
        <MediaSeekBackwardButton seekOffset={10} />
        <MediaSeekForwardButton seekOffset={10} />
        <MediaTimeRange />
        <MediaTimeDisplay showDuration />
        <MediaMuteButton />
        <MediaVolumeRange />
        <MediaPlaybackRateButton />
        <MediaFullscreenButton />
      </MediaControlBar>
    </MediaController>
  );
}
