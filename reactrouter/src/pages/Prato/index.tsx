import styles from 'Prato.module.scss';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import cardapio from 'data/cardapio.json';

export default function Prato() {
  const {id} = useParams();
  const prato = cardapio.find(item => item.id === Number(id));
  
  if(!prato) {
    return '';
  }

  return (
    <>
      <button className={styles.voltar}></button>
      <section className={styles.container}>
        <h1 className={styles.titulo}>
          {prato.title}
        </h1>
        <div className={styles.imagem}>
          <img src={prato.photo} alt={prato.title}/>
        </div>
        <div className={styles.conteudo}>
          <p className={styles.conteudo_descricao}>
            {prato.description}
          </p>
          <div className={styles.tags}>
            <div className={classNames({
              [styles.tags__tipo]: true,
              [styles[`tags__tipo__${prato.category.label.toLowerCase()}`]]: true
            })}>
              {prato.category}
            </div>
            <div className={styles.tags__porcao}>
              {prato.size} g
            </div>
            <div className={styles.tags__qtdpessoas}>
              Serve {prato.serving} pessoa{prato.serving === 1 ? '' : 's'}
            </div>
            <div className={styles.tags__valor}>
              R$ {prato.price.toFixed(2)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}