import React from "react";
import styles from "../../styles/Bands.module.css";
import Link from "next/link";

//kdoe fra chatgpt, så bands.act kan blive bands.slug = bruges til vores staticpath!
//lowercaser den, + replacer mellerum med -
//det har sine issues - når der er komma eller bindestreg i bandnavnet 
// + bands prøver den også at lave path til lol

const actToSlug = (act) => {
  return act.toLowerCase().replace(/\s+/g, "-");
  ///\\s+/g er en 'regular expression' ((regexp)) som man bruger til at fjerne mellemrum
  //ved at sige replace kan vi udskifte mellemrummet (/\\s+/g) med - bindestreg.
};

export const getStaticProps = async () => {
  const res = await fetch("https://positive-pushy-oatmeal.glitch.me/schedule");
  const data = await res.json();
  //hvis det var et component kaldt fra anden fil, skulle der være usestate og useeffect. 
  //men fordi det er next.js og 'executed in the server' og ikke i et component, behøves react-hooks ikke. 

  return {
    props: {
      bands: data,
    },
  };
};


const BandsSchedule = ({ bands }) => {


  return (
    <div className={styles.all_container}>
      <h1>SCHEDULE</h1>

      <div className={styles.day_schedule}>
        <h2>MONDAY</h2>
        <table className={styles.schedule_table}>

          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                
                {bands.Midgard &&
                  bands.Midgard.mon &&
                  bands.Midgard.mon.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                     <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      // ternary operator, giver style class alt efter band.act property. 
                      //each_band er default, men hvis band.act = break, så skal det styles som break_act. 
                      //hvis det ikke er break, så får det bare en empty string = ingenting, dont mind
                      key={`${band.slug}-${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}

              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.mon &&
                  bands.Jotunheim.mon.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.mon &&
                  bands.Vanaheim.mon.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>TUESDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.tue &&
                  bands.Midgard.tue.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.tue &&
                  bands.Jotunheim.tue.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.tue &&
                  bands.Vanaheim.tue.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>WEDNESDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.wed &&
                  bands.Midgard.wed.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.wed &&
                  bands.Jotunheim.wed.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.wed &&
                  bands.Vanaheim.wed.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>THURSDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.thu &&
                  bands.Midgard.thu.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.thu &&
                  bands.Jotunheim.thu.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.thu &&
                  bands.Vanaheim.thu.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>FRIDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.fri &&
                  bands.Midgard.fri.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.fri &&
                  bands.Jotunheim.fri.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.fri &&
                  bands.Vanaheim.fri.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>SATURDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.sat &&
                  bands.Midgard.sat.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.sat &&
                  bands.Jotunheim.sat.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.sat &&
                  bands.Vanaheim.sat.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.day_schedule}>
        <h2>SUNDAY</h2>
        <table className={styles.schedule_table}>
          <tbody className={styles.tbody_schedule}>
            <tr className={styles.tr}>
              <td className={styles.td}>
                <h3>MIDGARD</h3>
                {bands.Midgard &&
                  bands.Midgard.sun &&
                  bands.Midgard.sun.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>JOTUNHEIM</h3>

                {bands.Jotunheim &&
                  bands.Jotunheim.sun &&
                  bands.Jotunheim.sun.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>

              <td className={styles.td}>
                <h3>VANAHEIM</h3>

                {bands.Vanaheim &&
                  bands.Vanaheim.sun &&
                  bands.Vanaheim.sun.map((band) => (
                    <Link href={"/bands/" + actToSlug(band.act)} key={`${band.act}-${band.start}-${band.end}`}>
                    <div
                      className={`${styles.each_band} ${
                        band.act === "break" ? styles.break_act : ""
                      }`}
                      key={`${band.act}-${band.start}-${band.end}`}
                    >
                      <p>
                        <strong> {band.act}</strong>
                      </p>
                      <p>
                        {band.start} - {band.end}
                      </p>
                    </div>
                    </Link>
                  ))}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BandsSchedule;

