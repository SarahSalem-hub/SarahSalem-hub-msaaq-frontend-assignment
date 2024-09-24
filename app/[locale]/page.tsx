import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
    return (
        <div className={styles.page}>
            <main className={styles.main}>
                <ol>
                    <li>
                        Get started by editing <code>app/page.tsx</code>.
                    </li>
                    <li>Save and see your changes instantly.</li>
                </ol>

                <div className={styles.ctas}>
                    <Link
                        className={styles.primary}
                        href="/login"
                    >
                        Login
                    </Link>
                    <Link
                        className={styles.secondary}
                        href="/register"
                    >
                        Register
                    </Link>
                </div>
            </main>
        </div>
    );
}
