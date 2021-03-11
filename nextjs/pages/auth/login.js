import AuthLayout from "../../components/layouts/AuthLayout";
import useTranslation from "next-translate/useTranslation";

export default function login() {
  const { t, lang } = useTranslation("auth/login");
  return (
    <>
      <div className="flex flex-col p-10 justify-center	h-full">
        <div className="mb-4 font-bold uppercase">{t("Login")}</div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm mb-2"
            htmlFor="email"
          >
            {t("Email")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="email"
            type="email"
            placeholder={t("Email")}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-grey-darker text-sm mb-2"
            htmlFor="password"
          >
            {t("Password")}
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="password"
            type="password"
            placeholder="****"
          />
          <p className="text-red-500 text-xs italic">
            {t("Please choose a password")}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-green-700	 hover:bg-green-600	 text-white font-bold py-2 px-4 rounded"
            type="button"
          >
            Sign In
          </button>
          <a
            className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
            href="#"
          >
            {t("Forgot Password?")}
          </a>
        </div>
      </div>
    </>
  );
}
login.Layout = AuthLayout;
