import Player from "@/components/Player";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/video/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const url = "https://www.youtube.com/watch?v=" + id;
  const timestamp = 2318;
  const playbackRate = 1.25;
  return (
    <div className="h-[calc(100svh-40px)] flex flex-col">
      <div className="relative grow">
        <Player src={url} start={timestamp} playbackRate={playbackRate} />
      </div>
    </div>
  );
}
