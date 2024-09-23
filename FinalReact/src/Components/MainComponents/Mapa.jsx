import React from 'react';

const Mapa = ({ 
  src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d202.42304247598733!2d-85.64669868305502!3d9.975381875944462!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2scr!4v1726152765866!5m2!1ses-419!2scr" ,
  width = "100%",
  height = "450"
}) => {
  return (
    <div style={{ overflow: 'hidden', width: "100%", height }}>
      <br />
      <iframe
        src={src}
        width={width}
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Mapa;
