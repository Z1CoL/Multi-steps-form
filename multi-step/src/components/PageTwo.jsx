import { PageOne } from "@/components/PageOne";
import { Button } from "@/components/Button";
import { PageThree } from "@/components/PageThree";

export function PageTwo({ handleBack, handleNext }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[azure]">
      <div className="w-[480px] h-[655px] bg-white shadow-2xl rounded-[8px]">
        <div className="w-[416px] h-[385px] m-[34px] flex flex-col justify-between">
          <div className="w-[416px] h-[129px] flex flex-col justify-between">
            <img src="pinecone.png" alt="" className="w-[60px] h-[60px]" />
            <p className="font-black text-[26px] text-shadow-lg w-[416px] tracking-[-3px] h-[31px]">
              Join Us! 😎
            </p>
            <p className="size-[18px] mt-[7px] text-[#8E8E8E] w-[416px]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="w-[416px] h-[328px]">
            <form className="pt-[10px]">
              <label className="flex flex-col">
                First name
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
                />
              </label>
            </form>

            <form className="pt-[10px]">
              <label className="flex flex-col">
                Last name
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
                />
              </label>
            </form>

            <form className="pt-[10px]">
              <label className="flex flex-col">
                Username
                <input
                  type="text"
                  placeholder="Placeholder"
                  className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
                />
              </label>
            </form>
          </div>
          <div className="flex mt-[160px] justify-between" >
            <Button isContinue={true} buttonDamjuulah={handleNext} />
            <Button isContinue={false} buttonDamjuulah={handleBack} />
          </div>
        </div>
      </div>
    </div>
  );
}
