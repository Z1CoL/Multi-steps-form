"use client";
import { Button } from "@/components/Button";
import { useState } from "react";
import { motion } from "framer-motion";

export function PageOne({ handleNext }) {
  const [errors, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    firstname: "",
    lastname: "",
    username: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const onClickBtn = (event) => {
    event.preventDefault();

    const { firstname, lastname, username } = formValues;
    let valid = true;
    let newErrors = {};

    if (firstname.length < 3) {
      newErrors.firstname = "First name too short";
      valid = false;
    }

    if (!lastname) {
      newErrors.lastname = "Lastname is required";
      valid = false;
    }

    if (username.length < 2) {
      newErrors.username = "Username is required";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      handleNext();
    }
  };

  return (
    <motion.div
      className="w-full h-screen flex items-center justify-center bg-[azure]"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.9 }}
    >
      <div className="w-[480px] h-[655px] bg-white shadow-2xl rounded-[8px]">
        <div className="w-[416px] h-[380px] m-[34px] flex flex-col justify-between">
          <div className="w-[416px] h-[129px] flex flex-col justify-between">
            <img src="pinecone.png" alt="" className="w-[60px] h-[60px]" />
            <p className="font-black text-[26px] text-shadow-lg w-[416px] tracking-[-3px] h-[31px]">
              Join Us! 😎
            </p>
            <p className="size-[18px] mt-[7px] text-[#8E8E8E] w-[416px]">
              Please provide all current information accurately.
            </p>
          </div>

          <div className="w-[416px] h-[228px] relative ">
            <form
              className="pt-[10px] h-[440px] flex flex-col justify-between"
              onSubmit={onClickBtn}
            >
              <div>
                <label className="flex flex-col">
                  First name *
                  <input
                    type="text"
                    name="firstname"
                    value={formValues.firstname}
                    onChange={onChangeInput}
                    placeholder="Placeholder"
                    className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
                  />
                  {errors.firstname && (
                    <p className="text-red-600">{errors.firstname}</p>
                  )}
                </label>

                <label className="flex flex-col ">
                  Last name *
                  <input
                    name="lastname"
                    type="text"
                    value={formValues.lastname}
                    onChange={onChangeInput}
                    placeholder="Placeholder"
                    className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
                  />
                  {errors.lastname && (
                    <p className="text-red-600">{errors.lastname}</p>
                  )}
                </label>

                <label className="flex flex-col">
                  Username *
                  <input
                    name="username"
                    type="text"
                    value={formValues.username}
                    onChange={onChangeInput}
                    placeholder="Placeholder"
                    className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
                  />
                  {errors.username && (
                    <p className="text-red-600">{errors.username}</p>
                  )}
                </label>
              </div>

              <div className="w-full ">
                <Button
                  isContinue={false}
                  types="nonSplited"
                  text={"Next 1/3 ➔"}
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// import { Button } from "@/components/Button";
// import { useState } from "react";

// export function PageOne({ handleNext }) {
//   const [errors, setErrors] = useState({});
//   const [formValues, setFormValues] = useState({
//     firstname: "",
//     lastname: "",
//     username: "",
//   });

//   const onChangeInput = (e) => {
//     const { name, value } = e.target;
//     setFormValues((prev) => ({ ...prev, [name]: value }));

//     setErrors((prev) => {
//       const newErrors = { ...prev };
//       delete newErrors[name];
//       return newErrors;
//     });
//   };

//   const onClickBtn = (event) => {
//     event.preventDefault();

//     const { firstname, lastname, username } = formValues;
//     let valid = true;
//     let newErrors = {};

//     if (firstname.length < 3) {
//       newErrors.firstname = "First name too short";
//       valid = false;
//     }

//     if (!lastname) {
//       newErrors.lastname = "Lastname is required";
//       valid = false;
//     }

//     if (username.length < 2) {
//       newErrors.username = "Username is required";
//       valid = false;
//     }

//     setErrors(newErrors);

//     if (valid) {
//       handleNext();
//     }
//   };

//   return (
//     <div className="w-full h-screen flex items-center justify-center bg-[azure]">
//       <div className="w-[480px] h-[655px] bg-white shadow-2xl rounded-[8px]">
//         <div className="w-[416px] h-[380px] m-[34px] flex flex-col justify-between">
//           <div className="w-[416px] h-[129px] flex flex-col justify-between">
//             <img src="pinecone.png" alt="" className="w-[60px] h-[60px]" />
//             <p className="font-black text-[26px] text-shadow-lg w-[416px] tracking-[-3px] h-[31px]">
//               Join Us! 😎
//             </p>
//             <p className="size-[18px] mt-[7px] text-[#8E8E8E] w-[416px]">
//               Please provide all current information accurately.
//             </p>
//           </div>

//           <div className="w-[416px] h-[228px] relative ">
//             <form
//               className="pt-[10px] h-[440px] flex flex-col justify-between"
//               onSubmit={onClickBtn}
//             >
//               <div>
//                 <label className="flex flex-col">
//                   First name *
//                   <input
//                     type="text"
//                     name="firstname"
//                     value={formValues.firstname}
//                     onChange={onChangeInput}
//                     placeholder="Placeholder"
//                     className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
//                   />
//                   {errors.firstname && (
//                     <p className="text-red-600">{errors.firstname}</p>
//                   )}
//                 </label>

//                 <label className="flex flex-col ">
//                   Last name *
//                   <input
//                     name="lastname"
//                     type="text"
//                     value={formValues.lastname}
//                     onChange={onChangeInput}
//                     placeholder="Placeholder"
//                     className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
//                   />
//                   {errors.lastname && (
//                     <p className="text-red-600">{errors.lastname}</p>
//                   )}
//                 </label>

//                 <label className="flex flex-col">
//                   Username *
//                   <input
//                     name="username"
//                     type="text"
//                     value={formValues.username}
//                     onChange={onChangeInput}
//                     placeholder="Placeholder"
//                     className="px-3 py-2 border-1 mt-2 border-gray-200 rounded-lg focus:outline-none focus:border-blue-400 text-lg"
//                   />
//                   {errors.username && (
//                     <p className="text-red-600">{errors.username}</p>
//                   )}
//                 </label>
//               </div>

//               <div className="w-full ">
//                 <Button
//                   isContinue={false}
//                   types="nonSplited"
//                   text={"Next 1/3 ➔"}
//                 />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
