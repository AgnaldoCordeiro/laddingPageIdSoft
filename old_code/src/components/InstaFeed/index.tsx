import axios from 'axios'
import { useEffect, useState } from 'react';
import styles from "./styles.module.scss";

interface IFeedItem {
  id: string;
  media_type: "IMAGE" | "VIDEO" | "CAROUSEL_ALBUM";
  media_url: string;
  permalink: string;
  caption: string;
}

export function InstaFeed() {
  const [feedList, setFeedList] = useState<IFeedItem[]>([])

  async function getInstaFeed() {
    const token = import.meta.env.VITE_INSTA_TOKEN
    const fields = "media_url, media_type, permalink, caption"
    const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}`

    const { data } = await axios.get(url);
    setFeedList(data.data)
  }

  useEffect(() => {
    getInstaFeed();
  }, [])

  return (
    <main className={styles.container}>
      {feedList.slice(0, 5).map(item => (
        <div key={item.id} className={styles.subContainer}>
          <div className={styles.containerTituloFeed}>
            <p className={styles.tituloFeed}>{item.caption}</p>
            <a className={styles.linkFeed} href={item.permalink} target="_blank">Ler mais  <i><svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.402501 1.41698L4.9825 6.00698L0.402501 10.597L1.8125 12.007L7.8125 6.00698L1.8125 0.0069809L0.402501 1.41698Z" fill="#980138" />
            </svg>
            </i></a>
          </div>
          <div className={styles.item}>
            {item.media_type === "IMAGE" ? <img src={item.media_url} /> :

              item.media_type === "CAROUSEL_ALBUM" ? <img src={item.media_url} />
                :
                <video controls>
                  <source src={item.media_url} />
                </video>

            }

          </div>
        </div>
      ))}
    </main>
  )
}