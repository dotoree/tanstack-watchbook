import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/video/$id")({
  component: RouteComponent,
});

function RouteComponent() {
  const { id } = Route.useParams();
  const url = "https://www.youtube.com/embed/" + id;
  return (
    <div className="h-[calc(100svh-40px)] flex flex-col">
      <div className="relative grow">
        <iframe
          width="100%"
          height="100%"
          className="absolute inset-0"
          src={url}
        ></iframe>
      </div>
      <div className="grid place-content-center px-4 py-2">
        <Button className="bg-amber-300 text-black hover:text-white">
          Play
        </Button>
      </div>
    </div>
  );
}
