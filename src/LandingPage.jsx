function LandingPage() {
  return (
    <div className="w-full flex fixed justify-center">
      <div className="h-24 bg-white flex flex-row w-[1440px]">
        <div
          id="DobermanBoxClubLogo"
          className="mr-[150px] ml-[152px] mt-8 font-Poppins font-semibold whitespace-nowrap leading-[30px]"
        >
          Doberman Box Club
        </div>
        <div
          id="Menu"
          className="flex leading-6 mt-[35px] mr-[478px] font-Poppins text-bodyFontSize tracking-wider"
        >
          <div className="mr-14">Classes</div>
          <div className="mr-14">About us</div>
          <div className="mr-14">Contact us</div>
          <div className="mr-14">FAQ's</div>
        </div>
      </div>
    </div>
  );
}
export default LandingPage;
