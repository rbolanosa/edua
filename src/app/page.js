"use client";

import { Button, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, useDisclosure } from "@heroui/react";
import { useState, useEffect } from "react";
import bgImage from "./img/tulipanes.jpg";
import lazoImage from "./img/lazo.svg";
import styles from "./page.module.css";
import Image from "next/image";

function HeartIcon({ filled }) {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M12 21s-6.32-3.95-8.66-7A5.38 5.38 0 0 1 7.2 3.5c1.66-.05 3.09.83 3.8 2.17C11.71 4.33 13.14 3.45 14.8 3.5A5.38 5.38 0 0 1 20.66 14c-2.34 3.05-8.66 7-8.66 7Z"
        fill={filled ? "#e53c3c" : "#ffb7b7"}
      />
    </svg>
  );
}


function SmallHeart({ style }) {
  return (
    <svg style={style} className={styles.floater} width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path d="M12 21s-6-4-8-7c-3-4 1-9 6-7 1.5.6 2.5 1.8 2 3.1.5-1.3 1.5-2.5 3-3.1 5-2 9 3 6 7-2 3-8 7-8 7Z" fill="#ff6b6b"/>
    </svg>
  );
}

function HeartCloud({ count = 36 }) {
  const hearts = Array.from({ length: count }, (_, i) => {
    const size = 16 + (i % 5) * 3;
    const top = `${(i * 7) % 90 + 3}%`;
    const left = `${(i * 13) % 90 + 5}%`;
    const delay = `${(i * 0.12) % 3}s`;
    const opacity = 0.12 + ((i % 7) * 0.06);
    return (
      <SmallHeart key={`hc-${i}`} style={{ top, left, width: size, height: size, opacity, animationDelay: delay }} />
    );
  });
  return <>{hearts}</>;
}

export default function Home() {
  const [liked, setLiked] = useState(false);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [showLocal, setShowLocal] = useState(false);
  const [letterPage, setLetterPage] = useState(0);

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setShowLocal(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <div
      className={styles.screen}
      style={{
        background:
          `url(${bgImage.src}) center center / cover no-repeat, ` +
          `linear-gradient(135deg, #163315 0%, #2e5b28 100%)`,
      }}
    >
      <div className={styles.overlayText}>Mi Preciosaaaaaaaaa! </div>

      {/* Reproductor visible en el encabezado del modal */}

      <div className={styles.cardWrap}>
        <div className={styles.card}>
          <div className={styles.cardTopSmall}>TE AMO</div>
          <div className={styles.titleStack}>
            <div className={styles.titleScript}>Feliz</div>
            <div className={styles.titleSerif}>ANIVERSARIO</div>
          </div>

          <div className={`${styles.bubble} ${styles.pulse} ${liked ? styles.bubbleActive : ""}`}>
            <Button
              radius="lg"
              variant="light"
              isIconOnly
              aria-label="Me gusta"
              aria-pressed={liked}
              onPress={() => {
                setLiked((v) => !v);
                onOpen();
                setShowLocal(true);
              }}
            >
              <HeartIcon filled={liked} />
            </Button>
          </div>

          <div className={styles.namesRow}>
            <span>Eduar</span>
            <span>Anali</span>
          </div>
          <div className={styles.date}>12.11.25</div>
        </div>
        <div className={styles.bow} role="button" aria-label="Abrir calendario" onClick={() => { onOpen(); setShowLocal(true); }}>
          <Image
            src={lazoImage}
            alt="Lazo rojo"
            width={120}
            height={80}
            className={styles.bowImg}
            priority
            draggable={false}
          />
        </div>
      </div>

      <div className={styles.floaters}>
        <SmallHeart />
        <SmallHeart />
        <SmallHeart />
        <SmallHeart />
      </div>

      {/* Modal calendario */}
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdrop="blur"
        placement="center"
        scrollBehavior="outside"
        size="xl"
        classNames={{ wrapper: styles.modalWrapper }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className={styles.modalHeader}>
                <div className={styles.mediaWrap}>
                  <iframe
                    width="100%"
                    height="60"
                    src="https://www.youtube.com/embed/InyzXj3Dhh8?si=F_Zbt24XmgO9O2-O&start=1&autoplay=1"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
              </ModalHeader>
              <ModalBody>
                <div className={styles.calModal}>
                  <div className={styles.panel}>
                    <div className={styles.panelHeader}>
                      <div className={styles.star}>✳</div>
                      <div className={styles.topTitle}>Dos años</div>
                      <div className={styles.topSubtitle}>JUNTOS</div>
                    </div>

                    {letterPage > 0 ? (
                      <div className={styles.letterPanel}>
                        <div key={letterPage} className={styles.letterSheet}>
                            {letterPage === 1 && (
                              <>
                                <div className={styles.letterTitle}>Para ti, mi amor eterno ALH:</div>
                                <div className={styles.letterBody}>
                                  <p>
                                    Hoy celebramos dos años de amor, de caminos compartidos, de risas, de abrazos, de instantes que quedaron tatuados en el alma. Dos años contigo, la mujer que cambió mi mundo y le dio sentido a cada amanecer.
                                  </p>
                                  <p>
                                    Eres bondadosa, amorosa y generosa con todos; tienes una luz tan tuya que ilumina a quien te rodea. Admiro tu fuerza, tu inteligencia, tu entrega y esa forma tan hermosa de amar con todo el corazón.
                                  </p>

                                </div>
                              </>
                            )}
                            {letterPage === 2 && (
                              <>
                                <div className={styles.letterBody}>
                                   <p>
                                    Tu sonrisa, tus hoyuelitos, tu voz, tu mirada… cada detalle tuyo me enamora una y otra vez. Me basta verte feliz para que todo en mi vida tenga sentido. Amo tenerte entre mis brazos, ver cómo el tiempo se detiene cuando estás cerca, y sentir que ahí, en ese instante, todo es perfecto.
                                  </p>
                                  <p>
                                    Tu piel, tu cuerpo, tu sensualidad… son un fuego que vive en mi mente y en mi corazón. Sentirte junto a mí es una experiencia indescriptible, una conexión que va más allá de lo físico, donde solo existen nuestras almas fundidas en amor. Amo cada parte de ti, cada curva, cada suspiro, cada instante compartido.
                                  </p>
                                  <p>
                                    Sí, tienes tu carácter, te irritas con facilidad a veces, pero eso también te hace única. Te amo completa, con tus virtudes, tus defectos, tus luces y tus sombras.
                                  </p>
                                  <p>
                                    Gracias por hacerme tan feliz, por acompañarme, por amarme y por enseñarme lo que es el amor verdadero. Estos dos años contigo han sido el mejor capítulo de mi vida, y no quiero que se acabe nunca.
                                  </p>
                                  <p>
                                    Sueño con verte convertida en mi esposa, en la madre de mis hijos, en mi compañera de vida por siempre. Porque mi amor por ti no se mide ni se explica, solo se siente… y se siente con todo el alma.
                                  </p>
                                  <p>
                                    Feliz aniversario, mi vida.Te amo más de lo que las palabras pueden decir.
                                  </p>
                                  <p>
                                    Con todo mi corazón,Edu QP
                                  </p>
                                </div>
                              </>
                            )}
                        </div>
                        <div className={styles.panelFloaters}><HeartCloud count={32} /></div>
                      </div>
                    ) : (
                      <>
                        <div className={styles.quoteRow}>
                          <div className={styles.quote}>Cada palabra es<br/>un hilo que teje la</div>
                          <div className={styles.separator}><span className={styles.smallHeart}>♡</span></div>
                          <div className={styles.quote}>historia que quiero<br/>construir contigo.</div>
                        </div>
                        <div className={styles.calendarPanel}>
                          <svg className={styles.waveFrame} viewBox="0 0 400 260" preserveAspectRatio="none">
                            <path d="M0 20 Q20 0 40 20 T80 20 T120 20 T160 20 T200 20 T240 20 T280 20 T320 20 T360 20 L400 20 L400 240 Q380 260 360 240 T320 240 T280 240 T240 240 T200 240 T160 240 T120 240 T80 240 T40 240 L0 240 Z" fill="#8db3ff"/>
                          </svg>
                          <div className={styles.calendarInner}>
                            <div className={styles.monthScript}>Noviembre</div>
                            <div className={styles.daysGrid}>
                              {/* desplazamiento para que el mes comience en sábado (5 espacios) */}
                              <span className={styles.empty}></span>
                              <span className={styles.empty}></span>
                              <span className={styles.empty}></span>
                              <span className={styles.empty}></span>
                              <span className={styles.empty}></span>
                              {Array.from({ length: 30 }, (_, i) => {
                                const day = i + 1;
                                const selected = day === 12;
                                return (
                                  <span key={day} className={`${styles.day} ${selected ? styles.selectedDay : ""}`}>{day}</span>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </>
                    )}

                    <div className={styles.bottomRow}>
                      <button className={`${styles.navBtn} ${styles.back}`} onClick={() => setLetterPage(p => Math.max(0, p - 1))}>BACK</button>
                        <button className={`${styles.navBtn} ${styles.next}`} onClick={() => setLetterPage(p => Math.min(2, p + 1))}>NEXT</button>
                      <div className={styles.arrows}><span>◀</span><span>▶</span></div>
                    </div>

                    <div className={styles.footerDates}><span>Eduar</span><span>12.11.25</span><span>Anali</span></div>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cerrar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Fallback modal (por si el portal no aparece) */}
      {showLocal && (
        <div className={styles.localOverlay} onClick={() => setShowLocal(false)}>
          <div className={styles.localContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.mediaWrap}>
              <iframe
                width="100%"
                height="60"
                src="https://www.youtube.com/embed/InyzXj3Dhh8?si=F_Zbt24XmgO9O2-O&start=1&autoplay=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <div className={styles.calModal}>
              <div className={styles.panel}>
                <button className={styles.panelClose} onClick={() => { setShowLocal(false); setLetterPage(0); }}>Cerrar</button>
                <div className={styles.panelHeader}>
                  <div className={styles.star}>✳</div>
                  <div className={styles.topTitle}>Dos años</div>
                  <div className={styles.topSubtitle}>JUNTOS</div>
                </div>

                {letterPage > 0 ? (
                  <div className={styles.letterPanel}>
                      <div key={letterPage} className={styles.letterSheet}>
                        {letterPage === 1 && (
                          <>
                            <div className={styles.letterTitle}>Para ti, mi amor eterno ALH:</div>
                            <div className={styles.letterBody}>
                              <p>
                                Hoy celebramos dos años de amor, de caminos compartidos, de risas, de abrazos, de instantes que quedaron tatuados en el alma. Dos años contigo, la mujer que cambió mi mundo y le dio sentido a cada amanecer.
                              </p>
                              <p>
                                Eres bondadosa, amorosa y generosa con todos; tienes una luz tan tuya que ilumina a quien te rodea. Admiro tu fuerza, tu inteligencia, tu entrega y esa forma tan hermosa de amar con todo el corazón.
                              </p>
                            </div>
                          </>
                        )}
                        {letterPage === 2 && (
                          <>
                            <div className={styles.letterBody}>
                              <p>
                                Tu sonrisa, tus hoyuelitos, tu voz, tu mirada… cada detalle tuyo me enamora una y otra vez. Me basta verte feliz para que todo en mi vida tenga sentido. Amo tenerte entre mis brazos, ver cómo el tiempo se detiene cuando estás cerca, y sentir que ahí, en ese instante, todo es perfecto.
                              </p>
                              <p>
                                Tu piel, tu cuerpo, tu sensualidad… son un fuego que vive en mi mente y en mi corazón. Sentirte junto a mí es una experiencia indescriptible, una conexión que va más allá de lo físico, donde solo existen nuestras almas fundidas en amor. Amo cada parte de ti, cada curva, cada suspiro, cada instante compartido.
                              </p>
                              <p>
                                Sí, tienes tu carácter, te irritas con facilidad a veces, pero eso también te hace única. Te amo completa, con tus virtudes, tus defectos, tus luces y tus sombras.
                              </p>
                              <p>
                                Gracias por hacerme tan feliz, por acompañarme, por amarme y por enseñarme lo que es el amor verdadero. Estos dos años contigo han sido el mejor capítulo de mi vida, y no quiero que se acabe nunca.
                              </p>
                              <p>
                                Sueño con verte convertida en mi esposa, en la madre de mis hijos, en mi compañera de vida por siempre. Porque mi amor por ti no se mide ni se explica, solo se siente… y se siente con todo el alma.
                              </p>
                              <p>
                                Feliz aniversario, mi vida.Te amo más de lo que las palabras pueden decir.
                              </p>
                              <p>
                                Con todo mi corazón,Edu QP
                              </p>
                            </div>
                          </>
                        )}
                      </div>
                      <div className={styles.panelFloaters}><HeartCloud count={32} /></div>
                  </div>
                ) : (
                  <>
                    <div className={styles.quoteRow}>
                      <div className={styles.quote}>Cada palabra es<br/>un hilo que teje la</div>
                      <div className={styles.separator}><span className={styles.smallHeart}>♡</span></div>
                      <div className={styles.quote}>historia que quiero<br/>construir contigo.</div>
                    </div>
                    <div className={styles.calendarPanel}>
                      <svg className={styles.waveFrame} viewBox="0 0 400 260" preserveAspectRatio="none">
                        <path d="M0 20 Q20 0 40 20 T80 20 T120 20 T160 20 T200 20 T240 20 T280 20 T320 20 T360 20 L400 20 L400 240 Q380 260 360 240 T320 240 T280 240 T240 240 T200 240 T160 240 T120 240 T80 240 T40 240 L0 240 Z" fill="#8db3ff"/>
                      </svg>
                      <div className={styles.calendarInner}>
                        <div className={styles.monthScript}>Noviembre</div>
                        <div className={styles.daysGrid}>
                          {/* 5 espacios para alinear el inicio del mes */}
                          <span className={styles.empty}></span>
                          <span className={styles.empty}></span>
                          <span className={styles.empty}></span>
                          <span className={styles.empty}></span>
                          <span className={styles.empty}></span>
                          {Array.from({ length: 30 }, (_, i) => {
                            const day = i + 1;
                            const isSelected = day === 12;
                            return (
                              <span key={day} className={`${styles.day} ${isSelected ? styles.selectedDay : ""}`}>{day}</span>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                )}

                <div className={styles.bottomRow}>
                  <button className={`${styles.navBtn} ${styles.back}`} onClick={() => setLetterPage(p => Math.max(0, p - 1))}>BACK</button>
                  <button className={`${styles.navBtn} ${styles.next}`} onClick={() => setLetterPage(p => Math.min(2, p + 1))}>NEXT</button>
                  <div className={styles.arrows}><span>◀</span><span>▶</span></div>
                </div>

                <div className={styles.footerDates}><span>Eduar</span><span>12.11.25</span><span>Anali</span></div>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}
