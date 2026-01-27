export const metadata = {
  title: "ShelterFocus TestFlight | App Test",
  description:
    "Join the ShelterFocus beta on TestFlight and help test the app.",
};

export default function AppTestPage() {
  return (
    <main className="relative min-h-screen bg-[#f0f0f0] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 schematic-dots" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-3xl">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-1 w-8 bg-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60">
                App Test // TestFlight
              </span>
            </div>
            <h1 className="font-mono text-3xl md:text-4xl font-bold">
              ShelterFocus{" "}
              <span className="bg-[#fbbf24] px-2 border-2 border-black">
                Beta
              </span>
            </h1>
          </div>

          {/* Main Card */}
          <div className="bg-white border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-black/80">
              welcome to test ShelterFocus: The app I developed to help users
              improve their productivity, especially for user with ADHD or
              suffering from procrastination.
            </p>

            <div className="mt-6">
              <a
                href="https://testflight.apple.com/join/k5JT5kp4"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-3 font-mono text-sm font-bold uppercase bg-[#fbbf24] border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all text-center"
              >
                IOS: TestFlight Link →
              </a>
            </div>

            <div className="mt-6 border-t-2 border-black/10 pt-4">
              <div className="font-mono text-xs text-black/60 uppercase tracking-wider">
                Tip: open on iPhone/iPad/Mac after installing TestFlight.
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


