<script lang="ts">
import styles from "./Header.module.sass";
import Notification from "./notification/Notification.svelte";
import User from "./user/User.svelte";
import Image from "../Image.svelte";
</script>

<header class={styles.header}>
    <div class={styles.container}>
      <a class={styles.logo} href="/">
        <Image
            classes={styles.pic}
            src="/images/logo-dark.png"
            srcDark="/images/logo-light.png"
            alt="Fitness Pro"
        />
      </a>
      <div class={styles.wrapper}>
        <nav class={styles.nav}>
            Nav Map
        </nav>
        <form
          class={styles.search}
          action=""
        >
          <input
            class={styles.input}
            type="text"
            name="search"
            placeholder="Search"
            required
          />
          <button class={styles.result}>
            Search
            <!-- <Icon name="search" size="20" /> -->
          </button>
        </form>
        <a
          class={styles.button}
          href="/upload-variants"
        >
          Upload
        </a>
      </div>
      <Notification classes={styles.notification} />
      <a
        class={styles.button}
        href="/upload-variants"
      >
        Upload
      </a>
      <User classes={styles.user} />
      <button
        class={styles.burger}
      ></button>
    </div>
  </header>