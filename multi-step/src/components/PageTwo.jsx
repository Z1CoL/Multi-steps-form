import { useState } from "react";
import { Button } from "@/components/Button";

export function PageTwo({ handleBack, handleNext }) {
  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));

    setErrors((prev) => {
      const newErrors = { ...prev };
      delete newErrors[name];
      return newErrors;
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    let newErrors = {};
    let valid = true;

    if (!formValues.email.includes("@")) {
      newErrors.email = "Valid email is required";
      valid = false;
    }

    if (formValues.phone.length < 8) {
      newErrors.phone = "Phone number must be at least 8 digits";
      valid = false;
    }

    if (formValues.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
      valid = false;
    }

    if (formValues.confirmPassword !== formValues.password) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    setErrors(newErrors);

    if (valid) {
      handleNext();
    }
  };

  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-[azure]">
      <div className="w-full min-h-screen flex items-center justify-center bg-[azure]">
        <div className="w-[480px] min-h-[655px] bg-white shadow-2xl rounded-[8px] p-[34px] flex flex-col">
          <div className="flex flex-col gap-2">
            <img src="pinecone.png" alt="" className="w-[60px] h-[60px]" />
            <p className="font-black text-[26px] text-shadow-lg tracking-[-3px]">
              Join Us! 😎
            </p>
            <p className="text-[18px] mt-[7px] text-[#8E8E8E]">
              Please provide all current information accurately.
            </p>
          </div>

          <form className="flex flex-col gap-4 mt-6" onSubmit={onSubmit}>
            <label className="flex flex-col">
              Email *
              <input
                type="text"
                name="email"
                value={formValues.email}
                onChange={onChangeInput}
                placeholder="Enter your email"
                className={`px-3 py-2 border mt-2 rounded-lg focus:outline-none text-lg ${
                  errors.email
                    ? "border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </label>

            <label className="flex flex-col">
              Phone number *
              <input
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={onChangeInput}
                placeholder="Enter your phone number"
                className={`px-3 py-2 border mt-2 rounded-lg focus:outline-none text-lg ${
                  errors.phone
                    ? "border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {errors.phone && <p className="text-red-600">{errors.phone}</p>}
            </label>

            <label className="flex flex-col">
              Password *
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={onChangeInput}
                placeholder="Enter your password"
                className={`px-3 py-2 border mt-2 rounded-lg focus:outline-none text-lg ${
                  errors.password
                    ? "border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {errors.password && (
                <p className="text-red-600">{errors.password}</p>
              )}
            </label>

            <label className="flex flex-col">
              Confirm password *
              <input
                type="password"
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={onChangeInput}
                placeholder="Re-enter your password"
                className={`px-3 py-2 border mt-2 rounded-lg focus:outline-none text-lg ${
                  errors.confirmPassword
                    ? "border-red-500"
                    : "border-gray-200 focus:border-blue-400"
                }`}
              />
              {errors.confirmPassword && (
                <p className="text-red-600">{errors.confirmPassword}</p>
              )}
            </label>

            <div className="flex justify-between mt-6">
              <Button
                isContinue={true}
                buttonDamjuulah={handleBack}
                text={"← Back"}
              />
              <Button isContinue={false} text={"Next 2/3 ➔"} />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
