import React from "react";
import { Command } from "cmdk";
import "../styles/cmdk/cmdk.scss";
import { useRouter } from "next/router";

export default function MainCMDK() {
  const [showCommandMenu, setShowCommandMenu] = React.useState(false);
  const router = useRouter();

  const [inputValue, setInputValue] = React.useState("");

  const ref = React.useRef<HTMLDivElement>(null);

  const [pages, setPages] = React.useState<string[]>(["inicio"]);
  const [activePage, setActivePage] = React.useState("inicio");

  const isHome = activePage === "inicio";

  const popPage = React.useCallback(() => {
    setPages((pages) => {
      const x = [...pages];
      x.splice(-1, 1);
      setActivePage(x[x.length - 1] || "inicio");
      return x;
    });
  }, []);

  function bounce() {
    if (ref.current) {
      ref.current.style.transform = "scale(0.96)";
      setTimeout(() => {
        if (ref.current) {
          ref.current.style.transform = "";
        }
      }, 100);

      setInputValue("");
    }
  }

  // Toggle the menu when ⌘K is pressed
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setShowCommandMenu(!showCommandMenu);
        setPages(["inicio"]);
        setActivePage("inicio");
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="vercel">
      <div ref={ref} />
      <Command.Dialog
        container={ref.current as HTMLElement}
        open={showCommandMenu}
        onKeyDown={(e: React.KeyboardEvent) => {
          if (e.key === "Enter") {
            bounce();
          }

          if (isHome || inputValue.length) {
            return;
          }

          if (e.key === "Backspace") {
            e.preventDefault();
            popPage();
            bounce();
          }
        }}
        onOpenChange={(open) => {
          setShowCommandMenu(open);
          if (!open) {
            setInputValue("");
          }
        }}
      >
        <div>
          {pages.map((p) => (
            <div key={p} cmdk-vercel-badge="">
              {p}
            </div>
          ))}
        </div>
        <div className="relative">
          <Command.Input
            autoFocus
            placeholder="Qué estás buscando?"
            onValueChange={(value) => {
              setInputValue(value);
            }}
          />
          <span
            cmdk-vercel-esc=""
            onClick={() => {
              setShowCommandMenu(false);
            }}
          >
            Esc
          </span>
        </div>
        <Command.List>
          {inputValue.length > 0 && (
            <Command.Empty>
              No hay resultados para <strong>{inputValue}</strong>
            </Command.Empty>
          )}
          <Command.Group heading="Acciones">
            <Item onSelect={() => router.push("/curriculum-vitae")}>
              <CvIcon />
              Ver Curriculum Vitae
            </Item>
          </Command.Group>
          <Command.Group heading="Social">
            <Item>
              <LinkedInIcon />
              <a href="https://www.linkedin.com/in/jhonlescano/" target="_blank">
                Visitar LinkedIn
              </a>
            </Item>
            <Item>
              <XIcon />
              <a href="https://twitter.com/jhonson_lc" target="_blank">
                Visitar X
              </a>
            </Item>
            <Item>
              <GitHubIcon />
              <a href="https://github.com/jhonson-lc" target="_blank">
                Visitar GitHub
              </a>
            </Item>
          </Command.Group>
        </Command.List>
      </Command.Dialog>
    </div>
  );
}

function Item({
  children,
  shortcut,
  onSelect = () => {},
}: {
  children: React.ReactNode;
  shortcut?: string;
  onSelect?: (value: string) => void;
}) {
  return (
    <Command.Item onSelect={onSelect}>
      {children}
      {shortcut && (
        <div cmdk-vercel-shortcuts="">
          {shortcut.split(" ").map((key) => {
            return <kbd key={key}>{key}</kbd>;
          })}
        </div>
      )}
    </Command.Item>
  );
}

export function CvIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M11 12.5a1.5 1.5 0 0 0 -3 0v3a1.5 1.5 0 0 0 3 0" />
      <path d="M13 11l1.5 6l1.5 -6" />
    </svg>
  );
}

export function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
      <path d="M8 11l0 5" />
      <path d="M8 8l0 .01" />
      <path d="M12 16l0 -5" />
      <path d="M16 16v-3a2 2 0 0 0 -4 0" />
    </svg>
  );
}

export function XIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  );
}

export function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
    </svg>
  );
}
