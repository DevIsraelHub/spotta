import HomeNav from "@/components/HomeNav";
import HomeSearchbar from "@/components/HomeSearchbar";
import ReviewCardCarousel from "@/components/ReviewCardCarousel";

const HomePage = () => {
  return (
    <>
      <HomeNav />
      <section className="w-full h-[calc(100vh - 70px)] px-4 md:px-6 lg:px-12 flex flex-col lg:flex-row items-start justify-between">
        <div className="text-left w-full lg:w-[45%] py-[10%]">
          <h1 className="text-[50px] md:text-[48px] lg:text-[64px] font-bold text-brandText mb-[30px] lg:mb-[40px]">
            Find a place you will love to live!
          </h1>
          <p className="mx-auto lg:mx-0 lg:w-full text-[16px] md:text-[18px] lg:text-[20px] text-brandTextDull">
            See through the lenses of people who have
            lived or visited the neighbourhood you might
            have in mind.
          </p>
          <HomeSearchbar />
        </div>
        <div className="relative h-full flex justify-end max-h-screen w-full space-x-0 lg:w-[50%]">
          <span className="absolute z-50 top-0 left-0 w-full h-20 bg-gradient-to-b from-brandBg to-transparent"></span>
          <ReviewCardCarousel />
          <div className="hidden xl:block">
            <ReviewCardCarousel animation="animate-loop-reverse-scroll" />
          </div>
          <span className="absolute z-50 bottom-[10%] left-0 w-full h-20 bg-gradient-to-b from-transparent to-brandBg"></span>
        </div>
      </section>
    </>
  );
}

export default HomePage;