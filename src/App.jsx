import { env } from "./config/env.js";

function Home() {
  return (
    <>
      <h1>{env.appName}</h1>
      <p>{env.appVersion}</p>
    </>
  );
}

export default Home;