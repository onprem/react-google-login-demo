import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import AddOrder from "../AddOrder/AddOrder";
import useOrders from "../../hooks/useOrders";
import { ReactComponent as ForwardIcon } from "../../assets/icons/forward.svg";
import { ReactComponent as BackIcon } from "../../assets/icons/back.svg";
import styles from "./Dashboard.module.css";

const OrderTable = ({ orders, pageData }) => {
  const base = pageData.limit * pageData.page;

  const orderItems = orders.map((o, i) => {
    return (
      <div className={styles.tableItem} key={o.id}>
        <span className={styles.indexSpan}>{base + i + 1}</span>
        <span className={styles.idSpan}>{o.id}</span>
        <span className={styles.nameSpan}>{o.customer_name}</span>
        <span className={styles.emailSpan}>{o.customer_email}</span>
        <span className={styles.productSpan}>{o.product}</span>
        <span className={styles.qtySpan}>{o.quantity}</span>
      </div>
    );
  });

  return (
    <div className={styles.table}>
      <div className={styles.tableHead}>
        <span className={styles.indexSpan}>#</span>
        <span className={styles.idSpan}>OrderId</span>
        <span className={styles.nameSpan}>Name</span>
        <span className={styles.emailSpan}>Email</span>
        <span className={styles.productSpan}>Product</span>
        <span className={styles.qtySpan}>Quantity</span>
      </div>
      <div className={styles.tableBody}>{orderItems}</div>
    </div>
  );
};

const Dashboard = ({ profile }) => {
  const [pageData, setPageData] = useState({ limit: 15, page: 0 });
  const [isModalOpen, setModalOpen] = useState(false);

  const { orders, total, addOrder } = useOrders(pageData);

  if (!profile) return <Redirect to="/login" />;

  const lastPage = total ? Math.ceil(total / pageData.limit) - 1 : 0;

  const handleLimit = e => {
    const { value } = e.target;
    setPageData({
      page: 0,
      limit: Number(value)
    });
  };

  const goBack = () => {
    setPageData(d => {
      return {
        ...d,
        page: d.page - 1
      };
    });
  };

  const goFront = () => {
    setPageData(d => {
      return {
        ...d,
        page: d.page + 1
      };
    });
  };

  return (
    <section className={styles.dashSection}>
      <div className={styles.bar}>
        <h1 className={styles.orderHeading}>Your Orders:</h1>
        <span>
          <button type="button" className={styles.addBtn} onClick={() => setModalOpen(true)}>
            + ADD ORDER
          </button>
          <select className={styles.select} value={pageData.limit} onChange={handleLimit}>
            <option value="15">15</option>
            <option value="25">25</option>
            <option value="50">50</option>
            <option value="100">100</option>
          </select>
        </span>
      </div>
      <OrderTable orders={orders} pageData={pageData} />
      <div className={styles.bar}>
        <button
          type="button"
          onClick={goBack}
          disabled={!pageData.page}
          className={styles.paginationBtn}
        >
          <BackIcon />
        </button>
        <button
          type="button"
          onClick={goFront}
          disabled={pageData.page === lastPage}
          className={styles.paginationBtn}
        >
          <ForwardIcon />
        </button>
      </div>
      <AddOrder isOpen={isModalOpen} setIsOpen={setModalOpen} addOrder={addOrder} />
    </section>
  );
};

export default Dashboard;
