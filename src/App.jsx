import styles from "./style";
import { Communication, Creator, Footer, Navbar, Kyc, Signup, Statistics, Stories, Testinomials } from "./Components";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={` ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-[#0B4E66] w-full ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Statistics />
      </div>
    </div>

    
    
    <div className={` bg-gradient-to-l from-[#7B61FFB5] to-[#061D2D5C] w-full ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Kyc />
      </div>
      </div>

      <div className={`bg-[#0B4E66] w-full ${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Communication />
        <Stories />
        <Creator />
        </div>
        </div>
        
        <div className={`bg-gradient-to-l from-[#FF5630B8] to-[#061D2D5C] w-full ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Signup />
      </div>
      </div>
         
      <div className={`bg-[#0A283E] w-full ${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
         
         <Footer />
      </div>
    </div>
  </div>
);

export default App;