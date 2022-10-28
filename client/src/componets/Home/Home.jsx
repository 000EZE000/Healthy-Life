import {
  mainHo,
  articuHo,
  sectionHo,
  titleHo,
  headerHo,
  pHome,
  contentBack,
  h3Ho,
} from '../style/home.module.css';
export default function Home() {
  return (
    <div className={contentBack}>
      <div className={titleHo}>
        <h4 className={h3Ho}>At Healthy Life you We offer</h4>
      </div>
      <main className={mainHo}>
        <section className={sectionHo}>
          <header className={headerHo}>The search section</header>
          <article className={articuHo}>
            <p className={pHome}>
              Here you can search for the recipes that you like the most and the
              best thing is that your searches will be added to the Recipes
              Section!!
            </p>
          </article>
        </section>
        <section className={sectionHo}>
          <header className={headerHo}>The Diet Section</header>
          <article className={articuHo}>
            <p>
              Here it shows you the amount of diets available and also if you
              create Diets they will appear here!
            </p>
          </article>
        </section>
        <section className={sectionHo}>
          <header className={headerHo}>The Recipes Section</header>
          <article className={articuHo}>
            <p>
              Here you can see all the recipes on our page and order them
              alphabetically and by the Healthiest.
            </p>
          </article>
        </section>
        <section className={sectionHo}>
          <header className={headerHo}>The Creation Section!!</header>
          <article className={articuHo}>
            <p>
              In this Section you can create your Recipes and Diets and link
              them with other types of diet.
            </p>
          </article>
        </section>
        <section className={sectionHo}>
          <header className={headerHo}>Back to Home</header>
          <article className={articuHo}>
            <p>
              Whenever you want to return in the header will be the Name of the
              App, click and return to Home!.
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}
