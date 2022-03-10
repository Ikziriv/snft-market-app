<script lang="ts">
import styles from "./User.module.sass";

export const classes: string = ""
const items = [
  {
    title: "My profile",
    icon: "user",
    url: "/profile",
  },
  {
    title: "My items",
    icon: "image",
    url: "/item",
  },
  {
    title: "Dark theme",
    icon: "bulb",
  },
  {
    title: "Disconnect",
    icon: "exit",
    url: "https://ui8.net/ui8/products/crypter-nft-marketplace-ui-kit",
  },
];
</script>

<div class={styles.user}>
<div class={styles.head}>
    <div class={styles.avatar}>
    <img src="/images/content/avatar-user.jpg" alt="Avatar" />
    </div>
    <div class={styles.wallet}>
    7.00698 <span class={styles.currency}>ETH</span>
    </div>
</div>
<div class={styles.body}>
    <div class={styles.name}>Enrico Cole</div>
    <div class={styles.code}>
        <div class={styles.number}>0xc4c16ab5ac7d...b21a</div>
        <button class={styles.copy}>
        <!-- <Icon name="copy" size="16" /> -->
        </button>
    </div>
    <div class={styles.wrap}>
        <div class={styles.line}>
        <div class={styles.preview}>
            <img
            src="/images/content/etherium-circle.jpg"
            alt="Etherium"
            />
        </div>
        <div class={styles.details}>
            <div class={styles.info}>Balance</div>
            <div class={styles.price}>4.689 ETH</div>
        </div>
        </div>
        <button
        class={styles.button}
        >
        Manage fun on Coinbase
        </button>
    </div>
    <div class={styles.menu}>

    </div>
</div>
</div>