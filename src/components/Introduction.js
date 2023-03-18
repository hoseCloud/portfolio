import { ContactCard, ContactCopyCard } from "./ContactCard";
import imgPath from "../assets/wallpaper.jpg";

function Introduction() {
  return (
    <div id="Introduction">
      <div className="relative pb-4">
        <img
          src={imgPath}
          alt=""
          className="w-full h-96 object-cover blur-sm"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <p className="text-white text-7xl font-bold text-center pb-6">
            허세정
          </p>
          <p className="text-white text-4xl font-medium text-center">
            매일 꾸준히 공부하는 사람
          </p>
        </div>
      </div>
      <div className="flex flex-wrap m-2 space-x-1 gap-4 px-4">
        <ContactCard
          where="Github"
          image="https://avatars.githubusercontent.com/u/102496441?v=4"
          name="hoseCloud"
          url="https://github.com/hoseCloud"
        />
        <ContactCard
          where="Naver Blog"
          image="https://phinf.pstatic.net/contact/20220929_26/1664460814096cFqQk_PNG/%C7%E3%BC%BC%B1%B8%B8%A7_%C7%C1%B7%CE%C7%CA-removebg-preview.png?type=f130_130"
          name="4osecloud"
          url="https://blog.naver.com/clftjdtmxk"
        />
        <ContactCopyCard
          where="Google"
          image="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
          name="4osecloud"
          text="4osecloud@gmail.com"
        />
      </div>
    </div>
  );
}

export default Introduction;
