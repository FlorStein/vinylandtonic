"use client";

import { useState } from "react";

const asset=(p:string)=>`${process.env.NEXT_PUBLIC_BASE_PATH??""}${p}`;
const nights=[
  {day:"JUE 22 OCT",artist:"Mora Funes",genre:"Soul · Rare groove",time:"21:30"},
  {day:"VIE 23 OCT",artist:"Discos Pampa",genre:"Jazz-funk · Brasil",time:"22:00"},
  {day:"SÁB 24 OCT",artist:"Nico Cota",genre:"Disco · Boogie",time:"22:30"},
];
const drinks=[
  {name:"Side A",note:"Gin · bergamota · fino",price:"12"},
  {name:"Crimson Wax",note:"Campari · frambuesa · cacao",price:"14"},
  {name:"33⅓",note:"Whisky · miel tostada · bitters",price:"15"},
];

export default function Home(){
  const [night,setNight]=useState(0);
  const [menu,setMenu]=useState(false);
  return <main>
    <div className="noise"/>
    <header>
      <a className="logo" href="#top"><span>V</span><b>VINYL<br/>& TONIC</b></a>
      <nav><a href="#sound">El sonido</a><a href="#sessions">Sesiones</a><a href="#drinks">La barra</a></nav>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Abrir menú">{menu?"Cerrar":"Menú"}<i/></button>
      <a className="reserve" href="#visit">Reservar mesa ↗</a>
    </header>
    {menu&&<aside className="drawer">{["El sonido","Sesiones","La barra","Visitanos"].map((x,i)=><a href={`#${["sound","sessions","drinks","visit"][i]}`} onClick={()=>setMenu(false)} key={x}><small>0{i+1}</small>{x}<span>↗</span></a>)}</aside>}

    <section className="hero" id="top">
      <img src={asset("/images/hero-bar.png")} alt="Vinyl & Tonic listening bar"/>
      <div className="veil"/>
      <span className="kicker">LISTENING BAR · BUENOS AIRES</span>
      <h1><span>Vinyl</span><em>& Tonic</em></h1>
      <p>Buenos discos.<br/>Tragos precisos.<br/>Volumen justo.</p>
      <a className="spin" href="#sessions"><i>▶</i><span>Próxima sesión<br/><b>{nights[0].artist}</b></span></a>
      <div className="hero-foot"><span>PALERMO · 19:00—02:00</span><span>SCROLL TO LISTEN ↓</span></div>
    </section>

    <section className="manifesto" id="sound">
      <span className="tag">[ MANIFIESTO SONORO ]</span>
      <h2>No ponemos música<br/>de fondo. <em>La música<br/>es el lugar.</em></h2>
      <p>Un listening bar construido alrededor de una colección de 4.000 discos, un sistema analógico y la curiosidad de escuchar algo que todavía no conocés.</p>
    </section>

    <section className="room">
      <img src={asset("/images/listening-room.png")} alt="Sala de escucha de Vinyl & Tonic"/>
      <div className="room-copy"><span className="tag">[ SALA B ]</span><h2>Sentate.<br/><em>Escuchá.</em></h2><p>Dos parlantes, veinte lugares y ningún apuro. Todos los álbumes se reproducen completos, lado A y lado B.</p><div className="levels"><span>LOW</span><i/><i/><i/><i/><i className="on"/><i className="on"/><span>HIGH</span></div></div>
    </section>

    <section className="sessions" id="sessions">
      <div className="session-copy"><span className="tag">[ EN LA CABINA ]</span><h2>Esta<small>VOL. 01 · 22—24 OCT 2026</small><em>semana.</em></h2><p>Selectors, coleccionistas y músicos comparten los discos que no suelen salir de casa.</p></div>
      <div className="record"><div className="vinyl"><span>{nights[night].artist}<br/><small>{nights[night].genre}</small></span></div></div>
      <div className="lineup">{nights.map((n,i)=><button className={night===i?"active":""} onClick={()=>setNight(i)} key={n.day}><span>{n.day}</span><b>{n.artist}</b><small>{n.genre}</small><em>{n.time}</em></button>)}</div>
    </section>

    <section className="cocktails" id="drinks">
      <img src={asset("/images/cocktails.png")} alt="Cócteles de autor junto a una tornamesa"/>
      <div className="cocktail-card"><span className="tag">[ LA BARRA ]</span><h2>Drink by<br/><em>the mood.</em></h2>{drinks.map(d=><div className="drink" key={d.name}><b>{d.name}</b><span>{d.note}</span><em>{d.price}</em></div>)}<a href="mailto:hola@vinylandtonic.com">Ver carta completa ↗</a></div>
    </section>

    <section className="live">
      <img src={asset("/images/session.png")} alt="Sesión de vinilos en vivo"/>
      <div><span className="tag">[ NEEDLE DROP ]</span><h2>Una aguja.<br/>Una sala.<br/><em>Una noche.</em></h2></div>
    </section>

    <section className="visit" id="visit">
      <span className="tag">[ VENÍ A ESCUCHAR ]</span>
      <h2>Tu mesa<br/><em>está sonando.</em></h2>
      <a href="mailto:hola@vinylandtonic.com">Reservar una mesa <span>↗</span></a>
      <div className="details"><p>Gorriti 4812<br/>Palermo, Buenos Aires</p><p>Mié—Jue 19—01<br/>Vie—Sáb 19—02</p><p>+54 11 5555 3313<br/>@vinylandtonic</p></div>
    </section>
    <footer><span>VINYL & TONIC © 2026</span><span>33⅓ RPM · STEREO</span><a href="#top">VOLVER ARRIBA ↑</a></footer>
  </main>
}
