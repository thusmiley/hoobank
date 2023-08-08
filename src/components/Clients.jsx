import { clients } from "../constants";
import styles from "../style";

const Clients = () => (
  <section className={`${styles.flexCenter} mb-16`}>
    <div className={`flex justify-between items-center flex-wrap w-full`}>
      {clients.map((client) => (
        <div key={client.id} className={`flex justify-between items-center sm:min-w-[192px] min-w-[120px]`}>
          <img src={client.logo} alt="client" className="sm:w-[192px] w-[100px] object-contain mb-6" />
        </div>
      ))}
    </div>
  </section>
);

export default Clients;
