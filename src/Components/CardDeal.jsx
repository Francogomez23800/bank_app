import { card } from "../assets";
import styles, { layout } from "../styles";
import Button from "./Button";

const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" />
        in few easy steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo
        nihil numquam laborum repellendus ea eius hic doloribus ipsum porro
        eveniet pariatur, obcaecati molestiae ab laudantium dolorem harum, est
        cupiditate.
      <Button styles='mt-10'/>
      </p>
    </div>
    <div className={layout.sectionImg}>
        <img src={card} alt='Card' className='w-[100%] h-[100%]'/>
    </div>
  </section>
);

export default CardDeal;
