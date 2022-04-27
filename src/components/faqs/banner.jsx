import React, { useState } from "react";
import './banner.css'
import {BsDropletHalf} from 'react-icons/bs'
import {BsDropletFill} from 'react-icons/bs'

const QuestionContext = React.createContext();

export default function Banner({ children, ...restProps }) {
  return (
    <div className="banner__container" {...restProps}>
      <div className="banner__inner">{children}</div>
    </div>
  );
}
Banner.Header = function BannerHeader({ children, ...restProps }) {
  return <h1 className="banner__header" {...restProps}> {children}</h1>;
};
Banner.Entity = function BannerEntity({ children, ...restProps }) {
  const [open, setOpen] = useState(false);
  return (
    <QuestionContext.Provider value={{ open, setOpen }}>
      <div className="entity" {...restProps}> {children}</div>
    </QuestionContext.Provider>
  );
};
Banner.Question = function BannerHeader({ children, ...restProps }) {
  const { open, setOpen } = React.useContext(QuestionContext);

  return (
    <div className="question" onClick={() => setOpen((open) => !open)} {...restProps}>
      {children}
      {open ? <h3><BsDropletFill/></h3> : <h3><BsDropletHalf/></h3>}
    </div>
  );
};
Banner.Text = function BannerText({ children, ...restProps }) {
  const { open } = React.useContext(QuestionContext);
  return open ? <div className="banner__text" {...restProps}>{children}</div> : null;
};