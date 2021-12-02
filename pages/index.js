import Script from "next/script";
import Head from "next/head";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicMap = dynamic(() => import("../components/Map3"), { ssr: false });

export default function Home() {
  const [apikey, setApiKey] = useState("");

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://js.api.here.com/v3/3.1/mapsjs-ui.css"
        />
      </Head>
      <Script
        src="https://js.api.here.com/v3/3.1/mapsjs-core.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://js.api.here.com/v3/3.1/mapsjs-service.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://js.api.here.com/v3/3.1/mapsjs-ui.js"
        strategy="beforeInteractive"
      />
      <Script
        src="https://js.api.here.com/v3/3.1/mapsjs-mapevents.js"
        strategy="beforeInteractive"
      />
      <main>
        <div>Hello</div>
        <input onChange={(e) => setApiKey(e.target.value)} value={apikey} />

        <DynamicMap apikey={apikey} />
      </main>
    </div>
  );
}
