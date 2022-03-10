<script lang="ts">
import styles from "./Notification.module.sass";
    
export const classes: string = ""
const items = [
  {
    title: "ETH received",
    price: "0.08 ETH recived",
    date: "2 days ago",
    color: "#3772FF",
    image: "/images/content/notification-pic-1.jpg",
    url: "/activity",
  },
  {
    title: "C O I N Z",
    price: "New bid 0.2 ETH",
    date: "3 days ago",
    color: "#3772FF",
    image: "/images/content/notification-pic-2.jpg",
    url: "/activity",
  },
  {
    title: "ETH received",
    price: "0.08 ETH recived",
    date: "4 days ago",
    color: "#3772FF",
    image: "/images/content/notification-pic-3.jpg",
    url: "/activity",
  },
  {
    title: "ETH received",
    price: "0.08 ETH recived",
    date: "5 days ago",
    color: "#3772FF",
    image: "/images/content/notification-pic-4.jpg",
    url: "/activity",
  },
];
</script>
    
<div class={styles.notification}>
    <button
      class={styles.head}
    >
        Notification
      <!-- <Icon name="notification" size="24" /> -->
    </button>
  </div>