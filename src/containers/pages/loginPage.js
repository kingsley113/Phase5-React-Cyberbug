import RedirectIfLoggedIn from "../../components/auth/redirectIfLoggedIn";
import LoginForm from "../../components/forms/loginForm";

// import logoImage from "../../media/images/cyberbugLogoQuick.png";

const LoginPage = () => {
  return (
    <RedirectIfLoggedIn>
      <div className="full-page centered-flex transparent-background">
        <div className="centered-flex-vert">
          <img
            // src="%PUBLIC_URL%/cyberbugLogoQuick.png"
            src={`${process.env.PUBLIC_URL}/assets/cyberbugLogoQuick.png`}
            alt="Cyberbug Logo"
            className="med-logo"
          />
          <div>
            <LoginForm />
          </div>
        </div>
      </div>
    </RedirectIfLoggedIn>
  );
};

export default LoginPage;
