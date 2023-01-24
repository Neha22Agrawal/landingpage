import styles from "./style";
import { Communication, Creator, Footer, Navbar, Kyc, Signup, Statistics, Stories, SignUpDialog } from "./Components";

const App = () => (
  <div className="bg-[#0B2146] w-full overflow-hidden">
    <div className={styles.flexCenter}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
        <SignUpDialog />
          </div>
    </div>

    <div className={`bg-[#061D2D] w-full ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Statistics />
      </div>
    </div>

    
    
    <div className={`bg-gradientTwo w-full ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
      <Kyc />
      </div>
      </div>

      <div className={`bg-[#0B2146] w-full ${styles.flexCenter} ${styles.paddingX}`}>
      <div className={`${styles.boxWidth}`}>
        <Communication />
        <Stories />
        </div>
        </div>

        <div className={`bg-[#0B2146] w-full ${styles.flexCenter} ${styles.paddingX}`}>
          <Creator/>
        </div>
        
        <div className={`bg-gradientOne  w-full ${styles.paddingX} ${styles.flexCenter}`}>
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