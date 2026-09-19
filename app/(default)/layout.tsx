import type React from "react";

import Footer from "@/components/ui/footer";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main id="conteudo">{children}</main>
      <Footer />
    </>
  );
}
