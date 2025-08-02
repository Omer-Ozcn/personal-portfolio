import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

import { useLang } from "../context/LangContext"; 

export default function EmailTo({ onClose }) {
  const { t } = useLang(); 
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      await axios.post(
        "https://formsubmit.co/ajax/omerzcn@outlook.com",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      toast.success(t.contact.successToast);
      reset();
      onClose();
    } catch (err) {
      toast.error(t.contact.errorToast);
      console.error(err);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
      <div className="bg-[#faf6ed] dark:bg-[#003049] rounded-lg shadow-lg max-w-md w-full p-6 relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-200 font-bold text-xl"
          aria-label="Close modal"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold mb-4 text-[#1A1A1A] dark:text-[#FAF6ED]">
          {t.contact.contactTitle}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 dark:text-white">
          <input
            type="text"
            placeholder={t.contact.namePlaceholder}
            {...register("name", { required: t.contact.nameRequired })}
            className="p-3 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC]"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

          <input
            type="email"
            placeholder={t.contact.emailPlaceholder}
            {...register("email", {
              required: t.contact.emailRequired,
              pattern: {
                value: /^\S+@\S+$/i,
                message: t.contact.emailInvalid,
              },
            })}
            className="p-3 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC]"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}

          <textarea
            rows="4"
            placeholder={t.contact.messagePlaceholder}
            {...register("message", {
              required: t.contact.messageRequired,
              minLength: {
                value: 10,
                message: t.contact.messageMinLength,
              },
            })}
            className="p-3 rounded border border-[#669BBC] focus:outline-none focus:ring-2 focus:ring-[#669BBC]"
          />
          {errors.message && <p className="text-red-500 text-sm">{errors.message.message}</p>}

          <button
            type="submit"
            className="bg-[#669BBC] dark:bg-[#8ECAE6] text-white dark:text-[#1A1A1A] py-2 rounded hover:bg-[#5a8faf] transition"
          >
            {t.contact.submitButton}
          </button>
        </form>
      </div>
    </div>
  );
}
