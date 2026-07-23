import type {Metadata} from "next";
import "./globals.css";
const description="Listening bar en Palermo, Buenos Aires. Vinilos, alta fidelidad y coctelería de autor.";
export const metadata:Metadata={title:"Vinyl & Tonic — Listening Bar",description,openGraph:{title:"Vinyl & Tonic",description,images:["/og.png"],locale:"es_AR",type:"website"},twitter:{card:"summary_large_image",title:"Vinyl & Tonic",description,images:["/og.png"]}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
