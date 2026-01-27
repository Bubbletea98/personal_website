export const metadata = {
  title: "ShelterFocus 测试版 | App 测试（中文）",
  description: "通过 TestFlight 加入 ShelterFocus 测试版。",
};

export default function AppTestCnPage() {
  return (
    <main className="relative min-h-screen bg-[#f0f0f0] overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 schematic-dots" />

      <div className="relative z-10 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="w-full max-w-3xl">
          {/* 标题 */}
          <div className="mb-6">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-1 w-8 bg-black" />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-black/60">
                App 测试 // TestFlight
              </span>
            </div>
            <h1 className="font-mono text-3xl md:text-4xl font-bold">
              ShelterFocus{" "}
              <span className="bg-[#fbbf24] px-2 border-2 border-black">
                测试版
              </span>
            </h1>
          </div>

          {/* 主卡片 */}
          <div className="bg-white border-3 border-black shadow-[6px_6px_0_0_rgba(0,0,0,1)] p-6 md:p-8">
            <p className="text-base md:text-lg leading-relaxed text-black/80">
              欢迎来测试 ShelterFocus：这是我开发的一款帮助用户提升专注与效率的 App，
              尤其适合有 ADHD 或经常拖延的用户。
            </p>

            <div className="mt-6">
              <a
                href="https://testflight.apple.com/join/k5JT5kp4"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-5 py-3 font-mono text-sm font-bold uppercase bg-[#fbbf24] border-3 border-black shadow-[4px_4px_0_0_rgba(0,0,0,1)] hover:shadow-none transition-all text-center"
              >
                iOS：点我下载测试版 →
              </a>
            </div>

            <div className="mt-3">
              <span className="inline-block px-3 py-1 font-mono text-xs font-bold uppercase border-2 border-black bg-[#fafaf9] shadow-[3px_3px_0_0_rgba(0,0,0,1)]">
                安卓：开发中！
              </span>
            </div>

            <div className="mt-6 border-t-2 border-black/10 pt-4 space-y-2">
              <div className="font-mono text-xs text-black/60 uppercase tracking-wider">
                提示：请在 iPhone/iPad/Mac 上安装 TestFlight 后打开链接。
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}


