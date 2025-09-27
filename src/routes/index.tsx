import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: App,
});

function App() {
  return (
    <div className="text-center">
      <ul>
        <li>
          <Link to="/video/$id" params={{ id: "8QDT776XtO8" }}>
            Video 8QDT776XtO8
          </Link>
        </li>
      </ul>
    </div>
  );
}
