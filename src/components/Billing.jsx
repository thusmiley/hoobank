import { apple, bill, google } from "../assets";
import styles, { layout } from "../style";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-[100%] relative z-[5] lg:mr-10" />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
    <div className={layout.sectionInfo}>
      <h2 className={`${styles.heading2}`}>Easily control your billing & invoicing.</h2>
      <p className={`${styles.paragraph} mt-5`}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, quo alias modi quos nesciunt praesentium sed quae laborum aliquam voluptates magni voluptatibus perspiciatis
        eaque totam consequatur iure incidunt necessitatibus ratione eos sequi officia.
      </p>

      <div className="flex justify-start flex-row flex-wrap mt-6 sm:mt-10">
        <img src={apple} alt="apple store" className="w-[128px] height-[42px] mr-5 cursor-pointer object-contain" />
        <img src={google} alt="google store" className="w-[128px] height-[42px] mr-5 cursor-pointer object-contain" />
      </div>
    </div>
  </section>
);

export default Billing;
