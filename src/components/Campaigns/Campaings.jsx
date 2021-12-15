import styles from "./Campaings.module.scss";
import { WiStars } from "react-icons/wi";
import { HiOutlineDocumentRemove } from "react-icons/hi";
import { CgArrowsExchangeAlt } from "react-icons/cg";
import { IoChatboxOutline } from "react-icons/io5";
import { BsArrowRight } from "react-icons/bs";
import { GoPlus } from "react-icons/go";
import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
const Card = ({ card_state }) => {
  //Icon Component
  const Icon = ({ icon, icon_background }) => {
    return (
      <div className={styles.icon} style={{ background: `${icon_background}` }}>
        {icon}
      </div>
    );
  };

  //RANDOM ICON FUNCTION
  const generate_icon = (card_state) => {
    switch (card_state) {
      default:
        return null;
      case "One Time":
        return (
          <Icon
            icon={<IoChatboxOutline />}
            icon_background="rgb(85, 79, 232)"
          />
        );
      case "Off-Track": {
        return (
          <Icon
            icon={<HiOutlineDocumentRemove />}
            icon_background="rgb(232,79,79)"
          />
        );
      }
      case "At Risk": {
        return (
          <Icon
            icon={<CgArrowsExchangeAlt />}
            icon_background="rgb(42, 170, 85)"
          />
        );
      }
    }
  };

  const Tag = ({ background, color, children }) => {
    return (
      <div
        className={styles.tag}
        style={{ background: background, color: color }}
      >
        <h3 className={styles.tag_title}>{children}</h3>
      </div>
    );
  };

  const generate_tag = (card_state) => {
    switch (card_state) {
      default:
        return null;
      case "One Time":
        return (
          <Tag background="rgb(209,250,229)" color="rgb(58,158,117)">
            {card_state}
          </Tag>
        );
      case "Off-Track": {
        return (
          <Tag background="rgb(255,228,230)" color="rgb(226,35,77)">
            {card_state}
          </Tag>
        );
      }
      case "At Risk": {
        return (
          <Tag background="rgb(254,243,199)" color="rgb(217,119,6)">
            {card_state}
          </Tag>
        );
      }
    }
  };

  return (
    <div className={styles.card_container}>
      <div className={styles.icon}>{generate_icon(card_state)}</div>
      <h3 className={styles.card_title}>Motion progress in Real Time Value</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde laudantium
        ut quisquam aliquam asperiores quod!
      </p>
      <h4 className={styles.date}>
        Jan 20 <BsArrowRight /> Jan 27
      </h4>
      <div className={styles.view_more}>
        {generate_tag(card_state)}
        <span>
          View <BsArrowRight />
        </span>
      </div>
    </div>
  );
};

const Campaings = () => {
  const states = [
    "One Time",
    "Off-Track",
    "At Risk",
    "One Time",
    "Off-Track",
    "At Risk",
    "One Time",
    "Off-Track",
    "At Risk",
    "One Time",
    "Off-Track",
    "At Risk",
  ];

  return (
    <main>
      <div className={styles.title}>
        <div className={styles.title_icon}>
          <h1>Campaings</h1>
          <WiStars />
        </div>
        <div className={styles.create_btn}>
          <button>
            Create Campaign <GoPlus />
          </button>
        </div>
      </div>
      <div className={styles.cards_container}>
        {states.map((state, index) => (
          <Card card_state={state} key={index} />
        ))}
      </div>
      <div className={styles.page_number}>
        <ul>
          <li className={styles.back}>
            <MdArrowBackIosNew />
          </li>
          <li className={styles.page}>
            <span className={styles.active_page}>1</span>
          </li>
          <li className={styles.page}>
            <span>2</span>
          </li>
          <li className={styles.page}>
            <span>3</span>
          </li>
          <li>
            <span>...</span>
          </li>
          <li className={styles.page}>
            <span>9</span>
          </li>
          <li className={styles.fw}>
            <MdArrowForwardIos />
          </li>
        </ul>
      </div>
    </main>
  );
};

export default Campaings;
