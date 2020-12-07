import Head from 'next/head'
import styles from '../styles/Home.module.css'
import  gsap  from 'gsap'
import { TimelineMax} from "gsap";
import { useRef, useEffect } from 'react'


export default function Home() {
  const tl = gsap.timeline({defaults:{duration: 0.1, ease: "Back.easeOut", opacity: 0}})
  let cardbg = useRef();
  let dot1 = useRef();
  let dot2 = useRef();
  let dot3 = useRef();
  let shadow = useRef();
  let blips1 = useRef();
  let blips2 = useRef();
  let blips3 = useRef();
  let blips4 = useRef();
  let blips5 = useRef();
  let blips6 = useRef();
  let blips7 = useRef();
  let blips8 = useRef();
  let blips9= useRef();
  let blips10 = useRef();
  let blips11 = useRef();
  let blips12 = useRef();
  let blips13 = useRef();
  let blips14 = useRef();
  let blips15 = useRef();
  let blips16 = useRef();
  let blips17 = useRef();
  let blips18 = useRef();
  let blips19 = useRef();
  let blips20 = useRef();
  let blips21 = useRef();
  let headerline = useRef();
  let leftarrow = useRef();
  let rightarrow = useRef();
  let backshadow = useRef();
  let innershadow = useRef();
  
  useEffect(()=>{
    tl.from(cardbg.current, { delay: 1, duration: 0.5, transformOrigin: 'center', scale: .2})
      .from(headerline.current, {scaleX:0})
      .from(backshadow.current, {duration: 1, transformOrigin: 'center', scale: .1})
      .from(dot1.current, {transformOrigin: 'center', scale: .2 })
      .from(dot2.current, {transformOrigin: 'center', scale: .2 })
      .from(dot3.current, {transformOrigin: 'center', scale: .2 })
      .from(shadow.current, {transformOrigin: 'top', scale: .2 },"-=.7")
      .from(innershadow.current, {transformOrigin: 'center', scale: .2 })
      .from(blips1.current, {scaleX:0})
      .from(blips2.current, {scaleX:0})
      .from(blips3.current, {scaleX:0})
      .from(blips4.current, {scaleX:0})
      .from(blips5.current, {scaleX:0})
      .from(blips6.current, {scaleX:0})
      .from(blips7.current, {scaleX:0})
      .from(blips8.current, {scaleX:0})
      .from(blips9.current, {scaleX:0})
      .from(blips10.current, {scaleX:0})
      .from(blips11.current, {scaleX:0})
      .from(leftarrow.current, {duration: 0.1, scaleX:0})
      .from(rightarrow.current, {duration: 0.1, scaleX:0})
      .from(blips12.current, {scaleX:0})
      .from(blips13.current, {scaleX:0})
      .from(blips14.current, {scaleX:0})
      .from(blips15.current, {scaleX:0})
      .from(blips16.current, {scaleX:0})
      .from(blips17.current, {scaleX:0})
      .from(blips18.current, {scaleX:0})
      .from(blips19.current, {scaleX:0})
      .from(blips20.current, {scaleX:0})
      .from(blips21.current, {scaleX:0})
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Gustavo Madrid Web Dev
        </title>
        <link rel="icon" href="/pageicon.svg" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>

        <div className={styles.herocontainer}>
          <div className={styles.hero}>
            <h2 className={styles.hi}>Hi! I'm <span>Gustavo</span>, Front-End Web Developer based in Argentina.</h2>
            <div className={styles.heroilli}>
              <svg className={styles.heromaincard} viewBox="0 0 516 369" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path ref={backshadow} d="M242.925 354.436C129.218 345.787 -6.38267 257.724 0.520976 167.049C7.42462 76.3738 138.756 -8.03713 252.463 0.611887C366.17 9.2609 431.623 178.717 424.72 269.393C417.816 360.068 356.633 363.085 242.925 354.436Z" fill="#1D1E21"/>
                <path ref={shadow} d="M252.462 369C383.552 369 489.822 362.492 489.822 354.465C489.822 346.438 383.552 339.93 252.462 339.93C121.371 339.93 15.1017 346.438 15.1017 354.465C15.1017 362.492 121.371 369 252.462 369Z" fill="#3F3D56"/>
                <path ref={innershadow} opacity="0.1" d="M252.462 363.842C364.122 363.842 454.64 359.539 454.64 354.231C454.64 348.922 364.122 344.619 252.462 344.619C140.802 344.619 50.2835 348.922 50.2835 354.231C50.2835 359.539 140.802 363.842 252.462 363.842Z" fill="black"/>
                <path ref={cardbg} d="M432.124 75.9568H79.3672V352.59H432.124V75.9568Z" fill="#3F3D56"/>
                <path ref={blips1} d="M251.732 113.761H164.707C164.569 113.762 164.431 113.735 164.303 113.682C164.174 113.629 164.057 113.551 163.959 113.453C163.861 113.355 163.783 113.238 163.73 113.11C163.676 112.982 163.649 112.845 163.649 112.706C163.649 112.567 163.676 112.429 163.73 112.301C163.783 112.173 163.861 112.057 163.959 111.958C164.057 111.86 164.174 111.783 164.303 111.73C164.431 111.677 164.569 111.65 164.707 111.65H251.732C252.012 111.651 252.28 111.762 252.477 111.96C252.675 112.158 252.786 112.426 252.786 112.706C252.786 112.985 252.675 113.253 252.477 113.451C252.28 113.649 252.012 113.761 251.732 113.761V113.761Z" fill="#F2F2F2"/>
                <path ref={blips2} d="M292.076 113.972H267.151C266.871 113.972 266.603 113.861 266.405 113.663C266.207 113.465 266.095 113.197 266.095 112.917C266.095 112.637 266.207 112.368 266.405 112.17C266.603 111.972 266.871 111.861 267.151 111.861H292.076C292.356 111.861 292.625 111.972 292.823 112.17C293.021 112.368 293.132 112.637 293.132 112.917C293.132 113.197 293.021 113.465 292.823 113.663C292.625 113.861 292.356 113.972 292.076 113.972V113.972Z" fill="#F2F2F2"/>
                <path ref={blips3} d="M189.421 125.373H164.496C164.216 125.373 163.947 125.262 163.749 125.064C163.551 124.866 163.44 124.598 163.44 124.318C163.44 124.038 163.551 123.769 163.749 123.571C163.947 123.373 164.216 123.262 164.496 123.262H189.421C189.701 123.262 189.969 123.373 190.168 123.571C190.366 123.769 190.477 124.038 190.477 124.318C190.477 124.598 190.366 124.866 190.168 125.064C189.969 125.262 189.701 125.373 189.421 125.373V125.373Z" fill="#F2F2F2"/>
                <path ref={blips4} d="M346.995 125.373H210.121C209.841 125.373 209.572 125.262 209.374 125.064C209.176 124.866 209.065 124.598 209.065 124.318C209.065 124.038 209.176 123.769 209.374 123.571C209.572 123.373 209.841 123.262 210.121 123.262H346.995C347.133 123.262 347.271 123.289 347.399 123.342C347.527 123.395 347.643 123.473 347.741 123.571C347.839 123.669 347.917 123.786 347.97 123.914C348.023 124.042 348.051 124.179 348.051 124.318C348.051 124.456 348.023 124.593 347.97 124.722C347.917 124.85 347.839 124.966 347.741 125.064C347.643 125.162 347.527 125.24 347.399 125.293C347.271 125.346 347.133 125.373 346.995 125.373V125.373Z" fill="#F2F2F2"/>
                <path ref={blips5} d="M252.154 136.985H165.13C164.85 136.985 164.581 136.874 164.383 136.676C164.185 136.478 164.074 136.209 164.074 135.929C164.074 135.649 164.185 135.381 164.383 135.183C164.581 134.985 164.85 134.874 165.13 134.874H252.154C252.435 134.874 252.703 134.985 252.901 135.183C253.099 135.381 253.211 135.649 253.211 135.929C253.211 136.209 253.099 136.478 252.901 136.676C252.703 136.874 252.435 136.985 252.154 136.985V136.985Z" fill="#F2F2F2"/>
                <path ref={blips6} d="M346.994 137.196H259.97C259.69 137.196 259.421 137.085 259.223 136.887C259.025 136.689 258.914 136.421 258.914 136.141C258.914 135.861 259.025 135.592 259.223 135.394C259.421 135.196 259.69 135.085 259.97 135.085H346.994C347.275 135.085 347.543 135.196 347.741 135.394C347.939 135.592 348.051 135.861 348.051 136.141C348.051 136.421 347.939 136.689 347.741 136.887C347.543 137.085 347.275 137.196 346.994 137.196V137.196Z" fill="#F2F2F2"/>
                <path ref={blips7} d="M252.366 148.597H165.341C165.061 148.597 164.792 148.486 164.594 148.288C164.396 148.09 164.285 147.821 164.285 147.541C164.285 147.261 164.396 146.993 164.594 146.795C164.792 146.597 165.061 146.486 165.341 146.486H252.366C252.646 146.486 252.914 146.597 253.113 146.795C253.311 146.993 253.422 147.261 253.422 147.541C253.422 147.821 253.311 148.09 253.113 148.288C252.914 148.486 252.646 148.597 252.366 148.597V148.597Z" fill="#F2F2F2"/>
                <path ref={blips8} d="M292.076 148.597H267.151C266.871 148.597 266.603 148.486 266.405 148.288C266.207 148.09 266.095 147.821 266.095 147.541C266.095 147.261 266.207 146.993 266.405 146.795C266.603 146.597 266.871 146.486 267.151 146.486H292.076C292.356 146.486 292.625 146.597 292.823 146.795C293.021 146.993 293.132 147.261 293.132 147.541C293.132 147.821 293.021 148.09 292.823 148.288C292.625 148.486 292.356 148.597 292.076 148.597V148.597Z" fill="#F2F2F2"/>
                <path ref={blips9} d="M252.577 160.209H165.552C165.272 160.209 165.004 160.098 164.805 159.9C164.607 159.702 164.496 159.433 164.496 159.153C164.496 158.873 164.607 158.605 164.805 158.407C165.004 158.209 165.272 158.098 165.552 158.098H252.577C252.857 158.098 253.126 158.209 253.324 158.407C253.522 158.605 253.633 158.873 253.633 159.153C253.633 159.433 253.522 159.702 253.324 159.9C253.126 160.098 252.857 160.209 252.577 160.209V160.209Z" fill="#F2F2F2"/>
                <path ref={blips10} d="M292.076 159.998H267.151C267.013 159.998 266.875 159.971 266.747 159.918C266.618 159.865 266.502 159.787 266.403 159.689C266.305 159.591 266.227 159.475 266.174 159.347C266.121 159.218 266.093 159.081 266.093 158.942C266.093 158.803 266.121 158.666 266.174 158.538C266.227 158.409 266.305 158.293 266.403 158.195C266.502 158.097 266.618 158.019 266.747 157.966C266.875 157.913 267.013 157.886 267.151 157.886H292.076C292.215 157.886 292.352 157.913 292.481 157.966C292.609 158.019 292.726 158.097 292.824 158.195C292.923 158.293 293.001 158.409 293.054 158.538C293.107 158.666 293.134 158.803 293.134 158.942C293.134 159.081 293.107 159.218 293.054 159.347C293.001 159.475 292.923 159.591 292.824 159.689C292.726 159.787 292.609 159.865 292.481 159.918C292.352 159.971 292.215 159.998 292.076 159.998V159.998Z" fill="#F2F2F2"/>
                <path ref={blips11} d="M333.899 159.998H308.974C308.694 159.997 308.426 159.886 308.229 159.688C308.031 159.49 307.92 159.222 307.92 158.942C307.92 158.663 308.031 158.394 308.229 158.196C308.426 157.999 308.694 157.887 308.974 157.886H333.899C334.037 157.886 334.175 157.913 334.303 157.966C334.432 158.019 334.548 158.097 334.647 158.195C334.745 158.293 334.823 158.409 334.876 158.538C334.929 158.666 334.957 158.803 334.957 158.942C334.957 159.081 334.929 159.218 334.876 159.347C334.823 159.475 334.745 159.591 334.647 159.689C334.548 159.787 334.432 159.865 334.303 159.918C334.175 159.971 334.037 159.998 333.899 159.998V159.998Z" fill="#F2F2F2"/>
                <path ref={blips12} d="M251.838 284.773H164.813C164.533 284.773 164.264 284.661 164.066 284.463C163.868 284.265 163.757 283.997 163.757 283.717C163.757 283.437 163.868 283.169 164.066 282.971C164.264 282.773 164.533 282.661 164.813 282.661H251.838C252.118 282.661 252.386 282.773 252.584 282.971C252.783 283.169 252.894 283.437 252.894 283.717C252.894 283.997 252.783 284.265 252.584 284.463C252.386 284.661 252.118 284.773 251.838 284.773Z" fill="#F2F2F2"/>
                <path ref={blips13} d="M189.526 296.384H164.602C164.322 296.384 164.053 296.273 163.855 296.075C163.657 295.877 163.546 295.609 163.546 295.329C163.546 295.049 163.657 294.78 163.855 294.582C164.053 294.384 164.322 294.273 164.602 294.273H189.526C189.806 294.273 190.075 294.384 190.273 294.582C190.471 294.78 190.582 295.049 190.582 295.329C190.582 295.609 190.471 295.877 190.273 296.075C190.075 296.273 189.806 296.384 189.526 296.384V296.384Z" fill="#F2F2F2"/>
                <path ref={blips14} d="M347.1 296.384H210.226C209.946 296.384 209.678 296.273 209.48 296.075C209.281 295.877 209.17 295.609 209.17 295.329C209.17 295.049 209.281 294.78 209.48 294.582C209.678 294.384 209.946 294.273 210.226 294.273H347.1C347.38 294.273 347.649 294.384 347.847 294.582C348.045 294.78 348.156 295.049 348.156 295.329C348.156 295.609 348.045 295.877 347.847 296.075C347.649 296.273 347.38 296.384 347.1 296.384V296.384Z" fill="#F2F2F2"/>
                <path ref={blips15} d="M251.415 307.996H164.391C164.11 307.996 163.842 307.885 163.644 307.687C163.446 307.489 163.334 307.221 163.334 306.941C163.334 306.661 163.446 306.392 163.644 306.194C163.842 305.996 164.11 305.885 164.391 305.885H251.415C251.695 305.885 251.964 305.996 252.162 306.194C252.36 306.392 252.471 306.661 252.471 306.941C252.471 307.221 252.36 307.489 252.162 307.687C251.964 307.885 251.695 307.996 251.415 307.996Z" fill="#F2F2F2"/>
                <path ref={blips16} d="M288.802 308.207H263.877C263.597 308.207 263.329 308.096 263.131 307.898C262.933 307.7 262.821 307.432 262.821 307.152C262.821 306.872 262.933 306.603 263.131 306.405C263.329 306.207 263.597 306.096 263.877 306.096H288.802C289.082 306.096 289.351 306.207 289.549 306.405C289.747 306.603 289.858 306.872 289.858 307.152C289.858 307.432 289.747 307.7 289.549 307.898C289.351 308.096 289.082 308.207 288.802 308.207Z" fill="#F2F2F2"/>
                <path ref={blips17} d="M330.625 308.207H305.7C305.42 308.207 305.151 308.096 304.953 307.898C304.755 307.7 304.644 307.432 304.644 307.152C304.644 306.872 304.755 306.603 304.953 306.405C305.151 306.207 305.42 306.096 305.7 306.096H330.625C330.905 306.096 331.173 306.207 331.371 306.405C331.569 306.603 331.681 306.872 331.681 307.152C331.681 307.432 331.569 307.7 331.371 307.898C331.173 308.096 330.905 308.207 330.625 308.207V308.207Z" fill="#F2F2F2"/>
                <path ref={blips18} d="M251.626 319.608H164.602C164.463 319.609 164.325 319.581 164.197 319.529C164.069 319.476 163.952 319.398 163.854 319.3C163.755 319.202 163.677 319.085 163.624 318.957C163.571 318.829 163.543 318.691 163.543 318.553C163.543 318.414 163.571 318.276 163.624 318.148C163.677 318.02 163.755 317.903 163.854 317.805C163.952 317.707 164.069 317.63 164.197 317.577C164.325 317.524 164.463 317.497 164.602 317.497H251.626C251.765 317.497 251.903 317.524 252.031 317.577C252.16 317.63 252.276 317.707 252.375 317.805C252.473 317.903 252.551 318.02 252.604 318.148C252.657 318.276 252.685 318.414 252.685 318.553C252.685 318.691 252.657 318.829 252.604 318.957C252.551 319.085 252.473 319.202 252.375 319.3C252.276 319.398 252.16 319.476 252.031 319.529C251.903 319.581 251.765 319.609 251.626 319.608V319.608Z" fill="#F2F2F2"/>
                <path ref={blips19} d="M288.802 319.608H263.877C263.597 319.608 263.329 319.497 263.131 319.299C262.933 319.101 262.821 318.833 262.821 318.553C262.821 318.273 262.933 318.004 263.131 317.806C263.329 317.608 263.597 317.497 263.877 317.497H288.802C289.082 317.497 289.351 317.608 289.549 317.806C289.747 318.004 289.858 318.273 289.858 318.553C289.858 318.833 289.747 319.101 289.549 319.299C289.351 319.497 289.082 319.608 288.802 319.608V319.608Z" fill="#F2F2F2"/>
                <path ref={blips20} d="M189.526 331.431H164.602C164.463 331.432 164.325 331.404 164.197 331.352C164.069 331.299 163.952 331.221 163.854 331.123C163.755 331.025 163.677 330.908 163.624 330.78C163.571 330.652 163.543 330.514 163.543 330.376C163.543 330.237 163.571 330.099 163.624 329.971C163.677 329.843 163.755 329.726 163.854 329.628C163.952 329.53 164.069 329.453 164.197 329.4C164.325 329.347 164.463 329.32 164.602 329.32H189.526C189.665 329.32 189.803 329.347 189.931 329.4C190.06 329.453 190.176 329.53 190.275 329.628C190.373 329.726 190.451 329.843 190.504 329.971C190.557 330.099 190.585 330.237 190.585 330.376C190.585 330.514 190.557 330.652 190.504 330.78C190.451 330.908 190.373 331.025 190.275 331.123C190.176 331.221 190.06 331.299 189.931 331.352C189.803 331.404 189.665 331.432 189.526 331.431Z" fill="#F2F2F2"/>
                <path ref={blips21} d="M347.1 331.431H210.226C210.087 331.432 209.95 331.404 209.822 331.352C209.693 331.299 209.576 331.221 209.478 331.123C209.38 331.025 209.302 330.908 209.249 330.78C209.195 330.652 209.168 330.514 209.168 330.376C209.168 330.237 209.195 330.099 209.249 329.971C209.302 329.843 209.38 329.726 209.478 329.628C209.576 329.53 209.693 329.453 209.822 329.4C209.95 329.347 210.087 329.32 210.226 329.32H347.1C347.38 329.32 347.649 329.431 347.847 329.629C348.045 329.827 348.156 330.096 348.156 330.376C348.156 330.656 348.045 330.924 347.847 331.122C347.649 331.32 347.38 331.431 347.1 331.431V331.431Z" fill="#F2F2F2"/>
                <path ref={leftarrow} d="M230.821 188.077L197.025 221.435L230.821 254.793L238.425 247.193L212.867 221.646L238.636 195.889L230.821 188.077Z" fill="#3AA4D1"/>
                <path ref={rightarrow} d="M280.67 188.077L314.466 221.435L280.67 254.793L273.066 247.193L298.624 221.646L272.855 195.889L280.67 188.077Z" fill="#3AA4D1"/>
                <path ref={dot1} d="M88.749 87.2097C91.0806 87.2097 92.9708 85.3204 92.9708 82.9898C92.9708 80.6593 91.0806 78.77 88.749 78.77C86.4173 78.77 84.5272 80.6593 84.5272 82.9898C84.5272 85.3204 86.4173 87.2097 88.749 87.2097Z" fill="#3AA4D1"/>
                <path ref={dot2} d="M100.007 87.2097C102.339 87.2097 104.229 85.3204 104.229 82.9898C104.229 80.6593 102.339 78.77 100.007 78.77C97.6755 78.77 95.7853 80.6593 95.7853 82.9898C95.7853 85.3204 97.6755 87.2097 100.007 87.2097Z" fill="#3AA4D1"/>
                <path ref={dot3} d="M111.265 87.2097C113.597 87.2097 115.487 85.3204 115.487 82.9898C115.487 80.6593 113.597 78.77 111.265 78.77C108.934 78.77 107.044 80.6593 107.044 82.9898C107.044 85.3204 108.934 87.2097 111.265 87.2097Z" fill="#3AA4D1"/>
                <path ref={headerline} opacity="0.1" d="M432.124 90.0229H79.3672V91.4295H432.124V90.0229Z" fill="black"/>
              </svg>
            </div>
          </div>

          <img src="../mouse.svg" className={styles.mouse} />
        
        </div>

        <h1 className={styles.projects}>&lt;projects&gt;</h1>

        <div className={styles.projectscontainer}>
          <h1 className={styles.foundittitle}>Found it!</h1>
          <div className={styles.founditproject}>
            <img src="../foundit.png" className={styles.projectposter}/>
            <div className={styles.founditbuttons}>
              <a href="https://github.com/morbidgus/foundit" rel="noreferrer" target="_blank" className={styles.button}>View code</a>
              <a href="https://foundit.vercel.app/" rel="noreferrer" target="_blank" className={styles.button}>View project</a>
            </div>

          </div>
            <p className={styles.founditdescription}>Responsive Next.js web application that uses TMDb API to get the movie data. This app
             presents the ability to search a title and get details about the selected movie</p>
             <p className={styles.founditdescription}>Technologies used:</p>
             <p className={styles.founditdescription}>Html, Css, Next.js, Git and Figma</p>



          <h1 className={styles.foundittitle}>Athena</h1>
          <div className={styles.founditproject}>
            <img src="../athena.png" className={styles.projectposter}/>
            <div className={styles.founditbuttons}>
            <a href="https://github.com/morbidgus/Athena" rel="noreferrer" target="_blank" className={styles.button}>View code</a>
            <a href="https://pedantic-yonath-561489.netlify.app/" rel="noreferrer" target="_blank" className={styles.button}>View project</a>
            </div>

          </div>
            <p className={styles.founditdescription}>Responsive Vanilla Js web application. This app presents the ability to access a collection of
             amazing free resources for web developers.</p>
             <p className={styles.founditdescription}>Technologies used:</p>
             <p className={styles.founditdescription}>Html, Css, Vanilla JavaScript, Git and Figma</p>
        </div>

        <h1 className={styles.aboutme}>&lt;about me&gt;</h1>

        <p className={styles.about}>Hi! My name is Gustavo Madrid. I'm a 23 y/o living in Buenos Aires, Argentina. I've discovered
          web development in 2019 and been learning it by myself ever since. I believe anything can be overcome with persistence and dedication. I'm always up for learning new things!
        </p>

        <h1 className={styles.skills}>&lt;skills&gt;</h1>

        <div className={styles.skillscontainer}>
          <div className={styles.skill}>
            <img src="./html.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>HTML</h1>
          </div>
          <div className={styles.skill}>
            <img src="./css.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>CSS</h1>
          </div>
          <div className={styles.skill}>
            <img src="./js.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>JAVASCRIPT</h1>
          </div>
          <div className={styles.skill}>
            <img src="./figma.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>FIGMA</h1>
          </div>
          <div className={styles.skill}>
            <img src="./github.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>GITHUB</h1>
          </div>
          <div className={styles.skill}>
            <img src="./ai.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>ILLUSTRATOR</h1>
          </div>
          <div className={styles.skill}>
            <img src="./ps.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>PHOTOSHOP</h1>
          </div>
          <div className={styles.skill}>
            <img src="./git.png" className={styles.skillicon} />
            <h1 className={styles.skillname}>GIT</h1>
          </div>
          <div className={styles.skill}>
            <h1 className={styles.more}>MORE COMING SOON...</h1>
          </div>
        </div>  

        <h1 className={styles.contact}>&lt;contact&gt;</h1>

        <p className={styles.hireme}>Lets build something great</p>

        <div className={styles.contacts}>
          <a href="https://github.com/morbidgus" target="_blank">
          <img src="./githublack.svg" className={styles.social}/>
          </a>
          <a href="https://www.instagram.com/guuss_m/" target="_blank">
          <img src="./instagram.svg" className={styles.social}/>
          </a>
        
        </div>

        <p className={styles.email}>madridgustavo23@gmail.com</p>   
          
      </main>
    </div>
  )
}
