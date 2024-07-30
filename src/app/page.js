import styles from '@/app/page.module.css';

export default function Home() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.carouselContainer}>
        <div className={styles.cardContainer}>
          <div>pokemon</div>
          <div className={styles.imageContainer}>
            <img
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"
              alt="pokemon gif"
              height={100}
              width={100} />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.attributesContainer}>
              <div>tipo</div>
              <div>eletrico</div>
            </div>
            <div className={styles.attributesContainer}>
              <div>atq</div>
              <div>10</div>
            </div>
            <div className={styles.attributesContainer}>
              <div>def</div>
              <div>10</div>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div>pokemon</div>
          <div className={styles.imageContainer}>
            <img
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"
              alt="pokemon gif"
              height={100}
              width={100} />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.attributesContainer}>
              <div>tipo</div>
              <div>eletrico</div>
            </div>
            <div className={styles.attributesContainer}>
              <div>atq</div>
              <div>10</div>
            </div>
            <div className={styles.attributesContainer}>
              <div>def</div>
              <div>10</div>
            </div>
          </div>
        </div>
        <div className={styles.cardContainer}>
          <div>pokemon</div>
          <div className={styles.imageContainer}>
            <img
              src="https://img.pokemondb.net/sprites/black-white/anim/normal/pikachu.gif"
              alt="pokemon gif"
              height={100}
              width={100} />
          </div>
          <div className={styles.descriptionContainer}>
            <div className={styles.attributesContainer}>
              <div>tipo</div>
              <div>eletrico</div>
            </div>
            <div className={styles.attributesContainer}>
              <div>atq</div>
              <div>10</div>
            </div>
            <div className={styles.attributesContainer}>
              <div>def</div>
              <div>10</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
