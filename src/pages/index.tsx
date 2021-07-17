import { remote } from "../utils/electron";
import styles from "./index.less";
import React from "react";
/**
 *123
 * @return {void}
 */
export default function IndexPage() {
  const onMax = () => {};
  return (
    <div>
      <h1 className={styles.title} onClick={onMax}>
        Page index123
      </h1>
    </div>
  );
}
