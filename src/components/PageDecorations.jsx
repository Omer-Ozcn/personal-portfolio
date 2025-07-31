export default function PageDecorations() {
  return (
    <>
      <div className="absolute z-0 w-[111px] h-[111px] bg-[#D9D9D9] rounded-full -top-[45px] left-[350px]"></div>

      <div 
        className="absolute z-10 top-[536px] right-0 w-[108.5px] h-[59px] overflow-hidden"
      >
        <div 
          className="w-[217px] h-[59px] bg-[#EA2678] rounded-[29.5px]"
          style={{ position: "relative", right: 0 }}
        />
      </div>


      <div className="absolute z-0 w-[181px] h-[49px] rounded-full border-[29.5px] border-[#525252] top-[1475px] -left-[70px]"></div>
      <div className="absolute z-[1] w-[121px] h-[121px] rounded-full border-[21px] border-[#D9D9D9] top-[750px] left-[1175px]"></div>
    </>
  );
}
