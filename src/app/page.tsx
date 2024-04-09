"use client";
import { LineChart } from "@mui/x-charts/LineChart";
import Image from "next/image";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Home() {
  const [headerText, setHeaderText] = useState("Hello, World!");
  const [headerTextColor, setHeaderTextColor] = useState(textGradients[0]);
  const [headerAccentColor, setHeaderAccentColor] = useState(bgColors[0]);
  const [tileNumber, setTileNumber] = useState(0);

  const handleColorChange = (i: number) => {
    setHeaderTextColor(textGradients[i]);
    setHeaderAccentColor(bgColors[i]);
    setTileNumber(i);
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 hidden bg-zinc-950/80 backdrop-blur transition will-change-auto md:block">
        <div className="mx-auto max-w-screen-xl px-6 md:px-10">
          <div className="flex items-center border-b border-b-white/5 py-5 md:grid md:grid-cols-6">
            <div className="flex items-center">
              <a href="/">
                <img
                  src="https://cdn.join.com/62249ef5fd3020000844b0a2/stealth-startup-berlin-logo-l.png"
                  className="h-10"
                />
              </a>
              <span className="font-sans font-bold text-lg text-gray-300">
                Stealth Mode.
              </span>
            </div>
            <nav
              aria-label="Main"
              data-orientation="horizontal"
              dir="ltr"
              className="relative z-50 col-span-4 flex w-full items-center justify-center"
            >
              <div className="relative">
                <ul
                  data-orientation="horizontal"
                  className="flex items-center"
                  dir="ltr"
                >
                  <li>
                    <a
                      className="flex select-none items-center gap-0.5 rounded-full px-3 py-2 opacity-60 hover:bg-white/5 hover:opacity-100"
                      href="/docs"
                      data-radix-collection-item=""
                    >
                      Docs
                    </a>
                  </li>
                  <li>
                    <button
                      id="radix-:Rhla:-trigger-radix-:R3bhla:"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:Rhla:-content-radix-:R3bhla:"
                      className="group flex select-none items-center gap-0.5 rounded-full px-3 py-2 opacity-60 hover:bg-white/5 hover:opacity-100 data-[state=open]:bg-white/5 data-[state=open]:opacity-100"
                      data-radix-collection-item=""
                    >
                      Resources
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="duration opacity-60 transition-transform ease-in group-data-[state=open]:-rotate-180"
                      >
                        <path d="M6 9l6 6l6 -6"></path>
                      </svg>
                    </button>
                  </li>

                  <li>
                    <button
                      id="radix-:Rhla:-trigger-radix-:R5bhla:"
                      data-state="closed"
                      aria-expanded="false"
                      aria-controls="radix-:Rhla:-content-radix-:R5bhla:"
                      className="group flex select-none items-center gap-0.5 rounded-full px-3 py-2 opacity-60 hover:bg-white/5 hover:opacity-100 data-[state=open]:bg-white/5 data-[state=open]:opacity-100"
                      data-radix-collection-item=""
                    >
                      Support
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="duration opacity-60 transition-transform ease-in group-data-[state=open]:-rotate-180"
                      >
                        <path d="M6 9l6 6l6 -6"></path>
                      </svg>
                    </button>
                  </li>
                </ul>
              </div>
              <div className="absolute left-20 right-0 top-full flex w-full justify-center perspective-[2000px]"></div>
            </nav>
            <div className="flex justify-end">
              <a
                target="_self"
                className="group/link-new inline-flex cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full text-zinc-50 bg-white/5 hover:bg-blue-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50"
                href="#"
              >
                <span>Login</span>
              </a>
            </div>
          </div>
        </div>
      </header>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section className="relative z-10 py-32 h-[72vh] ">
          <div
            className={`absolute left-1/2 top-1/2 -z-10 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 opacity-20  blur-[100px] ${headerAccentColor} transition-all`}
          ></div>
          <div className="mx-auto max-w-screen-xl px-6 md:px-10">
            <h1
              className={`inline-flex text-center flex-col gap-1 transition font-display text-6xl font-bold leading-none md:text-[8rem] bg-gradient-to-r from-20% bg-clip-text text-transparent w-full ${headerTextColor}`}
            >
              <span>Human</span>
              <span>Data Platform</span>
            </h1>
            <div className="mt-8 grid gap-2 md:mt-16 md:grid-cols-2 xl:grid-cols-4 text-center">
              <Tile
                onMouseOver={() => handleColorChange(1)}
                onMouseLeave={() => handleColorChange(0)}
              >
                <a className="absolute inset-0 z-10" href="#"></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Wearables</span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Collect user heath data from wearables
                </p>
                <a
                  target="_blank"
                  className={`group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex ${
                    tileNumber == 1 ? bgColors[1] : "bg-zinc-50"
                  } text-zinc-950`}
                  href="#"
                >
                  <span>Provider List</span>
                  <Line />
                </a>
              </Tile>
              <Tile
                onMouseOver={() => handleColorChange(2)}
                onMouseLeave={() => handleColorChange(0)}
              >
                <a className="absolute inset-0 z-10" href="#"></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Labs</span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Store and analyze lab results
                </p>
                <a
                  target="_blank"
                  className={`group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex ${
                    tileNumber == 2 ? bgColors[2] : "bg-zinc-50"
                  } text-zinc-950`}
                  href="#"
                >
                  <span>Lab List</span>
                  <Line />
                </a>
              </Tile>
              <Tile
                onMouseOver={() => handleColorChange(3)}
                onMouseLeave={() => handleColorChange(0)}
              >
                <a className="absolute inset-0 z-10" href="#"></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Clinical</span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Collect data from EHR networks
                </p>
                <a
                  target="_blank"
                  className={`group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 disabled:bg-white/5 disabled:text-zinc-50 mt-4 hidden md:inline-flex ${
                    tileNumber == 3 ? bgColors[3] : "bg-zinc-50"
                  } text-zinc-950`}
                  href="#"
                >
                  <span>Network List</span>
                  <Line />
                </a>
              </Tile>
              <Tile
                onMouseOver={() => handleColorChange(4)}
                onMouseLeave={() => handleColorChange(0)}
              >
                <a className="absolute inset-0 z-10" href="#"></a>
                <h3 className="flex items-center gap-1 text-zinc-50 font-display text-xl font-medium leading-none md:text-2xl">
                  <span>Ai</span>
                  <span className="ml-0.5 rounded bg-purple-500 px-1.5 py-1 text-xs font-semibold leading-none tracking-wide">
                    NEW
                  </span>
                </h3>
                <p className="mt-2 grow opacity-60 xl:mx-4">
                  Analyze data with machine learning
                </p>
                <a
                  target="_blank"
                  className={`group/link-new cursor-pointer items-center transition gap-1 px-4 sm:px-5 py-1.5 sm:py-2 rounded-full hover:bg-emerald-400 hover:text-emerald-950 ${
                    tileNumber !== 4 ? "bg-white/5 text-zinc-50" : ""
                  } mt-4 hidden md:inline-flex ${
                    tileNumber == 4 ? bgColors[4] : "bg-zinc-50"
                  } text-zinc-950`}
                  href="#"
                >
                  <span>Learn More</span>
                  <Line />
                </a>
              </Tile>
            </div>
          </div>
        </section>

        <section
          id="serverless"
          className="relative z-10 py-16 md:mt-20 md:py-28"
        >
          <div className="absolute left-1/2 -z-10 -translate-x-1/2 w-4/5 md:h-[400px] rounded-[100%] bg-emerald-500 opacity-5 blur-[90px] pointer-events-none top-32 h-1/2"></div>
          <div className="mx-auto max-w-screen-xl px-6 md:px-10">
            <header className="mx-auto max-w-screen-md text-center">
              <h3 className="font-display text-4xl font-semibold md:text-6xl ">
                Connect a Wearable
              </h3>
              <p className="mx-4 mt-2 text-lg opacity-40 md:mx-auto md:text-2xl">
                Collect user health data from wearables
              </p>
            </header>
            <div className="mt-10 grid gap-4 text-left md:mt-20 md:grid-cols-6 md:gap-6">
              <LargeTile
                title="Supported Providers"
                description="Connect to over 100 wearables and start collecting user health data in minutes."
              >
                <div className="flex items-center gap-4 flex-wrap">
                  {PROVIDERS.map((provider) => (
                    <div>
                      <img
                        src={provider.logo}
                        className="h-10 w-10 object-cover"
                        alt={provider.name}
                      />
                    </div>
                  ))}
                </div>
              </LargeTile>

              <LargeTile
                title="Widget Integration"
                description="Use a unified widget across multiple platforms."
              >
                <a
                  className="text-emerald-400 cursor-pointer  items-center hover:text-emerald-300 hover:underline -mb-10"
                  onClick={() =>
                    window.open(
                      "/widget",
                      "targetWindow",
                      `toolbar=no,
                                    location=no,
                                    status=no,
                                    menubar=no,
                                    scrollbars=no,
                                    resizable=no,
                                    width=550,
                                    height=800
                                    //open in center of the screen
                                    top=${window.innerHeight / 2 - 400},
                                    left=${window.innerWidth / 2 - 275}
                                    `
                    )
                  }
                >
                  Try the Widget
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="-5 -5 40 40"
                    width="1em"
                    height="1em"
                    className="inline-flex shrink-0 ml-auto text-3xl opacity-100"
                    role="icon"
                  >
                    <title>Latency</title>
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                  </svg>
                </a>

                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{ background: "#111112" }}
                >
                  {hook}
                </SyntaxHighlighter>
              </LargeTile>

              <LargeTile
                title="Collect Data"
                description="Simple, normalized user data with one integration."
              >
                <div className="flex items-center gap-px mb-[-40px]">
                  <label className="cursor-pointer select-none  px-4 py-1 text-sm first:rounded-l-full last:rounded-r-full bg-opacity-10 bg-white">
                    <input
                      className="pointer-events-none absolute opacity-0"
                      type="radio"
                      name="product"
                      value="Redis"
                    />
                    <span>Node</span>
                  </label>
                  <label className="cursor-pointer select-none  bg-opacity-5 px-4 py-1 text-sm first:rounded-l-full last:rounded-r-full bg-white">
                    <input
                      className="pointer-events-none absolute opacity-0"
                      type="radio"
                      name="product"
                      value="Kafka"
                    />
                    <span>cURL</span>
                  </label>
                </div>
                <SyntaxHighlighter
                  language="javascript"
                  style={vscDarkPlus}
                  customStyle={{ background: "#111112" }}
                >
                  {userData}
                </SyntaxHighlighter>
              </LargeTile>

              <LargeTile
                title="Live Data"
                description="Real-time user data with one integration."
              >
                <SyntaxHighlighter language="javascript" style={vscDarkPlus}>
                  {live}
                </SyntaxHighlighter>
                <SimpleLineChart />
                <div className="flex gap-1 md:gap-4">
                  <div className="flex grow flex-col justify-center rounded-xl bg-black/20 px-4 py-2 md:h-14">
                    <span className="text-sm opacity-40">Heart Rate</span>
                    <span className="text-xl text-rose-500 md:text-2xl">
                      70bpm
                    </span>
                  </div>
                  <div className="flex grow flex-col justify-center rounded-xl bg-black/20 px-4 py-2 md:h-14">
                    <span className="text-sm opacity-40">VO2Max</span>
                    <span className="text-xl text-amber-200 md:text-2xl">
                      45
                    </span>
                  </div>
                  <div className="flex grow flex-col justify-center rounded-xl bg-black/20 px-4 py-2 md:h-14">
                    <span className="text-sm opacity-40">Blood O2</span>
                    <span className="text-xl md:text-2xl text-emerald-300">
                      98%
                    </span>
                  </div>
                </div>
              </LargeTile>
            </div>
          </div>
        </section>

        <section
          id="fast"
          className="relative z-0 my-10 hidden h-[400px] overflow-hidden md:block md:h-[500px] w-full"
        >
          <div className="absolute left-1/2 -z-10 -translate-x-1/2 w-4/5 md:h-[400px] rounded-[100%] bg-emerald-500 opacity-5 blur-[90px] pointer-events-none top-44 h-1/2"></div>
          <h5 className="text-center pointer-events-none absolute inset-x-0 -top-8 -z-20 font-display text-[12vw] font-bold leading-tight bg-gradient-to-t bg-clip-text text-transparent from-blue-300/20 to-blue-200/[0.05] ">
            Global reach
          </h5>
          <img
            src="https://upstash.com/globe.png"
            className="absolute inset-x-0 left-1/2 top-[14%] -z-10 w-full max-w-screen-xl -translate-x-1/2 xl:top-[26%]"
          />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[200px] bg-gradient-to-b from-transparent to-zinc-950"></div>
          <div className="group/source-box absolute inset-x-0 bottom-0 z-20 ">
            <div className="mx-auto px-6 md:px-10 max-w-screen-lg">
              <div className="mx-auto grid grid-cols-2 gap-6 p-6 rounded-2xl bg-white/5 backdrop-blur md:w-fit md:grid-cols-3 md:gap-16 md:rounded-4xl md:px-12 md:py-6 mb-10">
                <div className="">
                  <div className="font-display text-3xl font-semibold text-blue-400 md:text-4xl">
                    50+
                  </div>
                  <h5 className="mt-1 text-xs uppercase tracking-widest text-blue-200 opacity-40">
                    Countries Served
                  </h5>
                </div>
                <div className="">
                  <div className="font-display text-3xl font-semibold text-blue-400 md:text-4xl">
                    950+
                  </div>
                  <h5 className="mt-1 text-xs uppercase tracking-widest text-blue-200 opacity-40">
                    EHR Networks
                  </h5>
                </div>
                <div className="col-span-2 md:col-span-1">
                  <div className="font-display text-3xl font-semibold text-blue-400 md:text-4xl">
                    100+
                  </div>
                  <h5 className="mt-1 text-xs uppercase tracking-widest text-blue-200 opacity-40">
                    Added every month
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

const hook = "const { connect, disconnect } = useHumanData();";
const userData = `import { heartRate, normalized } from "@humanData";

const dataDump = await normalized({
  startDate: "2024-01-01",
  endDate: "2024-01-31",
  activities: ["heartRate", "bloodOxygen", "vo2Max"],
  providers: ["appleHealth", "googleFit", "fitbit"],
});

const heartRateData = await heartRate({
  startDate: "2024-01-01",
  endDate: "2024-01-31",
  filter: "day",
});`;
const live = `const { liveHeartRate, liveVO2Max } = useHumanData({ws: ""});`;

type DivProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

const Tile = (props: DivProps) => (
  <div
    className="group/hero-product relative flex flex-col items-center p-6 md:p-8 cursor-default bg-white/5 backdrop-blur transition rounded-lg xl:first:!rounded-l-4xl xl:last:!rounded-r-4xl hover:scale-[1.02] hover:bg-white/10"
    {...props}
  ></div>
);

const Line = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-width="1.5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    width="1em"
    height="1em"
    className="inline-flex shrink-0 text-xl ml-auto opacity-60"
    role="icon"
  >
    <line x1="7" y1="17" x2="17" y2="7"></line>
    <polyline points="7 7 17 7 17 17"></polyline>
  </svg>
);

const LargeTile = ({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children?: React.ReactNode;
}) => (
  <div className="group/box-body relative z-0 grid gap-6 p-6 md:gap-8 md:p-8 bg-white/5 backdrop-blur rounded-3xl md:rounded-4xl md:col-span-3">
    <header>
      <h4 className="flex items-center gap-2 font-display text-xl font-semibold md:text-2xl">
        {title}
        <span className="inline-flex translate-y-1/4 text-emerald-400 opacity-0 transition group-hover/box-body:translate-y-0 group-hover/box-body:opacity-100">
          <a
            target="_blank"
            className="group/link-new inline-flex cursor-pointer items-center transition gap-0.5 hover:text-emerald-400 hover:underline"
            href="#"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              width="1em"
              height="1em"
              className="inline-flex shrink-0 ml-auto text-3xl opacity-100"
              role="icon"
            >
              <title>Latency</title>
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </a>
        </span>
      </h4>
      {description && (
        <p className="mt-2 opacity-40 md:mt-3 text-lg">{description}</p>
      )}
    </header>
    {children}
  </div>
);

const bgColors = [
  "bg-blue-500",
  "bg-emerald-500",
  "bg-fuchsia-500",
  "bg-orange-500",
  "bg-purple-500",
];

const textGradients = [
  "from-blue-500 to-emerald-300",
  "from-emerald-500 to-fuchsia-300",
  "from-fuchsia-500 to-orange-300",
  "from-orange-500 to-purple-300",
  "from-purple-500 to-blue-300",
];

const PROVIDERS = [
  {
    name: "MyFitnessPal",
    slug: "my_fitness_pal",
    description: "Weight loss and fitness application",
    logo: "https://storage.googleapis.com/vital-assets/my_fitness_pal.png",
    auth_type: "password",
    supported_resources: ["meal"],
  },
  {
    name: "Apple HealthKit",
    slug: "apple_health_kit",
    description:
      "HealthKit provides a central repository for health and fitness data on iPhone and Apple Watch.",
    logo: "https://storage.googleapis.com/vital-assets/apple_health.png",
    auth_type: "sdk",
    supported_resources: [
      "activity",
      "blood_oxygen",
      "blood_pressure",
      "body",
      "caffeine",
      "calories_active",
      "calories_basal",
      "distance",
      "fat",
      "floors_climbed",
      "glucose",
      "heartrate",
      "hrv",
      "hypnogram",
      "mindfulness_minutes",
      "profile",
      "respiratory_rate",
      "sleep",
      "sleep_stream",
      "steps",
      "vo2_max",
      "water",
      "weight",
      "workouts",
    ],
  },
  {
    name: "Fitbit",
    slug: "fitbit",
    description: "Activity Trackers",
    logo: "https://storage.googleapis.com/vital-assets/fitbit.png",
    auth_type: "oauth",
    supported_resources: [
      "activity",
      "blood_oxygen",
      "body",
      "calories_active",
      "distance",
      "fat",
      "heartrate",
      "hrv",
      "hypnogram",
      "profile",
      "respiratory_rate",
      "sleep",
      "sleep_stream",
      "steps",
      "vo2_max",
      "water",
      "weight",
      "workout_stream",
      "workouts",
    ],
  },
  {
    name: "Garmin",
    slug: "garmin",
    description: "Fitness watches",
    logo: "https://storage.googleapis.com/vital-assets/garmin.png",
    auth_type: "oauth",
    supported_resources: [
      "activity",
      "blood_oxygen",
      "blood_pressure",
      "body",
      "calories_active",
      "distance",
      "fat",
      "heartrate",
      "hrv",
      "hypnogram",
      "respiratory_rate",
      "sleep",
      "sleep_stream",
      "steps",
      "stress_level",
      "vo2_max",
      "weight",
      "workout_stream",
      "workouts",
    ],
  },
  {
    name: "Google Fit",
    slug: "google_fit",
    description: "Coaching you to a healthier and more active life",
    logo: "https://storage.googleapis.com/vital-assets/googlefit.png",
    auth_type: "oauth",
    supported_resources: [
      "activity",
      "blood_pressure",
      "body",
      "heartrate",
      "sleep",
      "water",
      "workouts",
    ],
  },
  {
    name: "Oura",
    slug: "oura",
    description: "Smart sleep tracking ring",
    logo: "https://storage.googleapis.com/vital-assets/oura.png",
    auth_type: "oauth",
    supported_resources: [
      "activity",
      "body",
      "calories_active",
      "distance",
      "heartrate",
      "hrv",
      "hypnogram",
      "profile",
      "respiratory_rate",
      "sleep",
      "sleep_stream",
      "steps",
      "weight",
      "workouts",
    ],
  },
  {
    name: "Peloton",
    slug: "peloton",
    description: "Popular cycling equipment",
    logo: "https://storage.googleapis.com/vital-assets/peloton.png",
    auth_type: "password",
    supported_resources: ["workouts"],
  },

  {
    name: "Health Connect",
    slug: "health_connect",
    description: "Google Health Connect",
    logo: "https://storage.googleapis.com/vital-assets/HealthConnect.png",
    auth_type: "sdk",
    supported_resources: [
      "activity",
      "blood_oxygen",
      "blood_pressure",
      "body",
      "calories_active",
      "calories_basal",
      "distance",
      "fat",
      "floors_climbed",
      "glucose",
      "heartrate",
      "hrv",
      "hypnogram",
      "profile",
      "respiratory_rate",
      "sleep",
      "sleep_stream",
      "steps",
      "vo2_max",
      "weight",
      "workouts",
    ],
  },
  {
    name: "Whoop V2",
    slug: "whoop_v2",
    description: "Smart Activity Watches",
    logo: "https://storage.googleapis.com/vital-assets/whoop.png",
    auth_type: "team_oauth",
    supported_resources: ["activity", "sleep", "workouts"],
  },
];

const pData = [67, 69, 72, 70, 84, 94, 103];
const xLabels = [
  "3:00 PM",
  "3:15 PM",
  "3:20 PM",
  "3:25 PM",
  "3:30 PM",
  "3:35 PM",
  "3:40 PM",
];
const SimpleLineChart = () => {
  return (
    <LineChart
      width={500}
      height={150}
      series={[{ data: pData, label: "Heart Rate", color: "#f87171" }]}
      xAxis={[
        {
          scaleType: "point",
          data: xLabels,
        },
      ]}
      colors={["#f87171"]}
      sx={{
        //change left yAxis label styles
        "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.4",
          fill: "#fff",
        },
        // change all labels fontFamily shown on both xAxis and yAxis
        "& .MuiChartsAxis-tickContainer .MuiChartsAxis-tickLabel": {
          fontFamily: "Roboto",
        },
        // change bottom label styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
          strokeWidth: "0.5",
          fill: "#fff",
        },
        // bottomAxis Line Styles
        "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
          fill: "#fff",
          strokeWidth: 0.4,
        },
        // leftAxis Line Styles
        "& .MuiChartsAxis-left .MuiChartsAxis-line": {
          fill: "#fff",
          strokeWidth: 0.4,
        },
        "& .MuiChartsLegend-series text": {
          color: "#fff !important",
          fill: "#fff !important",
        },
      }}
    />
  );
};
