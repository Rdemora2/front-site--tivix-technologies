import type { ReactNode } from "react";

type PageIntroProps = Readonly<{
  index: string;
  title: ReactNode;
  description: string;
  aside?: ReactNode;
}>;

export default function PageIntro({
  index,
  title,
  description,
  aside,
}: PageIntroProps) {
  return (
    <header className="page-intro">
      <div className="page-intro-grid">
        <p className="page-intro-index">{index}</p>
        <div>
          <h1>{title}</h1>
          <p className="page-intro-description">{description}</p>
        </div>
        {aside ? <div className="page-intro-aside">{aside}</div> : null}
      </div>
    </header>
  );
}
