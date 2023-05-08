import React from "react";
import styles from "./Drawer.module.css";
import Image from "next/image";

export default function Drawer() {
  return (
    <div className={styles.drawerContainer}>
      <article className={styles.iconContainer}>
        <Image src="/botao-de-inicio.png" alt="Autor: Mayor Icons" width={50} height={50} />
      </article>
      <article className={styles.iconContainer}>
        <Image src="/engrenagem.png" alt="Autor: ambar" width={50} height={50} />
      </article>
    </div>
  );
}
