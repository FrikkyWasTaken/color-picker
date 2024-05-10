import heroImage from "./assets/Screenshot 2024-01-12 at 10.52 1.png";

function LandingPage() {
  return (
    <div>
      <div className="w-full flex fixed justify-center">
        <div className="h-[94px] bg-white flex flex-row w-[1440px]">
          <div
            id="DobermanBoxClubLogo"
            className="mr-[152px] ml-[152px] mt-8 font-Poppins font-semibold whitespace-nowrap leading-[30px]"
          >
            Doberman Box Club
          </div>
          <div
            id="Menu"
            className="flex leading-6 mt-[35px] mr-[478px] font-Poppins text-bodyFontSize tracking-wider whitespace-nowrap"
          >
            <div className="mr-14">Classes</div>
            <div className="mr-14">About us</div>
            <div className="mr-14">Contact us</div>
            <div className="mr-14">FAQ's</div>
          </div>
        </div>
      </div>
      <div
        id="body"
        className="w-full flex items-center font-Poppins tracking-wider flex-col"
      >
        <div className="xl:w-[1440px] mt-[94px] flex flex-row">
          <div id="hero-text" className="flex flex-col ml-[152px]">
            <div className="mt-[104px] font-Syncopate font-bold text-5xl max-w-[545px]">
              Become The Architect Of Your Very Own Future
            </div>
            <div className="mt-2 font-light max-w-[464px] mr-[112px]">
              Shape your body and your mind to achieve your full potential
              through boxing. Get a free class with the button below.
            </div>
            <button className="mt-12 py-[14px] bg-ctaBlue flex justify-center rounded-[36px] text-white w-[273px]">
              View classes
            </button>
          </div>
          <div id="hero-image">
            <img src={heroImage} className="rounded-2xl" />
          </div>
        </div>
        <div className="xl:w-[1440px] mt-[80px] flex flex-col items-center">
          <div className="font-Syncopate font-bold text-headingTwoSize">
            Become a member or pay per class
          </div>
          <div className="max-w-[976px] text-center mt-3">
            Become a member of Doberman Box Club to attend whichever classes you
            like, whenever you like, gain open access to our gym at any time and
            the freedom to get advice from our coaches not only in classes but
            whenever you are in the gym. Or find a class that interests you and
            pay at the door! <a href="#memberships">View membership</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
