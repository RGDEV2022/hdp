"use client";
const Widget = () => {
  return (
    <div className="flex flex-col bg-slate-50 items-center justify-center w-full h-[100vh]">
      <div className="bg-white rounded-3xl shadow-lg m-14 p-6 w-[400px] h-[700px]  flex flex-col justify-center">
        <div className="flex flex-col justify-center items-center mb-2">
          <img
            src="https://cdn.join.com/62249ef5fd3020000844b0a2/stealth-startup-berlin-logo-l.png"
            className="h-16 rounded-full"
          />
          <h1 className="text-xl font-semibold text-gray-500">Connect</h1>
        </div>

        <input
          type="text"
          placeholder="Search for a device"
          className="w-full p-2 mt-4 border-0 focus:outline-none focus:bg-transparent text-black"
        />
        <div className="h-[1px] bg-gray-200" />
        <div className="flex flex-wrap gap-12 mt-4 overflow-hidden overflow-y-visible pb-8 pt-2 no-scrollbar h-[100%] justify-center">
          {PROVIDERS.map((provider) => (
            <img
              onClick={() => window.open(provider.link, "_self")}
              src={provider.logo}
              alt={provider.name}
              className="h-20 w-20 rounded-full shadow-lg hover:scale-110 hover:-translate-y-1 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Widget;

const PROVIDERS = [
  {
    name: "Dexcom",
    slug: "dexcom_v3",
    description: "Continuous Glucose Monitor",
    logo: "https://storage.googleapis.com/vital-assets/dexcom.png",
    auth_type: "team_oauth",
    supported_resources: ["glucose"],
  },
  {
    name: "Beurer",
    slug: "beurer_api",
    description: "Blood pressure and glucose.",
    logo: "https://storage.googleapis.com/vital-assets/beurer.png",
    auth_type: "password",
    supported_resources: ["blood_pressure", "glucose"],
  },
  {
    name: "Contour BLE",
    slug: "contour_ble",
    description: "Continuous Glucose Monitor, bluetooth version",
    logo: "https://storage.googleapis.com/vital-assets/contour.png",
    auth_type: "sdk",
    supported_resources: ["glucose"],
  },
  {
    name: "Accuchek",
    slug: "accuchek_ble",
    description: "Blood glucose devices",
    logo: "https://storage.googleapis.com/vital-assets/accuchek.png",
    auth_type: "sdk",
    supported_resources: ["glucose"],
  },
  {
    name: "Strava",
    slug: "strava",
    description: "Activity Social Network",
    logo: "https://storage.googleapis.com/vital-assets/strava.png",
    auth_type: "oauth",
    supported_resources: ["heartrate", "workouts"],
  },
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
    name: "Eight Sleep",
    slug: "eight_sleep",
    description: "Smart Mattress",
    logo: "https://storage.googleapis.com/vital-assets/eightsleep.png",
    auth_type: "password",
    supported_resources: [
      "heartrate",
      "hrv",
      "hypnogram",
      "profile",
      "respiratory_rate",
      "sleep",
      "sleep_stream",
    ],
  },
  {
    name: "Fitbit",
    slug: "fitbit",
    description: "Activity Trackers",
    logo: "https://storage.googleapis.com/vital-assets/fitbit.png",
    link: "https://www.fitbit.com/oauth2/authorize?response_type=code&client_id=23S2HN&scope=activity+cardio_fitness+electrocardiogram+heartrate+location+nutrition+oxygen_saturation+profile+respiratory_rate+settings+sleep+social+temperature+weight&code_challenge=g7jrM6GENJp33pyjv-OxNBfz8Ng8wVAxjfj-K8-JR2Q&code_challenge_method=S256&state=0p3h3y1x472b1m402c0c6c1a5u3b0d3g",
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
    name: "Freestyle Libre",
    slug: "freestyle_libre",
    description: "Continuous Glucose Monitor",
    logo: "https://storage.googleapis.com/vital-assets/freestyle.png",
    auth_type: "email",
    supported_resources: ["device", "glucose"],
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
    name: "Hammerhead",
    slug: "hammerhead",
    description: "Next generation cycling computers",
    logo: "https://storage.googleapis.com/vital-assets/hammerhead.png",
    auth_type: "password",
    supported_resources: ["heartrate", "profile", "workouts"],
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
    name: "Renpho",
    slug: "renpho",
    description: "Body Fat Scales",
    logo: "https://storage.googleapis.com/vital-assets/renpho.png",
    auth_type: "password",
    supported_resources: ["body", "fat", "weight"],
  },
  {
    name: "Wahoo",
    slug: "wahoo",
    description: "Indoor Bike trainers",
    logo: "https://storage.googleapis.com/vital-assets/wahoo.png",
    auth_type: "oauth",
    supported_resources: ["heartrate", "profile", "workouts"],
  },
  {
    name: "Withings",
    slug: "withings",
    description: "Smart Scales, Watches and Health Monitors",
    logo: "https://storage.googleapis.com/vital-assets/withings.png",
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
      "vo2_max",
      "weight",
      "workouts",
    ],
  },
  {
    name: "Zwift",
    slug: "zwift",
    description: "Virtual Cycling App",
    logo: "https://storage.googleapis.com/vital-assets/zwift.png",
    auth_type: "password",
    supported_resources: [
      "body",
      "profile",
      "weight",
      "workout_stream",
      "workouts",
    ],
  },
  {
    name: "Polar",
    slug: "polar",
    description: "Finnish sports tech pioneer",
    logo: "https://storage.googleapis.com/vital-assets/polar.png",
    auth_type: "oauth",
    supported_resources: [
      "activity",
      "body",
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
    name: "Cronometer",
    slug: "cronometer",
    description: "Nutrition tracking app",
    logo: "https://storage.googleapis.com/vital-assets/cronometer.png",
    auth_type: "oauth",
    supported_resources: ["meal"],
  },
  {
    name: "Kardia",
    slug: "kardia",
    description: "Portable ECG sensors",
    logo: "https://storage.googleapis.com/vital-assets/alivecor.png",
    auth_type: "password",
    supported_resources: ["electrocardiogram_voltage"],
  },
  {
    name: "Omron",
    slug: "omron",
    description: "Home blood pressure monitors",
    logo: "https://storage.googleapis.com/vital-assets/omron.png",
    auth_type: "oauth",
    supported_resources: [
      "activity",
      "blood_pressure",
      "distance",
      "fat",
      "heartrate",
      "steps",
      "weight",
    ],
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
  {
    name: "Manual",
    slug: "manual",
    description: "The client is the data provider",
    logo: "https://storage.googleapis.com/vital-assets/manual.png",
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
    name: "OneTouch",
    slug: "onetouch_ble",
    description: "OneTouch glucose monitors",
    logo: "https://storage.googleapis.com/vital-assets/onetouch.png",
    auth_type: "sdk",
    supported_resources: ["glucose"],
  },
];
