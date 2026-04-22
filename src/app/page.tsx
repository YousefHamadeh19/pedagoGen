import CallToAction from "@/components/CallToAction";
import InfoGrid from "@/components/InfoGrid";

export default function Home() {
  return (
    <main className="text-black bg-white">
      <section className="text-center py-6">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-5xl">PedagoGen</h1>
        <div className="m-2">
          <p className="mt-4 text-lg font-medium text-pretty text-gray-700 sm:text-xl/8">AI-powered pedagogical intelligence</p>
          <div className="flex justify-center text-center mt-5 flex items-center justify-center gap-x-6">
            <p className="w-150">
              Shift educational technology from content generation to pedagogical decision-
              making. Design high-quality, differentiated learning experiences aligned with
              curriculum and accreditation standards
            </p>
          </div>
        </div>
      </section>
      <section className="text-center py-4">
        <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-3xl">Areas of Work</h1>
        <InfoGrid />
      </section>
      <section className="text-center py-3">
        <CallToAction />
      </section>
    </main>
  );
}
