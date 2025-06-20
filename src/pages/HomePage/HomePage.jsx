import s from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={s.hero}>
      <div className={s.overlay}>
        {/* <h1 className={s.title}>Welcome to the Kingdom</h1>
        <p className={s.subtitle}>
          Where legends are born and tales of valor come to life.
        </p> */}
        <h1 className={`${s.title} ${s.fadeInUp}`}>Welcome to the Kingdom</h1>
        <p
          className={`${s.subtitle} ${s.fadeInUp}`}
          style={{ animationDelay: "0.5s" }}
        >
          Where legends are born and tales of valor come to life.
        </p>

        <div className={s.crest}>
          <svg
            className={s.crestIcon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 64 64"
          >
            <circle
              cx="32"
              cy="32"
              r="30"
              stroke="#c0a36e"
              strokeWidth="3"
              fill="none"
            />
            <path
              d="M32 5 L42 25 L62 25 L46 39 L52 59 L32 47 L12 59 L18 39 L2 25 L22 25 Z"
              fill="#5c4438"
              stroke="#d6af70"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className={s.sparks}>
          <div className={s.spark}></div>
          <div className={s.spark}></div>
          <div className={s.spark}></div>
        </div>

        <p
          className={`${s.description} ${s.fadeInUp}`}
          style={{ animationDelay: "1s" }}
        >
          Join the quest. Defend your honor. Write your own history in the realm
          of legends.
        </p>
      </div>
    </section>
  );
};

export default HomePage;
