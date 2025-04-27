import GopperBanner from "@/components/page/banner/banner";
import CardSection from "@/components/page/card-section/card-section";
import Testimonial from "@/components/page/sections/testimonial";
import GeopperTools from "@/components/page/tools/tools";

export default function Home() {
  return (
    <div>
      <div class="bg-custom-pattern bg-cover bg-center  w-full">
        <div className="max-w-6xl mx-auto">
          <GopperBanner />
        </div>
      </div>
      <div className="max-w-6xl mx-auto py-10">
        <GeopperTools />
        <CardSection />
        <Testimonial />
      </div>
    </div>
  );
}
