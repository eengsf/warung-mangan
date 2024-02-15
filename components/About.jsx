import Image from "next/image";
import { Cookie } from "next/font/google";
const cookie = Cookie({ subsets: ["latin"], weight: "400" });

const About = () => {
  return (
    <>
      <div
        id="about"
        className="flex min-h-[60vh] h-96 relative mb-10 md:px-0 px-5">
        <div className="flex flex-col m-auto sm:text-center text-start lg:max-w-3xl md:max-w-2xl max-w-xl gap-10">
          <div className="border-my-normal-green border-b-2">
            <h1
              className={`${cookie.className} md:text-5xl text-3xl font-bold text-my-normal-green`}>
              About Us
            </h1>
            <h1 className="md:text-3xl text-2xl font-bold">
              DESCOVER OUR STORY
            </h1>
          </div>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur elit adipisicing. Incidunt
              perferendis quae modi necessitatibus aliquid, id officiis totam
              blanditiis aperiam. Aperiam excepturi at tenetur reiciendis ab,
              dolor maiores culpa optio officiis repellendus amet praesentium
              esse est quis asperiores nobis illum minus ducimus eum hic.
              Molestias, explicabo commodi quos voluptatem beatae possimus!
            </p>
          </div>
          <div>
            <h1 className={`${cookie.className} md:text-3xl text-2xl`}>
              Mas Eeng SF
            </h1>
            <h1>Founder And Head Chef</h1>
          </div>
        </div>
        <div className="absolute bottom-7 justify-between w-full lg:flex hidden px-5">
          <Image
            src="/img/mie.png"
            alt="bg"
            width={200}
            height={200}
            priority={false}
          />
          <Image
            src="/img/bg.png"
            alt="bg"
            width={200}
            height={200}
            priority={false}
          />
        </div>
      </div>
    </>
  );
};

export default About;
