import Decade from "@site/src/pages/blogs/QuantStack-Ten-Years.md";
import styles from "@site/src/components/about/styles.module.css";
import Layout from "@theme/Layout";
import Footer from "@site/src/components/footer/Footer";

export default function PostComponent() {
  return (
    <Layout>
      <div className="flex-full-centered">
        <div className={styles.large_portrait_card}>
          <div className={"container"}>
            <div
              className="row"
              style={{ marginBottom: "var(--ifm-spacing-lg)" }}
            >
              <div className="col col--10 col--offset-1">
                <Decade />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
}
